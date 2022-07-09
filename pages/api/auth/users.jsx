import { connectToDatabase } from "../../../lib/db";


async function handler(req, res) {
  if (req.method=== "GET") {
    const client = await connectToDatabase();

    try {
      const Collection = client.db().collection("users");
      const data = await Collection.find().toArray();
  
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ users: data }));
    } catch (error) {
      res.status(500).json({ message: "Getting collection failed." });
    }
  
  }
  if (req.method==='POST'){

  }

 

  client.close();
}

export default handler;
