const express = require("express");
const router = express.Router();
const { getAllClass, insertClass } = require("./model");
/* GET users listing. */
router.get("/", getAllClass);
router.post("/", insertClass);
module.exports = router;
