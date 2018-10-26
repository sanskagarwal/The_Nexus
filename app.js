var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");

// DataBase
var mongoose=require("mongoose");
var mongoDB="mongodb://sk1234:sk1234@ds143163.mlab.com:43163/the_nexus";
mongoose.connect(mongoDB, { useNewUrlParser: true });

// Models
var User = require("./models/user.js");

// Passport
var passport=require("passport");
var localStrategy=require("passport-local");
app.use(require("express-session")({
    secret: "gonnaRock",
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


app.get("/upload",function(req,res){
    res.render("upload.ejs");
});
// Multer
var crypto = require('crypto');
var mime = require('mime');
var multer  = require('multer');
var fs = require('fs');
var hashe,origname,fileExten;

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads/')
    },
    filename: function(req, file, callback) {
        origname=file.originalname;
        fileExten=mime.getExtension(file.mimetype);
        hashe=crypto.randomBytes(16).toString('hex');
        callback(null, hashe + '.' + fileExten);
    }
});
var upload = multer({storage: storage}).single('userFile');


app.post('/uploadTextfile',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            console.log(err);
            return res.redirect("/");
        }
        console.log("done");
    });
});

app.listen(3000,function(){
    console.log("Serving on PORT 3000");
}); 