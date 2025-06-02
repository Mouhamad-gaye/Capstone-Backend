import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
    
});

export default mongoose.model("Members", memberSchema);