const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

require("dotenv/config");

const port = process.env.PORT || 5000

app.get("/email", (req, res, next) => {
  
})

app.listen(process.env.PORT || 4000, () => console.log(`listening on ${process.env.PORT}`));