const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');
const port = 3000;

// require routes
const indexRoutes = require("./routes/index").default
const voyageRoutes = require("./routes/voyage")

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


app.listen(port, () => console.log(`Example app listening on port ${port}!`));