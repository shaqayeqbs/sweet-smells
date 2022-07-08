import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../../lib/db";
import { ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const id = req.query.id;
  const title = req.body.data.title;
  const image = req.body.data.image;
  const gender = req.body.data.gender;
  const size = req.body.data.size;
  const price = req.body.data.price;
  const client = await connectToDatabase();
  try {
    const db = client.db();
    const myId = new ObjectId(id);

    const perfume = await db.collection("perfumes").findOne({ _id: myId });

    if (!perfume) {
      res.status(422).json({
        message: "No documents matched the query. Deleted 0 documents.",
      });
      client.close();
      return;
    }

    const result = await db.collection("perfumes").updateOne(
      { _id: myId },
      {
        $set: {
          title: title,
          image: image,
          gender: gender,
          size: size,
          price: price,
        },
      }
    );
    res.status(201).json({ message: " Perfume Upadated!" });
  } finally {
    client.close();
  }
}

export default handler;
