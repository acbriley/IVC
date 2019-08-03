const dbUser = require('../data/models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');

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

module.exports = {encryptPass, validatePass};

