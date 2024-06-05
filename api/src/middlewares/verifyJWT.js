import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';

export const verifyJWT = async (req) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error('No authorization header in the request');
        }
        const payload = jwt.verify(authorization, process.env.JWT_SECRET);

        const user = await userModel.findOne({ _id: payload.userId })
        if (!user?.active) throw new Error('Deleted account')

        req.user = payload; // Optionally, attach the payload to the request object
        return true;
    } catch (error) {
        return error.message;
    }
};
