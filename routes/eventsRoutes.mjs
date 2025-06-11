import express from 'express'
import eventData from '../utilities/eventData.mjs'
import Events from '../models/eventSchema.mjs'
import auth from '../middleware/auth.mjs';
import adminAuth from '../middleware/adminAuth.mjs';
import jwt from 'jsonwebtoken'


const router = express.Router();


router.post('/', adminAuth, async (req, res) => {
   
   try {
    const {title, description, date, location} = req.body;
    if(!title || !description || !date || !location) {
        return res.status(400).json({msg: "All fields are required"})
    }

    const newEvent = new Events({title, description, date, location})
    await newEvent.save();
    res.status(201).json({msg: "Event created succesfully", newEvent})

   } catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
   }
});

// router.get('/seed', async (req, res) => {
//     await Events.create(eventData)
//     res.send('Seeded Data')
// })

router.get('/', async (req, res) => {
    let allEvent = await Events.find(req.body);
    res.json(allEvent);
});

router.put('/:id', adminAuth, async (req, res) => {
   try {

    if(!req.member || !req.member.isAdmin) {
        return res.status(403).json({msg: "Unauthorized: Admin access required"})
    };

    const updatedEvent = await Events.findById(req.params.id);
    if(!updatedEvent) {
        return res.status(400).json({msg: "Event not found"})
    } 

    //Update event fields if provided
    if(req.body.title) updatedEvent.title = req.body.title;
    if(req.body.description) updatedEvent.description = req.body.description;
    if(req.body.date) updatedEvent.date = req.body.date;
    if(req.body.location) updatedEvent.location = req.body.location;

    await updatedEvent.save();
    res.status(200).json({msg: "Event updated successfully"});


   }catch(err) {
    console.error(err)
    res.status(500).json({msg: "Server error"})
   }
});

router.delete('/:id', adminAuth, async (req, res) => {
    try {

        if(!req.member || !req.member.isAdmin) {
            return res.status(403).json({msg: "Unauthorized: Admin access required"})
        };
    
        const deletedEvent = await Events.findById(req.params.id);
        if(!deletedEvent) {
            return res.status(400).json({msg: "Event not found"})
        } 
    
        //Update event fields if provided
        if(req.body.title) deletedEvent.title = req.body.title;
        if(req.body.description) deletedEvent.description = req.body.description;
        if(req.body.date) deletedEvent.date = req.body.date;
        if(req.body.location) deletedEvent.location = req.body.location;
    
        await deletedEvent.save();
        res.status(200).json({msg: "Event deleted successfully"});
    
       }catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
       }
});

export default router