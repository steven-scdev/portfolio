import mongoose from 'mongoose';

const WritingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  topics: [{ type: String }],
  date: { type: Date, default: Date.now },
});

export const Writing = mongoose.models.Writing || mongoose.model('Writing', WritingSchema); 