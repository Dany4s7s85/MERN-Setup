const express = require("express");
const app = express();
const database = require("./dbConn");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
var path = require("path");
app.use(cookieParser());
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());



//this is for heroku don,t touch
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function () {
  console.log("listen port 5000");
});
