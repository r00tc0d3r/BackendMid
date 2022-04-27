const mongoose = require("mongoose");
const { dbUsername, dbPassword, dbHost, dbName } = require(".");

const dbConnection = async () => {
  const conn = await mongoose.connect(
    `mongodb+srv://${dbUsername}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
  );
  console.log("Mongo DB Connected:", conn.connection.host);
};

module.exports = { dbConnection, mongoose };
