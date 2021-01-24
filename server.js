const express = require("express");
const app = express();
//const router = require("./router/main")(app);

const bodyparser = require("body-parser");
const session = require("express-session");
const fs = require("fs");
const bodyParser = require("body-parser");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static("public"));

const server = app.listen(3000, () => {
  console.log("Express server has started on port 3000");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  session({
    secret: "!@#MYSIGN@#$",
    resave: false,
    saveUninitialized: true,
  })
);

var router = require("./router/main")(app, fs);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
