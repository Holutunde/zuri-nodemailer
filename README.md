# Zuri nodemailer sender

## `This is a basic email sender app, built with nodemailer`


-  ## The screenshot below 

![Screen Shot 2022-07-19 at 11 33 53 AM](https://user-images.githubusercontent.com/58793383/179961763-82e640b6-04ef-4675-b78c-50519d46351f.png)


## The route

```
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
```
