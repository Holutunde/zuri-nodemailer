const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

require('dotenv/config');

const port = process.env.PORT || 5000

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})
app.get("/email", (req, res) => {
    transporter.sendMail({
        from: "holutunde99@gmail.com",
        to: "holutunde99@gmail.com",
        subject: "Zuri Node Mailer Project",
        text: "Thank God for giving us the greatest gift of life"
    }, (err, data) => {
        if (err) {
            console.log(err)
            return res.json("Error in the mailing process, try again");
        }
        res.json("Email successfully sent, You are doing well")
    })
})
  app.listen(port, function () {
    console.log(`Server has started on ${port}.....`)
  })

