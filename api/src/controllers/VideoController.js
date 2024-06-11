import VideoService from "../services/VideoService.js"

export default class VideoController {
    constructor() {
        this.videoService = new VideoService()
    }

    getAll = async(req, res) => res.sendSuccess(await this.videoService.getAll())
    getById = async(req, res) => res.sendSuccess(await this.videoService.getById(req.params.id))
    create = async(req, res) => res.sendSuccess(await this.videoService.create(req.body))
    update = async(req, res) => res.sendSuccess(await this.videoService.update(req.params.id, req.body))
    delete = async(req, res) => res.sendSuccess(await this.videoService.delete(req.params.id))

    postVideo = async(req, res)=>{
        try{
            let videoData
            //console.log('Controller Video req: ',req)
            console.log('Controller Video req.files: ',req.files.video)
            console.log('Controller Video body: ', req.body)
            //console.log('Controller Video params: ', req.params)
             const video = req.files;
            console.log('video: ', video)
            if(req.body){
             videoData = req.body;
            }
            const result = await this.videoService.postVideo(video, videoData)
            res.json({ status: 'success', payload: result });
        }catch (error) {
            res.status(401).json({ status: 'error', message: error.message });
        }
    }
}