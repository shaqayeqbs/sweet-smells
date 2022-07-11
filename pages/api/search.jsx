import { connectToDatabase } from "../../lib/db";

async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const Collection = client.db().collection("perfumes");
    const data = await Collection.find().toArray();
    const respnse = JSON.stringify({ perfumes: data });
    const perfumes = JSON.parse(respnse);

    ///

    const results = req.query.q
      ? perfumes.perfumes.filter((perfume) =>
          perfume.title.toLowerCase().includes(req.query.q.toLowerCase())
        )
      : [];

    res.status(200).json({ searchRes: results });
  } catch (error) {
    res.status(500).json({ message: "No matches found." });
  }
}

export default handler;
