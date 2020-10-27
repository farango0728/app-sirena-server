const fetch = require("node-fetch");

async function cambioTodayFilter(coinsFilter, quantity) {
  try {
    console.log(coinsFilter);
    const arrayCoins = [];
    const COP = await cambioTodayCop(coinsFilter, quantity);
    arrayCoins.push(COP);
    const ARS = await cambioTodayArs(coinsFilter, quantity);
    arrayCoins.push(ARS);
    const EUR = await cambioTodayEur(coinsFilter, quantity);
    arrayCoins.push(EUR);
    const coinsChange = { coins: arrayCoins };
    return coinsChange;
  } catch (err) {
    return err;
  }
}

async function cambioTodayCop(coinsFilter, quantity) {
  try {
    const response = await fetch(
      `https://api.cambio.today/v1/quotes/${coinsFilter}/COP/json?quantity=${quantity}&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf`
    );
    const coins = await response.json();
    const { value, target, amount } = coins.result;
    const values = { value: amount, target };
    return values;
  } catch (err) {
    return err;
  }
}
async function cambioTodayArs(coinsFilter, quantity) {
  try {
    const response = await fetch(
      `https://api.cambio.today/v1/quotes/${coinsFilter}/ARS/json?quantity=${quantity}&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf`
    );
    const coins = await response.json();
    const { value, target, amount } = coins.result;
    const values = { value: amount, target };
    return values;
  } catch (err) {
    return err;
  }
}

async function cambioTodayEur(coinsFilter, quantity) {
  try {
    const response = await fetch(
      `https://api.cambio.today/v1/quotes/${coinsFilter}/EUR/json?quantity=${quantity}&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf`
    );
    const coins = await response.json();
    const { value, target, amount } = coins.result;
    const values = { value: amount, target };
    return values;
  } catch (err) {
    return err;
  }
}

module.exports = {
  cambioTodayFilter,
};