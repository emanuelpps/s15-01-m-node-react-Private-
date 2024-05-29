import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error('No authorization header in the request');
        }
        const token = authorization.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload; // Optionally, attach the payload to the request object
        next();
    } catch (error) {
        return res.status(400).json({ error: "JWT", message: error.message }).end();
    }
};
