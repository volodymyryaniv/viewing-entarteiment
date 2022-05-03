import mongoose from 'mongoose';

export default async function connect () {
  try {
    await mongoose.connect('mongodb+srv://volodymyr:12a12a12a@cluster0.jhzci.mongodb.net/VIEWING-ENTARTAIMENT?retryWrites=true&w=majority');
  } catch (err) {
    console.log(err);
  }
}