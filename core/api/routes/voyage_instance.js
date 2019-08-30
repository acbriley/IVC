const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const dbVoyageInstance = require("../../data/models/voyage_instance")
import {authorize} from '../authentication'

router.get("/", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
    voyages = await dbVoyageInstance.find({where: {user_id: req.user_id}});
    res.send(voyages);
}));

router.get("/:id", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
        let id = req.params.id;
        let voyage = await dbVoyageInstance.get(id);
        if (voyage.user_id != req.user_id) {return res.status(404).send()}
        res.send(voyage);
    }));

router.post("/", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
    var schema = {
        "type": "object",
        "properties": {
          "voyageId": {"type": "string"}
        },
        "required": ["voyageId"], 
        "additionalProperties": true,
      };
      newVoyage = req.body.voyage;
      validate(newVoyage, schema, {throwError: true}).valid;
      await dbVoyageInstance.create(newVoyage.voyageId, req.user_id);
      res.status(201).send();
}));



module.exports = router;