const express = require('express')
const router = express.Router();
const dbUser = require("../../data/models/user")
const jwt = require('jsonwebtoken');
import {encryptPass} from '../authentication'

router.get("/", async function(req,res,next){
    users = await dbUser.find({})
    res.send(users);
});

router.get("/:id", async function(req,res){
        let id = req.params.id;
        let user = await dbUser.get(id);
        res.send(user);
});

router.get("/exist/:username", async function(req,res){
    let username = req.params.username;
    let result = await dbUser.doesExist(username);
    res.send(JSON.stringify(result));
});

router.post("/register", async function(req,res,next){
        let user = req.body.user;
        let encrypted = encryptPass(user.password)
        await dbUser.create(user.username, user.fullname, user.email, encrypted.salt, encrypted.hash);
        res.status(201).send();
});

router.post("/login", async function(req,res,next){
    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {return next(err);}
        if(passportUser) {
          // TODO: handle ip when behind proxy in the future
          let token = generateToken(passportUser.username, req.connection.remoteAddress);
    
          return res.json({ username: passportUser.username, token: token });
        }
    
        return res.status(400).send(info);
      })(req, res, next);
});

function generateToken(username, ip) {
    let expiry = (new Date().getTime() / 1000) + 60 * 60 * 24 * 14
    // TODO: store secret securely somewhere
    return jwt.sign({
      username: username,
      ip: ip,
      exp: parseInt(expiry, 10),
    }, 'secret');
  }

module.exports = router;