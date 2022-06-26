import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { fullname, email, password ,gender} = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 4 ||
    fullname.trim().length < 3
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be at least 4 characters long.",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    name: fullname,
    email: email,
    gender:gender,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
