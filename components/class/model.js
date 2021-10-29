const { getAll, insertOne } = require("../../database/query");
const { collectionName } = require("./constants");

exports.getAllClass = async function (req, res, next) {
  const data = await getAll(`${collectionName}`);
  res.json(data);
};

exports.insertClass = async function (req, res, next) {
  const result = await insertOne(`${collectionName}`, req.body);
  if (result) {
    res.status(200).send("OK");
  } else {
    res.status(304).send("Error");
  }
};
