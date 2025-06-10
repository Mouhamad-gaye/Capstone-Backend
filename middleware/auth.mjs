import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function auth(req, res, next) {
    let token = req.header("Authorization"); 

    if (!token) {
        return res.status(401).json({ msg: "Authorization Denied" }); 
    }

    try {
        token = token.replace("Bearer ", ""); 
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        req.member = decoded.id; 
        next();
    } catch (err) {
        console.error("Token verification error:", err.message);
        return res.status(401).json({ msg: "Invalid token" });
    }
}