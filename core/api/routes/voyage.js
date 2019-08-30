const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const dbVoyage = require("../../data/models/voyage");
import {authorize} from '../authentication'

router.get("/", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
    voyages = await dbVoyage.find({})
    res.send(voyages);
}));

router.get("/:id", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
        let id = req.params.id;
        let voyage = await dbVoyage.get(id);
        res.send(voyage);
    }));

router.post("/", authorize(["admin"]), asyncHandler(async function(req,res,next){
        newVoyage = req.body.voyage;
        var schema = {
            "type": "object",
            "properties": {
              "name": {"type": "string"},
              "formatJson": {"type": "string"}
            },
            "required": ["name", "formatJson"], 
            "additionalProperties": true,
          };
        validate(newVoyage, schema, {throwError: true}).valid;
        await dbVoyage.create(newVoyage.name, newVoyage.formatJson);
        res.status(201).send();
}));



module.exports = router;