var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");

// Models
var User = require("./models/user.js");

// Passport
var passport=require("passport");
var localStrategy=require("passport-local");
app.use(require("express-session")({
    secret: "Godfather...",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    next();
});

// Routes
var indexRoute=require("./routes/index.js");
app.use(indexRoute);
 

app.get("/",function(req,res){
    res.render("dashboard.ejs");
});

app.listen(3000,function(){
    console.log("Serving on PORT 3000");
}); 