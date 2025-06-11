import express from 'express'
import Members from '../models/memberSchema.mjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.mjs'
import adminAuth from '../middleware/adminAuth.mjs'




dotenv.config();
const router = express.Router()

//Register Route

router.post('/register', [
    check('firstName', 'Name is required').not().isEmpty(),
    check('lastName', 'Name is required').not().isEmpty(),
    check('email', 'Provide a valid email').isEmail(),
    check('password', 'Password requires 6 or more characters').isLength({min: 6})
], 
async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    };

    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({msg: "All fields re required"});
    };

    try {
        let member = await Members.findOne({email});
        if (member) {
            return res.status(400).json({msg: "Member already exist"})
        }

        member = new Members({firstName, lastName, email, password});

        const salt = await bcrypt.genSalt(10)

        member.password = await bcrypt.hash(password, salt);

        await member.save();


        res.status(201).json({msg: "Member created successfully", member});

      

    } catch(err) {
        console.error(err);
        res.status(500).json({errors: [{msg: "Server error"}] });
    }

});




router.post('/admin-register', adminAuth, async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        };

        const existingMember = await Members.findOne({email});
        if(existingMember) 
            return res.status(400).json({msg: "Email already exists"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new Members({firstName, lastName, email, password: hashedPassword, role: "admin"})

        await newAdmin.save();

        const payload = {
            member: {
                id: newAdmin._id
            }
        };

        jwt.sign(
            payload, process.env.JWT_SECRET, {expiresIn: "1h"}, (err, token) => {
                if(err) throw err;

                res.status(201).json({msg: "Admin registered successfully", token, newAdmin: {firstName: newAdmin.firstName, lastName: newAdmin.lastName, email: newAdmin.email }});

                
            }
        );
        

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
    }
});




//Login route

router.post('/login', [
    check("email", "Please enter valid email").isEmail(),
    check("password", "Paswword required").not().isEmpty()
], 

async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    };

    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: "All fields required"});

    };

    try{
        let member = await Members.findOne({email});

        if(!member) {
            return res.status(400).json({errors: [{msg: "Invalid credentials"}]});    
        }

        const isMatch = await bcrypt.compare(password, member.password);
        if(!isMatch) {
            return res.status(400).json({errors: [{msg: "Invalid credentials"}]});
        };
        const payload = {
            member: {
                id: member._id
            }
        };

        jwt.sign(
            payload, process.env.JWT_SECRET, {expiresIn: "1h"}, (err, token) => {
                if(err) throw err;

                res.status(201).json({msg: "Login Successfully", token, member: {firstName: member.firstName, lastName: member.lastName, email: member.email}});
            }
        );

    } catch(err) {
        console.error(err)
        res.status(500).json({errors: [{msg: "Server Error"}]})
    }
});


router.post('/admin-login', adminAuth, async (req, res) => {
    try {
        const {email, password} = req.body;
        const admin = await Members.findOne({email, role: "admin"});
        if(!admin) 
            return res.status(401).json({msg: "Admin not found"});

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) 
            return res.status(401).json({msg: "Invalid credentials"})


        const payload = {
            member: {
                id: admin._id,
                role: admin.role
            }
        };
        jwt.sign(
            payload, process.env.JWT_SECRET, {expiresIn: "1h"}, (err, token) => {
                if(err) throw err;

                res.json({msg: "Admin login successfully", token, admin: {firstName: admin.firstName, role: admin.role}})
            }
        );

    } catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
    }
})



//Get member info route

router.get('/', adminAuth, async (req, res) => {
    try {
        let member = await Members.findById(req.member.id).select("-password");
        res.json(member)
    } catch (err) {
        console.error(err)
        res.status(500).json({errors: [{msg: "Server error"}]})
    }
});


export default router