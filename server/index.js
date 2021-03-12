const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use("/", routes);

const mongoUri = "mongodb://localhost:27017/employeeapp";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", err => {
  console.log("error", err);
});

app.listen(3000, () => {
  console.log("server running");
});
