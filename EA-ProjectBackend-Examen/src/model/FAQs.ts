import { Schema, model } from 'mongoose';

const FAQs = new Schema({
    Question: { type: String, required: true },
    Ansewr: { type: String, required: true },
    points: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    date: Date
});

export default model ('FAQs', FAQs);