import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();

  try {
    const Collection = client.db().collection("perfumes");
    const data = await Collection.find().toArray();

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ perfumes: data }));
  } catch (error) {
    res.status(500).json({ message: "Getting collection failed." });
  }

  client.close();
}

export default handler;
