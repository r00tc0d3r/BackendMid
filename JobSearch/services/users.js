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

  async getByEmail(email) {
    try {
      const user = await UserModel.findOne({ email });
      return user; // Objeto
    } catch (err) {
      console.log(err);
    }
  }

  async create(data) {
    try {
      const user = await UserModel.create(data);
      return user; // Objeto
    } catch (err) {
      if (err.code === 11000) {
        const message = `El ${err.keyValue.email} ya esta en uso`;
        return {
          error: true,
          message,
        };
      }
    }
  }

  async update(id, data) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
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
