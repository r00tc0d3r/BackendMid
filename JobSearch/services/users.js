const UserModel = require("../models/user");

class Users {
  // Obtiene toda la informacion de los usuarios
  async getAll() {
    try {
      const users = await UserModel.find();
      return users; // Array de objetos
    } catch (err) {
      console.log(err);
    }
  }

  async create(data) {
    try {
      const user = await UserModel.create(data);
      return user; // Objeto
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, data) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Users;
