const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../data/models/user');


// home page/ root route
router.get("/", (req,res) => {
// *******************need front end landing page***********************
    // res.render("landing");
    res.send("index route");
});

// register form
router.get("/register", (req,res) => {
//******************** *need front end register page***************
    // res.render("register")
    res.send("register route");
});

// sign up logic
    // *******************need register page*****************************
        // router.post("/register", function(res,req){
        //     var newUser= new newUser({username: req.body});
        //     User.register(newUser, req.body.password, function(err, user){
        //         if (err){
        //             return Response.render("register", {"error": err.message});
        //         }
        //         passport.authenticate("local")(res,req, function(){
        //             // once logged in, redirect back to voyages page
        //             res.redirect("/voyages");
        //         });
        //     });
        // });

// SHOW LOGIN FORM
router.get("/login", (req,res) => {
// ************need front end login page**********************************
    // res.render("login");
    res.send("login page");
});

// HANDLING LOGIN LOGIC
// router.post("/login", passport.authenticate("local", 
//     {
//         successRedirect: "/voyages", 
//         failureRedirect: "/login"
//     }), function(req,res){
// });

// // LOGOUT ROUTE
// router.get("/logout", function(req,res){
//     req.logout();
//     res.redirect("/");
// });

module.exports = router;