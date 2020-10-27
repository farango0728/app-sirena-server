const Coins = require("../models/coins");
const coinsService = require("../services/coins");
const coinsFilterService = require("../services/coinsFilter");

async function coins(req, res) {
  const data = await coinsService.cambioToday();
  const coins = new Coins(data);
  const arrayResultado = [];

  coins.save((err, coinsStored) => {
    if (err) {
      res.status(500).send({ message: "Error del Servidor." });
    } else {
      if (!coinsStored) {
        res.status(404).send({ message: "Error al crear la coins." });
      } else {
        arrayResultado.push(coinsStored);
        res.status(200).send({ coins: arrayResultado });
      }
    }
  });
}
async function coinsFilter(req, res) {
  const { quantity, coins } = req.query;
  const data = await coinsFilterService.cambioTodayFilter(coins, quantity);

  res.status(200).send({ coins: data });
}

module.exports = {
  coins,
  coinsFilter,
};