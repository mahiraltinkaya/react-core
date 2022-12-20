require("dotenv").config({
  path: "../.env",
});
const express = require("express");
const app = express();
const port = process.env.PORT_SRV || 3000;
const jobList = require("./constants");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json(jobList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
