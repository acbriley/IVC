const config = require("../../config/config.js")
const Sequelize = require('sequelize');
const db = require("../../platform/postgres")

sequelize = db.sequelize;
const Model = Sequelize.Model;

class Voyage extends Model {}
Voyage.init({
  name: {
    type: Sequelize.STRING(config.generic_max_chars),
    allowNull: false,
    get() { return this.getDataValue('name'); },
    set(val) {this.setDataValue('name', val);}
  },
  formatJson: {
    type: Sequelize.STRING(config.voyage_json_max_chars),
    get() { return this.getDataValue('formatJson'); },
    set(val) {this.setDataValue('formatJson', val);}
  }
}, { sequelize, modelName: 'voyage' });

async function create(name, formatJson) {
    try {
        var voyage =  await Voyage.create({ name: name, formatJson: formatJson });
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

async function get(id) {
    try {
        var voyage =  await Voyage.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

async function find(findDict) {
    try {
        var voyages =  await Voyage.findAll({ where: findDict});
    }
    catch (error) {
      throw Error(error);
    }

    return voyages;
};

async function del(id) {
    try {
        let voyage =  await Voyage.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist");} // TODO: Change to normal error
        var result = await user.destroy({force: true});
    }
    catch (error) {
      throw Error(error);
    }

    return result;
};

async function update(dict) {
    try {
        var voyage =  await Voyage.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
        await voyage.update(dict);
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

module.exports = {Voyage, create, get, find, del, update};