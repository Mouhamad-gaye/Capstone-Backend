import express from 'express'
import dotenv from 'dotenv'
import Comm from '../models/communicationSchema.mjs'
import auth from '../middleware/auth.mjs';
import adminAuth from '../middleware/adminAuth.mjs';
import jwt from 'jsonwebtoken'


dotenv.config();
const router = express.Router();

router.post('/', auth, adminAuth, async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const newComm = new Comm({
            title,
            content,
            createdAt: Date.now(),
            createdBy: req.member,
        });

        await newComm.save();
        res.status(201).json({ msg: "New announcement posted successfully" });
    } catch (err) {
        console.error("Error posting announcement:", err);
        res.status(500).json({ msg: "Server error" });
    }
});


router.get('/', async (req, res) => {
    let allComm = await Comm.find(req.body);
    res.json(allComm);
});

router.put('/:id', auth, adminAuth, async (req, res) => {
    try {
       if(!req.member.role) {
        return res.status(403).json({msg: "Unauthorized: Admin access required"})
       };

       const {title, content} = req.body;

        let updatedComm = await Comm.findByIdAndUpdate(req.params.id);
        if(!updatedComm) {
            return res.status(404).json({msg: 'Announcement not found'});   
        };

        //Update field if provided
        if(title) updatedComm.title = title;
        if(content) updatedComm.content = content;

        await updatedComm.save();
        res.status(200).json({msg: "Announcement updated successfully"});

         
    }catch(err) {
        console.error(err)
        res.status(500).json({msg: 'Server error'})
    }
});

router.delete('/:id', auth, adminAuth, async (req, res) => {
    try {
        if (!req.member || req.member.role !== "admin") {
            return res.status(403).json({ msg: "Unauthorized: Admin access required" });
        }

        const deletedComm = await Comm.findByIdAndDelete(req.params.id);
        if (!deletedComm) {
            return res.status(404).json({ msg: "Announcement not found" });
        }

        res.status(200).json({ msg: "Announcement deleted successfully" });
    } catch (err) {
        console.error("Error deleting announcement:", err);
        res.status(500).json({ msg: "Server error" });
    }
});


export default router