const { mongoose } = require("../config/db");

// investigar acerca de los modelos de mongoose
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["Postulante", "Empleador", "Admin"],
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
