const express = require('express')
const router = express.Router();
const dbVoyageInstance = require("../../data/models/voyage_instance")

router.get("/", async function(req,res,next){
    // after we implement auth, filter by user logged in 
    voyages = await dbVoyageInstance.find({})
    res.send(voyages);
});

router.get("/:id", function(req,res){
        let id = req.params.id;
        let voyage = await dbVoyageInstance.get(id);
        res.send(voyage);
    });

router.post("/", async function(req,res,next){
        newVoyage = req.body.voyage;
        await dbVoyageInstance.create(newVoyage.VoyageId, newVoyage.UserId);
        res.status(201).send();
});



module.exports = router;