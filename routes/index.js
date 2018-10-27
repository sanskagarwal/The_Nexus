var express=require("express");
var router=express.Router();

var User = require("../models/user.js");
var passport=require("passport");

router.get("/", function(req,res){
    if(req.isAuthenticated()) {
        return res.redirect("/dashboard");
    }
    res.redirect("/login");
});

router.get("/signup",function(req,res){
    if(req.isAuthenticated()) {
        return res.redirect("/dashboard");
    }
    res.render("signup.ejs");
});

router.get("/login",function(req,res){
    if(req.isAuthenticated()) {
        return res.redirect("/dashboard");
    }
    res.render("login.ejs");
});

router.get("/dashboard",function(req,res){
    if(req.isAuthenticated()===false) {
        return res.redirect("/login");
    }
    User.findById(req.user._id,function(err,user) {
        if(err) {
            console.log("error");
        } else {
            res.render("dashboard.ejs",{user:user});
        }
    });
});

router.post("/signup",function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err) {
            console.log(err);
            return res.redirect("/");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/dashboard");
        });
    });
});

router.post("/login",passport.authenticate("local",{
    successRedirect: "/dashboard",
    failureRedirect: "/login"
}),function(req,res){

});

router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});


module.exports = router;