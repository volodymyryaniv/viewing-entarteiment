export default async function postFeedback(collection, id, feedback) {
  const item = await collection.findByIdAndUpdate(
    id,
    { $push: { feedback: feedback } },
    { new: true }
  );
  return item;
}
