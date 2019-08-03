const express = require('express')
const router = express.Router();
const dbVoyage = require("../../data/models/voyage")

router.get("/", async function(req,res,next){
    voyages = await dbVoyage.find({})
    res.send(voyages);
});

router.get("/:id", function(req,res){
        let id = req.params.id;
        let voyage = await dbVoyage.get(id);
        res.send(voyage);
    });

router.post("/", async function(req,res,next){
        newVoyage = req.body.voyage;
        await dbVoyage.create(newVoyage.name, newVoyage.formatJson);
        res.status(201).send();
});



module.exports = router;