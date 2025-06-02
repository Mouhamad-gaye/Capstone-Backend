import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    member: {type: mongoose.Schemas.Types.ObjectId, ref: 'Member'},
    amount: {type: Number, required},
    type: {type: string, enum: ['Membership card fee', 'Donation'], required},
    timestamp: {type: Date, default: Date.now}

});

export default model.mongoose("Transaction", transactionSchema);