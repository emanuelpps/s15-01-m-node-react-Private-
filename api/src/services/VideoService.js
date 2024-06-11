import videoModel from "../models/VideoModel.js";
import cloudinary from "../utilities/upload.js"

export default class VideoService{
    getAll = async() => await videoModel.find();
    getById = async (id) => await videoModel.findOne({ _id: id });
    create = async (data) => await videoModel.create(data);
    update = async (id, data) => await videoModel.updateOne({ _id: id }, data);
    delete = async (id) => await videoModel.deleteOne({ _id: id });

    async postVideo({ video }, videoData){
        let result_video;
        let videom = new videoModel();
        console.log('service postVideo, video, videoData: ', video, videoData)
        if (!video) {
            return { msg: 'No File Selected. Please select an file and try' };
        }
        result_video = await cloudinary.uploader.upload(video.tempFilePath, 
          { resource_type: "video", 
            public_id: videoData.title,
            eager: [
              { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
              { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
            eager_async: true})

        videom = await videoModel.create({
            idCloudinary : result_video.public_id,
            url : result_video.secure_url,
            title: videoData.title,
            description: videoData.description,
            created_at: Date.now(),
            cast: videoData.cast,
            genre: videoData.genre.toLowerCase(),
            rating: videoData.rating,
            releaseDate: videoData.releaseDate,
            videoLength: {
                hours: videoData.hours,
                minutes: videoData.minutes,
                seconds: videoData.seconds
            },
            videoType: videoData.videoType.toLowerCase(),
            views: videoData.views,
        })
        return video
    }
}