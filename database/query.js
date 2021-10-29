const { database } = require("./config");

exports.getAll = async function (collectionName) {
  const collection = await database().collection(`${collectionName}`);
  const allClass = await collection.find({}).toArray();
  return allClass;
};

exports.insertOne = async function (collectionName, data) {
  const collection = await database().collection(`${collectionName}`);
  const result = await collection.insertOne(data);
  console.log(result);
  return result;
};
