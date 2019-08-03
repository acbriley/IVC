const config = require("../../config/config.js")
const Sequelize = require('sequelize');
const db = require("../../platform/postgres")
var validate = require("validate.js");

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

// Raises validation error if validation fails, with relevant validation field
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

// Raises validation error if validation fails, with relevant validation field
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

/*
example format for the json format of a voyage:
every node in the sequence list is a differenet screen/stage of the voyage.
every stage/screen is also a list, where every node represents an item, 
either an image, video or a text.
front end will get this format, and present the user with the right stage according to the list.
then, on that screen the front end will present, top-down, the items in that stage, in order. 
{
"sequence": 
[ 
  [ {"type": "text",
     "value": "lorem"},
     {"type": "video",
      value: "video1.avi"}
  ] ,
  [
     {"type": "text",
      "value": "ipsum"},
     {"type": "image",
      "value"}
  ],
  [],
  []
]
}


*/