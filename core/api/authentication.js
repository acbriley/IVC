const dbUser = require('../data/models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

passport.use(new LocalStrategy(
    (username, password, done) => {
    dbUser.getByUserame(username)
    .then((user) => {
      if(!user || !validatePass(user.passHash, user.salt, password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    })
    .catch(done);
}));

function validatePass(hash, salt, password) {
    const passhash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    return hash === passhash;
};

function encryptPass(password) {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    return {"salt" : salt, "hash": hash}
}; 

function generateToken(username, ip) {
  let expiry = (new Date().getTime() / 1000) + 60 * 60 * 24 * 14
  // TODO: store secret securely somewhere
  return jwt.sign({
    username: username,
    ip: ip,
    exp: parseInt(expiry, 10),
  }, 'secret');
}

function validateToken(token, ip) {
  let now = parseInt((new Date().getTime() / 1000), 10);
  let decoded_token = jwt.verify(token, 'secret');
  if (decoded_token.ip != ip || decoded_token.exp < now) {throw jwt.JsonWebTokenError;}

  return decoded_token.username;
}

function authorize(roles){
  return async function (req, res, next) {
    try {
      let token = req.header('Authorization');
      // TODO: handle ip behind proxy
      console.log(token);
      let username = validateToken(token, req.connection.remoteAddress);
      let user = await dbUser.getByUserame(username);
      req.username = username;
      req.user_id = user.id;
      if (roles.some(permittedRole => user.roles.includes(permittedRole))) {
        next();
      }
      else {
        throw Error("Unauthorized - You do not belong the the permitted role");
      }
    }
   catch (err){
     console.log(err.message);
     return res.status(401).send(err.message);
    }
  }
}

module.exports = {authorize, passport, encryptPass, validatePass, generateToken, validateToken};

