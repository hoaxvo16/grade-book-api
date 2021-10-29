const { MongoClient } = require("mongodb");
require("dotenv").config();
// Connection URI
const uri = `${process.env.MONGO_URI}`;
let db;
const client = new MongoClient(uri);
async function run() {
  // Connect the client to the server
  await client.connect();
  // Establish and verify connection
  await client.db("GradeBooks").command({ ping: 1 });
  db = client.db("GradeBooks");
  console.log("Connected successfully to server");
}
run().catch(console.dir);

module.exports.database = () => db;
