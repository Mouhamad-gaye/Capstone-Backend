import mongoose from 'mongoose'

const communicationSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true}
});

export default mongoose.model("Communication", communicationSchema);