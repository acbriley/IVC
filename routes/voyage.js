const express = require('express')
const router = express.Router();

router.get("/", function(req,res,next){
// *********************need front end display voyage page***************
    // res.render("voyages");
    res.send("About The Voyages");
});

router.get("/:id", function(req,res){
// ***************need individual voyage pages***********
    res.send("'name' + Voyage");
})

module.exports = router;