require("dotenv").config({
  path: "../.env",
});
const express = require("express");
const app = express();
const port = process.env.PORT_SRV;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
