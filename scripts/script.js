const postgres = require('../core/platform/postgres');


async function Init() {
    postgres.connectAndCheck();
    postgres.sequelize.sync();
    await postgres.sequelize.drop();
    //await Promise.all([User.drop(), Voyage.drop(), VoyageInstance.drop(), Role.drop()]);
}

Init();