const express = require("express")
const exphbs = require("express-handlebars")
const generatePassword = require("./generate_password")
const app = express()

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/", (req, res) => {
    const options = req.body
    const password = generatePassword(options)
    res.render("index", { password: password, options: options })
})

app.listen(3000, () => {
    console.log("WebApp is on port: 3000")
})