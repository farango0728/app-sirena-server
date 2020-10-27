const express = require("express");
const CoinsController = require("../controllers/coins");

const api = express.Router();

api.get("/cotizacion/dolar", CoinsController.coins);
api.get("/cotizacion/filter/", CoinsController.coinsFilter);

module.exports = api;