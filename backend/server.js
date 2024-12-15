const express = require("express");
const bodyParser = require("body-parser");
const phoneBookRouter = require("./route/phoneBook.route");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/phoneBook", phoneBookRouter);

require("dotenv").config();
require("./db");

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is successfully listening on the port ${port}`);
});
