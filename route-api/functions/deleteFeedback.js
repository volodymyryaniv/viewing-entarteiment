export default async function deleteFeedback(collection, id, feedbackId) {
  const item = await collection.findByIdAndUpdate(
    id,
    { $pull: { feedback: { id: feedbackId } } },
    { new: true }
  );
  return item;
}
