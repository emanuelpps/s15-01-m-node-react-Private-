import userModel from "../models/UserModel.js"

export default class UserService {
    getAll = async() => await userModel.find()
    getById = async(id) => await userModel.findOne({_id: id})
    create = async(data) => await userModel.create(data)
    update = async(id, data) => await userModel.updateOne({_id: id}, data)
    delete = async(id) => await userModel.deleteOne({_id: id})
}