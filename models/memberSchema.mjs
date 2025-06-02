import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['member', 'admin'], default: 'member'},
    joinedAt: {type: date, default: date.now}
});

export default mongoose.model("Member", memberSchema);