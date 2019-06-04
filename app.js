const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// require routes
const indexRoutes = require("./routes/index")
const voyageRoutes = require("./routes/voyage")

// DB setup
var url = "mongodb+srv://acbriley:Jamjam95@ivc-sp4s0.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));

// configure routes
app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));