const fetch = require("node-fetch");

async function cambioToday() {
  try {
    const arrayCoins = [];
    const COP = await cambioTodayCop();
    arrayCoins.push(COP);
    const ARS = await cambioTodayArs();
    arrayCoins.push(ARS);
    const EUR = await cambioTodayEur();
    arrayCoins.push(EUR);
    const coinsChange = { coins: arrayCoins };
    return coinsChange;
  } catch (err) {
    return err;
  }
}

async function cambioTodayCop() {
  try {
    const response = await fetch(
      "https://api.cambio.today/v1/quotes/USD/COP/json?quantity=1&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf"
    );
    const coins = await response.json();
    return coins.result;
  } catch (err) {
    return err;
  }
}
async function cambioTodayArs() {
  try {
    const response = await fetch(
      "https://api.cambio.today/v1/quotes/USD/ARS/json?quantity=1&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf"
    );
    const coins = await response.json();
    return coins.result;
  } catch (err) {
    return err;
  }
}

async function cambioTodayEur() {
  try {
    const response = await fetch(
      "https://api.cambio.today/v1/quotes/USD/EUR/json?quantity=1&key=5124|y7WN3_MJMY6m2RFO~ZdrQn6a1GYSsJrf"
    );
    const coins = await response.json();
    return coins.result;
  } catch (err) {
    return err;
  }
}

module.exports = {
  cambioToday,
};