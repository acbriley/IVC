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
    unique: true,
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
    unique: true,
    get() { return this.getDataValue('email'); },
    set(val) {this.setDataValue('email', val);}
  },
  salt: {
    type: Sequelize.STRING(config.salt_max_chars),
    allowNull: false,
    get() { return this.getDataValue('salt'); },
    set(val) {this.setDataValue('salt', val);}
  },
  passHash: {
    type: Sequelize.STRING(config.hash_max_chars),
    allowNull: false,
    get() { return this.getDataValue('passHash'); },
    set(val) {this.setDataValue('passHash', val);}
  }
}, { sequelize, modelName: 'user' });

async function create(username, fullName, email, salt, hash) {
    try {
        var user = 
         await User.create({ username: username, fullName: fullName, email: email, salt:salt, passHash: hash });
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

async function find(findDict) {
  try {
      var users =  await User.findAll({ where: findDict});
  }
  catch (error) {
    throw Error(error);
  }

  return voyages;
};

async function getByUserame(username) {
  try {
      var user =  await User.findOne({ where: {"username": username}});
  }
  catch (error) {
    throw Error(error);
  }

  return user;
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

async function doesExist(username) {
  try {
      var count =  await User.count({where: {'username': username}});
      if (count > 0) 
        return true;
      return false;
  }
  catch (error) {
    throw Error(error);
  }
}

module.exports = {User, create, get, del, update, find, getByUserame, doesExist};