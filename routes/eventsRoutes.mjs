import express from 'express'
import eventData from '../utilities/eventData.mjs'
import Events from '../models/eventSchema.mjs'
import auth from '../middleware/auth.mjs';
import adminAuth from '../middleware/adminAuth.mjs';
import jwt from 'jsonwebtoken'


const router = express.Router();


router.post('/',auth, adminAuth,  async (req, res) => {
   
   try {
    const {title, description, date, location} = req.body;
    if(!title || !description || !date || !location) {
        return res.status(400).json({msg: "All fields are required"})
    }

    const newEvent = new Events({title, description, date: new Date(date), location})
    await newEvent.save();
    res.status(201).json({msg: "Event created succesfully", newEvent})

   } catch(err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})
   }
});

router.get('/seed', async (req, res) => {
    await Events.create(eventData)
    res.send('Seeded Data')
})

router.get('/', async (req, res) => {
    try {
        let allEvent = await Events.find();
    res.json(allEvent);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server error"})

    }
});

router.put('/:id',auth, adminAuth, async (req, res) => {
    try {
        // Validate request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ msg: "No update data provided" });
        }

        // Update the event
        const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!updatedEvent) {
            return res.status(404).json({ msg: "Event not found" });
        }

        res.status(200).json({ msg: "Event updated successfully", updatedEvent });
    } catch (err) {
        console.error("Error updating event:", err);
        res.status(500).json({ msg: "Server error" });
    }
});

router.delete('/:id',auth, adminAuth,  async (req, res) => {
    const { id } = req.params;  
    console.log("Received Event ID:", id);

    if (!id) {
        return res.status(400).json({ msg: "Invalid event ID" });
    }

    try {
        const deletedEvent = await Events.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ msg: "Event not found" });
        }

        res.status(200).json({ msg: "Event deleted successfully" });
    } catch (err) {
        console.error("Error deleting event:", err);
        res.status(500).json({ msg: "Server error" });
    }
});






export default router