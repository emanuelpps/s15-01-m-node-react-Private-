import videoModel from "../models/VideoModel.js";
import cloudinary from "../utilities/upload.js"

export default class VideoService{
    getAll = async() => await videoModel.find();
    getById = async (id) => await videoModel.findOne({ _id: id });
    create = async (data) => await videoModel.create(data);
    update = async (id, data) => await videoModel.updateOne({ _id: id }, data);
    delete = async (id) => await videoModel.deleteOne({ _id: id });

    async postVideo(video, videoData){
        let result_video;
        let videom = new videoModel();
        console.log('service postVideo, video, videoData: ', video, videoData)
        if (!video) {
            return { msg: 'No File Selected. Please select an file and try' };
        }
        if(video){
        console.log("video to be save", video.tempFilePath)}
        result_video = await cloudinary.uploader.upload(video.tempFilePath, 
          { resource_type: "video", 
            public_id: "video_prueba",
            eager: [
              { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
              { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
            eager_async: true})
            //eager_notification_url: "https://mysite.example.com/notify_endpoint" })
        // Create Image in the database with all data that we have and add to it the
        // image information that we get from Cloudinary
        console.log("video info to be save")

        //image.fechaCreacion =new Date().getTime;
        videom = await videoModel.create({
            idCloudinary : result_video.public_id,
            url : result_video.secure_url,
            title: videoData.title,
            description: videoData.description,
            created_at: Date.now()
        })
        return video
    }

}