import mongoose from 'mongoose';

const cafeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: Array
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  openFrom: {
    type: Number
  },
  openUntil: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true
  },
  rating: {
    type: Number
  },
  feedback: {
    type: Array,
    date: {
      type: Date
    },
    content: {
      type: String,
      required: true
    }
  },
  estimations: {
    type: Array,
  }
})

export default mongoose.model('Cafes', cafeSchema);

