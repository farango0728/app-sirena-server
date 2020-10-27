const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinsSchame = Schema({
  coins: [
    {
      updated: Date,
      source: String,
      target: String,
      value: Number,
      quantity: Number,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model("Coins", CoinsSchame);