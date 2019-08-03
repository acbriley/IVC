const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./core/data/models/user');

const postgres = require('./core/platform/postgres');
const port = 3000;

// setup passport
require('./core/api/authentication');

// require routes
const indexRoutes = require("./core/api/routes/index")
const voyageRoutes = require("./core/api/routes/voyage")
const voyageInstanceRoutes = require("./core/api/routes/voyage_instance")

const errorHandler = require("./core/api/errors")

// passport config
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// DB setup

app.use(bodyParser.urlencoded({extended: true}));

// configure routes
app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);
app.use("/voyageinstances", voyageInstanceRoutes);


// configure error handler
app.use(errorHandler);

// connect to db
postgres.connectAndCheck();
postgres.sequelize.sync();

// configure passport
app.use(passport.initialize());



app.listen(port, () => console.log(`Example app listening on port ${port}!`));