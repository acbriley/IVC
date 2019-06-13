const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./core/data/models/user');

// DB setup
const db = require('./core/data/db/index')

// TEST DB
db.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log('Error:' + err))

// require routes
const indexRoutes = require("./core/api/routes/index").default
const voyageRoutes = require("./core/api/routes/voyage")


app.use(bodyParser.urlencoded({extended: true}));

// configure routes
app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Example app listening on port ${PORT}!`));