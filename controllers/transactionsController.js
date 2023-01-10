//DEPENDENCIES
const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

//ROUTES

//GET routes
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray);
});

//GET individual transaction details
transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  const found = transactionsArray.find((element) => id === element.id);

  if (found) {
    res.status(200).json(found);
  } else {
    res.status(404).json({ error: "No page found" });
  }
});

//POST route
transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray.at(-1));
});

//PUT route
transactions.put("/:id", (req, res) => {
  const { id } = req.params;

  const foundTransaction = transactionsArray.find((element) => {
    return element.id === id;
  });

  if(foundTransaction){
    const foundIndex = transactionsArray.indexOf(foundTransaction);
    transactionsArray[foundIndex] = req.body;
    res.status(200).json(transactionsArray[foundIndex]);
  } else {
    res.status(404).json({error: `${id} page not found`})
  }
});

//DELETE route
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;

  const foundTransaction = transactionsArray.find((element) => {
    return element.id === id;
  });

  if(foundTransaction){
    const deletedTransactionIndex = transactionsArray.indexOf(foundTransaction);
    const deletedTransaction = transactionsArray.splice(deletedTransactionIndex, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.status(404).json({error: `${id} page not found`})
  }

});

//EXPORT
module.exports = transactions;
