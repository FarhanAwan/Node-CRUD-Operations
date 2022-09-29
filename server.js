console.log("from server.js")
const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.get('/', (req, res) => {

    console.log("hello")

    // res.send("Hi")

    // res.sendStatus(500)


    // res.status(500).send("HI")

    // res.status(500).json({message: "Error"})


    // res.json({message: "Error"})

    // res.download("server.js")



    // res.render("index")


    // res.render("index",{ text : "Farhan"})


    // res.render("index",{ textaaaa : "Farhan"})

    // res.render("index",{ text : "Farhan"})



})

// app.get("/users", (req, res) => {
//     res.send("User List")
// })
// app.get("/users/new", (req, res) => {
//     res.send("User List")
// })

const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.listen(3000)