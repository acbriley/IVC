const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const postgresConnect = require('./core/platform/postgres');
const localStrategy = require('passport-local');
const User = require('./core/data/models/user');
const port = 3000;

// require routes
const indexRoutes = require("./core/api/routes/index")
const voyageRoutes = require("./core/api/routes/voyage")

// passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// DB setup
var url = "mongodb+srv://acbriley:Jamjam95@ivc-sp4s0.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));

// configure routes
app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);

var sql = postgresConnect();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));