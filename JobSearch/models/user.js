const { mongoose } = require("../config/db");

// investigar acerca de los modelos de mongoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
