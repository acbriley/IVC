const express = require('express')
const router = express.Router();
const dbUser = require("../../data/models/user")
const asyncHandler = require('express-async-handler')
import {authorize, encryptPass, passport, generateToken} from '../authentication'
import {validate, ValidationError} from 'jsonschema'

router.get("/", authorize(["admin"]), asyncHandler(async function(req,res,next){
    let users = await dbUser.find({})
    res.send(users);
}));

router.get("/:id", authorize(["user", "admin"]), asyncHandler(async function(req,res,next){
        let id = req.params.id;
        if (isNaN(id)) return res.status(404).send();
        if (req.user_id != id) return res.status(401).send();
        let user = await dbUser.get(id);
        res.send(user);
}));

router.get("/exist/:username", authorize(["user", "admin"]),
           asyncHandler(async function(req,res,next){
    let username = req.params.username;
    let result = await dbUser.doesExist(username);
    res.send(JSON.stringify(result));
}));

router.post("/register", asyncHandler(async function(req,res,next){
        let user = req.body.user;
        if (!user) {throw ValidationError('Missing User Object')};
        var schema = {
          "type": "object",
          "properties": {
            "username": {"type": "string"},
            "fullname": {"type": "string"},
            "email": {"type": "string"},
            "password": {"type": "string"}
          },
          "required": ["username", "fullname" , "email", "password"], 
          "additionalProperties": true,
        };

        validate(user, schema, {throwError: true}).valid;
        let encrypted = encryptPass(user.password)
        let result = await dbUser.create(user.username, user.fullname, user.email, encrypted.salt, encrypted.hash, ["user"]);
        if (result instanceof Error) {throw result;}
        res.status(201).send();
}));

router.post("/login", asyncHandler(async function(req,res,next){
    var schema = {
      "type": "object",
      "properties": {
        "username": {"type": "string"},
        "password": {"type": "string"}
      },
      "required": ["username", "password"], 
      "additionalProperties": true,
    };

    validate(req.body, schema, {throwError: true});
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {return next(err);}
        if(passportUser) {
          // TODO: handle ip when behind proxy in the future
          let token = generateToken(passportUser.username, req.connection.remoteAddress);
    
          return res.json({ username: passportUser.username, token: token });
        }
    
        return res.status(400).send(info);
      })(req, res, next);
}));

module.exports = router;