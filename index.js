const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  `mongodb+srv://Dirmod01:4k1AE2tsCz9CyeiX@dirmodcotizador.xjkm8.mongodb.net/Dirmod01?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("######################");
        console.log("### MONGO ATLAS SIRENA ######");
        console.log("######################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);