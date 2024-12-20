import mongoose from 'mongoose';

// Define the schema
const writingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  topics: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  // Add this to ensure proper collection name
  collection: 'writings'  // Explicitly set collection name
});

// Check if model exists before creating
export const Writing = mongoose.models.Writing || mongoose.model('Writing', writingSchema); 