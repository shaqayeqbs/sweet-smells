import { connectToDatabase } from "../../../../lib/db";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const id = req.query.id;

  const client = await connectToDatabase();
  try {
    const db = client.db();
    const myId = new ObjectId(id);

    const result = await db.collection("perfumes").deleteOne({ _id: myId });
    if (result.deletedCount === 1) {
      res.status(201).json({ message: "Successfully deleted one document." });
    } else {
      res.status(422).json({
        message: "No documents matched the query. Deleted 0 documents.",
      });
    }
  } finally {
    client.close();
  }
}

export default handler;
