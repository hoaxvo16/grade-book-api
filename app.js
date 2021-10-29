const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./database/config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const classRouter = require("./components/class/router");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/classes", classRouter);

const listener = app.listen(process.env.PORT||5500, function () {
  console.log("Listening on port " + listener.address().port);
});
