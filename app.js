const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./core/data/models/user');

const postgres = require('./core/platform/postgres');
const localStrategy = require('passport-local');
const port = 3000;

// require routes
const indexRoutes = require("./core/api/routes/index")
const voyageRoutes = require("./core/api/routes/voyage")

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

postgres.connectAndCheck();
postgres.sequelize.sync();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));