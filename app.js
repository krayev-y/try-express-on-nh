var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

app.set("view engine", "pug");

app.use(
  logger(
    `Call from >> :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status`
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ result: "Logged In !" });
});

app.listen(8440, () => {
  console.log("Application started");
});
module.exports = app;
