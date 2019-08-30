const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const dbRole = require("../../data/models/role")
import {authorize} from '../authentication'

router.get("/", asyncHandler(async function(req,res,next){
    roles = await dbRole.find({})
    res.send(roles);
}));

router.get("/:name", asyncHandler(async function(req,res,next){
        let name = req.params.name;
        let role = await dbRole.get(name);
        res.send(role);
}));

router.get("/exist/:name", asyncHandler(async function(req,res,next){
    let name = req.params.name;
    let result = await dbRole.doesExist(name);
    res.send(JSON.stringify(result));
}));

router.post("/", authorize([ "admin"]), asyncHandler(async function(req,res,next){
  newRole = req.body.role;
  await dbRole.create(newRole.name);
  res.status(201).send(newRole);
}));

module.exports = router;