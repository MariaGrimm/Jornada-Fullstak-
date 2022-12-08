const mongoose = require("mongoose");

const databaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";

const connectToDatabase = () => {
  return mongoose
  .connect(databaseUrl)
  .then(() => console.log("Banco de dados conectado com sucesso!"))
  .catch((error) =>
    console.log("Erro na conecxáo com o banco de dados.\n", error)
   );
};

const isObjectIdValid = (id) => {
  return true;
};

module.exports = {
  isObjectIdValid,
  connectToDatabase,
};
