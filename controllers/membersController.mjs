import Members from '../models/memberSchema.mjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';


dotenv.config();

let register = async (req, res) => {
    const {name, email, password} = req.body;

    if(!username || !email || !password) {
        return res.status(400).json({msg: "All fields re required"});
    };

    try {
        let member = await Members.findOne({email});
        if (member) {
            return res.status(400).json({msg: "Email already exist"})
   
        }
        member = new Members({name, email, password});
        const salt = await bcrypt.genSalt(10)

        member.password = await bcrypt.hash(password, salt);

        await member.save();

        res.status(201).json({msg: "Member created successfully", member});

        const payload = {
            member: {
                id: member._id
            }
        };

        jwt.sign(
            payload, process.env.jwtSecret, {expiresIn: 360000}, (err, token) => {
                if(err) throw err;

                res.status(201).json({token});
            }
        );
    } catch(err) {
        console.error(err);
        res.status(500).json({msg: "Server error"})
    }

};

let login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: "All fields required"});

    };

    try{
        let member = await Members.findOne({email});

        if(!member) {
            return res.status(400).json({msg: "Invalid Credentials"});    
        }

        const isMatch = await bcrypt.compare(password, member.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Invalid Credentials"});
        }

        const payload = {
            member: {
                id: member._id
            }
        };

        jwt.sign(payload, process.env.jstSecret, {expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.status(201).json({token});
        });
    } catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
    }
};

let getMember = async (req, res) => {
    let member = await Members.findById(req.member).select("-password")
    res.json(member)
}


export default {register, login, getMember}