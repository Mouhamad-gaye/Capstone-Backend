import Members from '../models/memberSchema.mjs'
import dotenv from 'dotenv'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs';


dotenv.config();

let register = async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({msg: "All fields re required"});
    };

    try {
        let member = await Members.findOne({email});
        if (member) {
            return res.status(400).json({msg: "Email already exist"})
        }
    } catch(err) {
        console.error(err)
    }

}



export default {register}