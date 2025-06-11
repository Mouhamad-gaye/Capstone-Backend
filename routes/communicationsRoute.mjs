import express from 'express'
import dotenv from 'dotenv'
import Comm from '../models/communicationSchema.mjs'
import auth from '../middleware/auth.mjs';
import adminAuth from '../middleware/adminAuth.mjs';
import jwt from 'jsonwebtoken'


dotenv.config();
const router = express.Router();

router.post('/', adminAuth, async (req, res) => {
    try {
        const {title, content} = req.body;

        if(!title || !content) {
            return res.status(400).json({msg: "All fields are required"})
        };

        const newComm = new Comm({ 
            title, 
            content, 
            createdAt: Date.now,
            createdBy: req.member.id,
        });
        
        await newComm.save()
        res.status(201).json({msg: "New annoncement posted successfully"});

         const payload = {
                    member: {
                        id: member._id
                    }
                };
        
                jwt.sign(
                    payload, process.env.jwtSecret, (err, token) => {
                        if(err) throw err;
        
                        res.status(201).json({token});
                    }
                );
    } catch(err) {
        console.error(err);
        res.status(500).json({msg: "Server error"})
    }
})

router.get('/', async (req, res) => {
    let allComm = await Comm.find(req.body);
    res.json(allComm);
});

router.put('/:id', auth, adminAuth, async (req, res) => {
    try {
       if(!req.member.isAdmin) {
        return res.status(403).json({msg: "Unauthorized: Admin access required"})
       };

       const {title, content} = req.body;

        let updatedComm = await Comm.findById(req.params.id);
        if(!updatedComm) {
            return res.status(404).json({msg: 'Announcement not found'});   
        };

        //Update field if provided
        if(title) updatedComm.title = title;
        if(content) updatedComm.content = content;

        await updatedComm.save();
        res.status(200).json({msg: "Announcement updated successfully"});

         const payload = {
                    member: {
                        id: member._id
                    }
                };
        
                jwt.sign(
                    payload, process.env.jwtSecret, (err, token) => {
                        if(err) throw err;
        
                        res.status(201).json({token});
                    }
                );
    }catch(err) {
        console.error(err)
        res.status(500).json({msg: 'Server error'})
    }
});

router.delete('/:id', auth, adminAuth, async (req, res) => {
    try {
        if(!req.member.isAdmin) {
         return res.status(403).json({msg: "Unauthorized: Admin access required"})
        };
 
        const {title, content} = req.body;
 
         let deletedComm = await Comm.findById(req.params.id);
         if(!deletedComm) {
             return res.status(404).json({msg: 'Announcement not found'});   
         };
 
         //Update field if provided
         if(title) deletedComm.title = title;
         if(content) deletedComm.content = content;
 
         await deletedComm.save();
         res.status(200).json({msg: "Announcement updated successfully"});

          const payload = {
                     member: {
                         id: member._id
                     }
                 };
         
                 jwt.sign(
                     payload, process.env.jwtSecret, (err, token) => {
                         if(err) throw err;
         
                         res.status(201).json({token});
                     }
                 );

     }catch(err) {
         console.error(err)
         res.status(500).json({msg: 'Server error'})
     }
});

export default router