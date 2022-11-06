let express = require("express");
let app = express();
let mongoose = require("mongoose");
let router = require("./routers")
let bodyparser = require("body-parser");
let cors = require("cors"); 

app.use(cors())
app.use(bodyparser.json())
app.use("/",router);

mongoose.connect(
  "mongodb+srv://utkarshmaske88:utkarsh123@cluster0.o8kueip.mongodb.net/blogweb?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(3001, function (req, res) {
  console.log("listening on port" + 3001);
});
