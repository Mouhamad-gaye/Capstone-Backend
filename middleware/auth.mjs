import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export default function (req, res, next) {
    let token = req.header('token')

    if(!token) {
        res.status(401).json({msg: "Authorization Denied"});
    }

    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.member = decoded.member.id
        next();
    } catch(err) {
        console.error(err.message)
        res.status(401).json({msg: "Invalid token"})
    }
}