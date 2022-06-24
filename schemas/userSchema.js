import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  roles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}],
  phone: {
    type: String,
  },
}, {timestamps: true})

export default mongoose.model('User', userSchema);
