import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }
  const userEmail = session.session.user.email;
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  
  const client = await connectToDatabase();

  const usersCollection = client.db().collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: "User not found." });
    client.close();
    return;
  }

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { email: email, name: name, gender: gender } }
  );

  client.close();
  res.status(200).json({ message: "Information updated!" });
}

export default handler;
