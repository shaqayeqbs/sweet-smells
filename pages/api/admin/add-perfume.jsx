import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { title, price, image, gender, size } = data.data;

  if (!title || !image.includes(".") || !image || !price || !size || !gender) {
    res.status(422).json({
      message: "Invalid input",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingperfume = await db
    .collection("perfumes")
    .findOne({ title: title });

  if (existingperfume) {
    res.status(422).json({ message: "perfume exists already!" });
    client.close();
    return;
  }

  const result = await db.collection("perfumes").insertOne({
    title,
    image,
    size,
    gender,
    price,
  });

  res.status(201).json({ message: "Perfume Created!" });
  client.close();
}

export default handler;
