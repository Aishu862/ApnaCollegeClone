require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
    return client.db("myDatabase"); // You can create/use your DB name
  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:", error);
    throw error;
  }
}

module.exports = connectToMongoDB;
