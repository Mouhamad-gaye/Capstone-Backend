import mongoose from 'mongoose'

const communicationSchema = new mongoose.Schema({
    title: {type: string, required: true},
    content: {type: string, required: true},
    createdAt: {type: Date, default: Date.now},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true}
});

export default model.mongoose("Communication", communicationSchema);