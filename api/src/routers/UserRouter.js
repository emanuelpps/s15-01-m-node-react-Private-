import MyRouter from "./MyRouter.js";
import UserController from '../controllers/UserController.js'

export default class UserRouter extends MyRouter {
    constructor() {
        super()
        this.userController = new UserController()
    }

    init() {
        this.get('/', ["PUBLIC"], async(req, res) => this.userController.getAll(req, res))
        this.get('/:id', ["PUBLIC"], async(req, res) => this.userController.getById(req, res))
        this.post('/', ["PUBLICE"], async(req, res) => this.userController.create(req, res))
        this.put('/:id', ["PUBLIC"], async(req, res) => this.userController.update(req, res))
        this.delete('/:id', ["PUBLIC"], async(req, res) => this.userController.delete(req, res))

        this.post('/register', ["PUBLIC"], async(req, res) =>await this.userController.register(req, res));
        this.post('/login', ["PUBLIC"], async(req, res) => await this.userController.login(req, res));
    }

}