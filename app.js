const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postgres = require('./core/platform/postgres');
const port = 3000;

// setup passport
import {passport} from "./core/api/authentication"

// tell express to support json responses
app.use(express.json());

const dbVoyage = require('./core/data/models/voyage');

// require routes
const indexRoutes = require("./core/api/routes/index")
const voyageRoutes = require("./core/api/routes/voyage")
const voyageInstanceRoutes = require("./core/api/routes/voyage_instance")
const roleRoutes = require("./core/api/routes/role")
const userRoutes = require("./core/api/routes/user")

const errorHandler = require("./core/api/errors")

app.use(bodyParser.urlencoded({extended: true}));

// configure routes
app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);
app.use("/voyageinstances", voyageInstanceRoutes);
app.use("/roles", roleRoutes);
app.use("/users", userRoutes);

// configure error handler
app.use(errorHandler);

// connect to db
require("./core/data/models/associations")
postgres.connectAndCheck();
postgres.sequelize.sync();

// configure passport
app.use(passport.initialize());

// configure static file serving
app.use("/static", express.static('assets'));

// add test voyage
function addVoyage() {
    let name = "self-love";
    let formatJson = '{"sequence": [[{"type": "text","value": "lorem"},{"type": "video",value: "/static/voyages/self-love/videoplayback.webm"}],[{"type": "text","value": "ipsum"},{"type": "image","value": "/static/voyages/self-love/t_hermit.jpg"}, {"type": "input", "value": "enter input here:"}],[],[]]}';
    dbVoyage.create(name, formatJson);
}
addVoyage();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));