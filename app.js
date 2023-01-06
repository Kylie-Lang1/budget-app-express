//DEPENDENCIES
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const transactionsController = require("./controllers/transactionsController")

//CONFIGURATION
const app = express()
app.use("/transactions", transactionsController)
app.use(express.json())
app.use(morgan("tiny"))

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("*" ,(req, res) => [
    res.status(404).json({error: "Page not found"})
])

//EXPORT
module.exports = app