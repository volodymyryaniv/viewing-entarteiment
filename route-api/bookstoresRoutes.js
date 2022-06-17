import express from 'express';
import BookStores from '../schemas/BookStoreSchema.js';
const bookStoresRouter = express.Router();

bookStoresRouter.get('/attractions/bookstores',async (req,res) => {
   const data = await BookStores.find()
   res.send(data);
})
bookStoresRouter.get('/attractions/bookstores/:id',async (req,res) => {
   const data = await BookStores.findById(req.params.id)
   res.send(data);
})
// bookStoresRouter.get('/',async (req,res) => {
//    const data = new BookStores({
//       name: 'Example 1',
//       photo: '/public-img/icons/lviv.jpg',
//       address: 'Example street',
//       openFrom: 14,
//       openUntil: 16,
//       phone: 2123456780,
//       description: 'Find Your Favorite Books Now In Spiral-bound Format! An Easier and Efficient Way To Read! Our Spiral Binding Helps Books Lay Flat For Easier Use and Lasts Longer! Buy Now! Free Shipping in the US!',
//       rating: 4.5,
//       feedback: {
//          date: new Date(),
//          content: 'Find Your Favorite Books Now In Spiral-bound Format! An Easier and Efficient Way To Read! Our Spiral Binding Helps Books Lay Flat For Easier Use'
//       }
//    })
//    await data.save()
//    res.send(data);
// })
// bookStoresRouter.get('/a',async (req,res) => {
//    await BookStores.updateOne({_id:'626195ed84756971c708adbf'}, {$push: { feedback: {
//       date: Date.now(),
//       content: 'Findd111 Your Favorite Books Now In Spiral-bound Format! An Easier and Efficient Way To Read! Our Spiral Binding Helps Books Lay Flat For Easier Use'
//    }}})
//    res.send('ok')
   
// })
export default bookStoresRouter;