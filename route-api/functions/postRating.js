export default async function postRating (collection, id, estimate) {
  const { estimations } = await collection.findById(id);
   const rating =
     estimations.reduce(
       (accum, number) => accum + number,
       Number(estimate)
     ) /
     (estimations.length + 1);
   const item = await collection.findByIdAndUpdate(
     id,
     { $push: { estimations: Number(estimate) }, rating: rating },
     { new: true }
   );
   return item;
}
