const express = require('express')
const app = express()
const port = 3000;
const indexRoutes = require("./routes/index")
const voyageRoutes = require("./routes/voyage")

app.use("/",indexRoutes);
app.use("/voyages", voyageRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))