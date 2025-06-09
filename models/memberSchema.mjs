import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    firstName: {type: String, required: true, max: 25},
    lastName: {type: String, required: true, max: 25},
    sex: {type: String, enum:["Male", "Female"], required: false},
    mobile: {type: String, required: false, min: 10, max: 15},
    DateOfBirth: {type: Date, required: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["admin", "member"], default: "member"},
    isAdmin: {type: Boolean, default: false}
    
});

export default mongoose.model("Members", memberSchema);