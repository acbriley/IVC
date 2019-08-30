const Sequelize = require('sequelize');
const config = require("../../config/config.js");
const db = require("../../platform/postgres");

sequelize = db.sequelize;
const Model = Sequelize.Model;

class Role extends Model {}
Role.init({
  name: {
    type: Sequelize.STRING(config.generic_max_chars),
    allowNull: false,
    unique: true,
    get() { return this.getDataValue('name'); },
    set(val) {this.setDataValue('name', val);}
  }
}, { sequelize, modelName: 'role' });

async function create(name) {
    try {
        var role = 
         await Role.create({ name: name});
    }
    catch (error) {
      throw Error(error);
    }

    return role;
};

async function get(name) {
  try {
    var role =  await Role.findOne({ where: {"name": name}});
    if (role == null) {throw new Sequelize.EmptyResultError("Role:" + name + " Doesn't Exist")} 

    return role;
  }
  catch(err) {
    return err;
  }
};

async function find(findDict) {
    try {
        var roles =  await Role.findAll({ where: findDict});
    }
    catch (error) {
      throw Error(error);
    }
  
    return roles;
  };

async function del(name) {
    try {
        let role =  await Role.findOne({ where: {"name": name}});
        if (role == null) {throw Error("Doesn't Exist");} // TODO: Change to normal error
        var result = await role.destroy({force: true});
    }
    catch (error) {
      throw Error(error);
    }

    return result;
};

async function doesExist(name) {
  try {
      var count =  await Role.count({where: {'name': name}});
      if (count > 0) 
        return true;
      return false;
  }
  catch (error) {
    throw Error(error);
  }
}

module.exports = {Role, create, find, get, del, doesExist};