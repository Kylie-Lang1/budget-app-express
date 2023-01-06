//DEPENDENCIES
const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");
const { validateURL } = require("../validations/validations")

//ROUTES

//GET routes
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
//   transactionsArray.find(id === transactions.id)
  if (transactionsArray[index]) {
    res.status(200).json(transactionsArray[index]);
  } else {
    res.status(404).json({ error: "No page found" });
  }
});

//POST route not working
transactions.post("/", validateURL, (req, res) => {
    console.log(req.body.id)
    res.send(req.body.id)
    // res.json(transactionsArray[-1])
})

//PUT route
transactions.put("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
      transactionsArray[index] = req.body;
      res.status(200).json(transactionsArray[index]);
    } else {
      res.status(404).json({ error: "No page found" });
    }
  });

//DELETE route
transactions.delete("/:index", (req, res) => {
    const deletedTransaction = transactionsArray.splice(req.params.index, 1);
    res.status(200).json(deletedTransaction);
  });

//EXPORT
module.exports = transactions;
