import MyRouter from "./MyRouter.js";
import VideoController from '../controllers/VideoController.js'

export default class VideoRouter extends MyRouter {
    constructor() {
        super()
        this.videoController = new VideoController()
    }

    init() {
        // this.get('/', ["PRIVATE"], async(req, res) => this.userController.getAll(req, res))
        // this.get('/:id', ["PRIVATE"], async(req, res) => this.userController.getById(req, res))
        // this.post('/', ["PRIVATE"], async(req, res) => this.userController.create(req, res))
        // this.put('/:id', ["PRIVATE"], async(req, res) => this.userController.update(req, res))
        // this.delete('/:id', ["PRIVATE"], async(req, res) => this.userController.delete(req, res))

        this.post('/postVideo', ["PUBLIC"], async(req, res) =>await this.videoController.postVideo(req, res));
        // this.post('/login', ["PUBLIC"], async(req, res) => await this.userController.login(req, res));
    }

}