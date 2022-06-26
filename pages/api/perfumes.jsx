import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();

  try {
    const Collection = client.db().collection("perfumes");
    const data = await Collection.find().toArray();
    res.status(200).json({ perfumes: data });
  } catch (error) {
    res.status(500).json({ message: "Getting collection failed." });
  }

  client.close();
}

export default handler;
