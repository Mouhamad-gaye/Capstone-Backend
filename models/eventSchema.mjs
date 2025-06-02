import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    date: {type: Date, required: true},
    location: {type: String}

});

export default model.mongoose("Event", eventSchema);