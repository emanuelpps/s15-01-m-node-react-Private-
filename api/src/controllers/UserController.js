import UserService from "../services/UserService.js"

export default class UserController {
    constructor() {
        this.userService = new UserService()
    }

    getAll = async(req, res) => res.sendSuccess(await this.userService.getAll())
    getById = async(req, res) => res.sendSuccess(await this.userService.getById(req.params.id))
    create = async(req, res) => res.sendSuccess(await this.userService.create(req.body))
    update = async(req, res) => res.sendSuccess(await this.userService.update(req.params.id, req.body))
    delete = async(req, res) => res.sendSuccess(await this.userService.delete(req.params.id))
}