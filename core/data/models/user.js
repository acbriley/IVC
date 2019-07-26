const Sequelize = require('sequelize');
const config = require("../../config/config.js")
const db = require("../../platform/postgres")

sequelize = db.sequelize;
const Model = Sequelize.Model;

class User extends Model {}
User.init({
  username: {
    type: Sequelize.STRING(config.user_max_chars),
    allowNull: false,
    get() { return this.getDataValue('username'); },
    set(val) {this.setDataValue('username', val);}
  },
  fullName: {
    type: Sequelize.STRING(config.full_name_max_chars),
    allowNull: false,
    get() { return this.getDataValue('fullName'); },
    set(val) {this.setDataValue('fullName', val);}
  },
  email: {
    type: Sequelize.STRING(config.email_max_chars),
    allowNull: false,
    get() { return this.getDataValue('email'); },
    set(val) {this.setDataValue('email', val);}
  }
}, { sequelize, modelName: 'user' });

async function create(username, fullName, email) {
    try {
        var user =  await User.create({ username: username, fullName: fullName, email: email });
    }
    catch (error) {
      throw Error(error);
    }

    return user;
};

async function get(id) {
    try {
        var user =  await User.findByPk(id);
        if (user == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
    }
    catch (error) {
      throw Error(error);
    }

    return user;
};

async function del(id) {
    try {
        let user =  await User.findByPk(id);
        if (user == null) {throw Error("Doesn't Exist");} // TODO: Change to normal error
        var result = await user.destroy({force: true});
    }
    catch (error) {
      throw Error(error);
    }

    return result;
};

async function update(dict) {
    try {
        var user =  await User.findByPk(id);
        if (user == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
        await user.update(dict);
    }
    catch (error) {
      throw Error(error);
    }

    return user;
};

module.exports = {User, create, get, del, update};