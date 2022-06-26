import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://shaqayeq:96Shaqayeq*b@cluster0.yj45o.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
