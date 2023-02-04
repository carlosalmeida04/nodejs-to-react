const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.get("/userExample", (req, res) => {

    const dataToSend = { id: 1, user: "Carlos Almeida", password: "supersafepassword" }
    res.send(JSON.stringify(dataToSend))
    req.accepts(["json", "html", "text/plain"])
})

app.get("/", (req, res) => {
    res.send("Olá, funciona!")
})

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000")
})