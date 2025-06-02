import express from 'express'
import eventData from '../utilities/eventData.mjs'
import Events from '../models/eventSchema.mjs'
import auth from '../middleware/auth.mjs';
import adminAuth from '../middleware/adminAuth.mjs';

const router = express.Router();

//Create
router.post('/', async (req, res) => {
    let newEvent = await Events.create(req.body);
    res.json(newEvent);
});

router.get('/seed', async (req, res) => {
    await Events.create(eventData)
    res.send('Seeded Data')
})

router.get('/', async (req, res) => {
    let allEvent = await Events.find(req.body);
    res.json(allEvent);
});

router.put('/:id', auth, adminAuth, async (req, res) => {
    const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!updatedEvent) {
        res.status(400).json({msg: "Event not found"})
    } else {
        res.json(updatedEvent)
    }
});

router.delete('/:id', auth, adminAuth, async (req, res) => {
    const deletedEvent = await Events.findByIdAndDelete(req.params.id, req.body, {new: true});
    if(!deletedEvent) {
        res.status(400).json({msg: "Event not found"})
    } else {
        res.json(deletedEvent)
    }
});

export default router