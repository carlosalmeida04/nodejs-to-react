const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Olá, funciona!")
})

app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000")
})