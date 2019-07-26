const config = require("../../config/config.js")

class VoyageInstance extends Model {}
VoyageInstance.init({
  currStage: {
    type: Sequelize.STRING(config.generic_max_chars),
    defaultValue: "Init",
    get() { return this.getDataValue('currStage'); },
    set(val) {this.setDataValue('currStage', val);}
  }
}, { sequelize, modelName: 'voyageInstance' });

async function create(voyageId, userId) {
    try {
        var voyage =  await VoyageInstance.create({ userId: userId, voyageId: voyageId });
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

async function get(id) {
    try {
        var voyage =  await VoyageInstance.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

async function del(id) {
    try {
        let voyage =  await VoyageInstance.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist");} // TODO: Change to normal error
        var result = await voyage.destroy({force: true});
    }
    catch (error) {
      throw Error(error);
    }

    return result;
};

async function update(dict) {
    try {
        var voyage =  await VoyageInstance.findByPk(id);
        if (voyage == null) {throw Error("Doesn't Exist")} // TODO: Change to normal error
        await voyage.update(dict);
    }
    catch (error) {
      throw Error(error);
    }

    return voyage;
};

module.exports = {VoyageInstance, create, get, del, update};