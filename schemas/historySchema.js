import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
   title: {
      type: String
   },
   description: {
      type: String
   }
})

export default mongoose.model('History', historySchema)