const express = require('express')
const router = express.Router();
const dbvoyage = require("../../data/models/voyage")

router.get("/", async function(req,res,next){
// *********************need front end display voyage page***************
    // res.render("voyages");
    await dbvoyage.create("test", "test",)
    voyages = await dbvoyage.find({})
    res.send(voyages);
});

router.get("/:id", function(req,res){
// ***************need individual voyage pages***********
    res.send("'name' + Voyage");
})

module.exports = router;