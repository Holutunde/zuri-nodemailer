# Zuri nodemailer sender

## `This is a basic email sender app, built with nodemailer`


-  ## The screenshot below 
![Screen Shot 2022-07-20 at 11 27 04 AM](https://user-images.githubusercontent.com/58793383/179960643-a6cdd2f0-beed-4889-b2a7-f882a09fed91.png)


## The route

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
