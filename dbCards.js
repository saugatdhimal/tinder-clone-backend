import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    name: String,
    url: String
})

export default mongoose.model('Cards', cardSchema);