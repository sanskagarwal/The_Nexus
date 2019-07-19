var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
var knockknock = require('knock-knock-jokes')

// DataBase
var mongoose=require("mongoose");
var mongoDB="mongodb://localhost:27017/the_nexus";
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


// Multer
var crypto = require('crypto');
var mime = require('mime');
var multer  = require('multer');
var fs = require('fs');
var hashCode,origName,fileExt;

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/uploads/')
    },
    filename: function(req, file, callback) {
        origName=file.originalname;
        fileExt=mime.getExtension(file.mimetype);
        if(fileExt==="mpga") {
            fileExt = "mp3";
        }
        hashCode=crypto.randomBytes(16).toString('hex');
        callback(null, hashCode + '.' + fileExt);
    }
});
var upload = multer({storage: storage});

app.post("/uploadVideofile",upload.single('userVideoFile'),function(req,res){
    var vicy = {
        origVideoName: origName,
        VideoName: hashCode + "." + fileExt
    };
    User.findByIdAndUpdate(req.user._id,{$push: {videoContent: vicy}},function(err,user){
        if(err) {
            console.log(err);
            res.end("error");
        }
        res.end(origName + " " + hashCode + "." + fileExt);
    });
});

app.post("/uploadMusicfile",upload.single('userMusicFile'),function(req,res){
    var mucy = {
        origMusicName: origName,
        MusicName: hashCode + "." + fileExt
    };
    User.findByIdAndUpdate(req.user._id,{$push: {musicContent: mucy}},function(err,user){
        if(err) {
            console.log(err);
            res.end("error");
        }
        res.end(origName + " " + hashCode + "." + fileExt);
    });
});

app.post("/uploadDocfile",upload.single('userDocFile'),function(req,res){
    var docy = {
        origDocName: origName,
        docName: hashCode + "." + fileExt
    };
    User.findByIdAndUpdate(req.user._id,{$push: {docContent: docy}},function(err,user){
        if(err) {
            console.log(err);
            res.end("error");
        }
        res.end(origName + " " + hashCode + "." + fileExt);
    });
});

app.post('/uploadTextfile',upload.single('userFile'),function(req,res,next){
    var text = fs.readFileSync("./public/uploads/" + hashCode + "." + fileExt,'utf-8');
    text = text.toString();
    var texty={
        origName: origName, 
        textName: hashCode + "." + fileExt,
        text: text
    };
    User.findByIdAndUpdate(req.user._id,{$push: {textContent: texty}},function(err,user){
        if(err) {
            console.log(err);
            res.end("error");
        }
        res.end(origName + " " + hashCode + "." + fileExt);
    });
});

app.get("/getText/:filename",function(req,res){
    User.findById(req.user._id,function(err,user){
        if(err) {
            console.log(err);
        } else {
            var data = user.textContent.toObject();
            var result = data.filter(obj => {
                return obj.textName === req.params.filename;
            });
            res.send(result[0].text);
        }
    });
});

app.post("/saveText/:filename",function(req,res){
    User.update({"textContent.textName": req.params.filename},{
        "$set": {
            "textContent.$.text": req.body.text,
        }
    },function(err){
        if(err) {
            console.log(err);
            return res.redirect("/");
        }
        res.end("Success");
    }); 
}); 

app.post("/newFile/:direct",function(req,res){
    var hashed = crypto.randomBytes(16).toString('hex');
    if(req.params.direct==="Uploads") {
        var texty={
            origName: req.body.filename, 
            textName: hashed + "." + req.body.exti,
            text: ""
        };
        User.findByIdAndUpdate(req.user._id,{$push: {textContent: texty}},function(err,user){
            if(err) {
                console.log(err);
                res.end("error");
            }
            res.end("success");
        });
    } else if(req.params.direct==="Documents") {
        var docy = {
            origDocName: req.body.filename,
            docName: hashed + "." + req.body.exti
        };
        User.findByIdAndUpdate(req.user._id,{$push: {docContent: docy}},function(err,user){
            if(err) {
                console.log(err);
                res.end("error");
            }
            res.end("Success");
        });
    } else if(req.params.direct==="Music") {
        var mucy = {
            origMusicName: req.body.filename,
            MusicName: hashed + "." + req.body.exti
        };
        User.findByIdAndUpdate(req.user._id,{$push: {musicContent: mucy}},function(err,user){
            if(err) {
                console.log(err);
                res.end("error");
            }
            res.end("success");
        });
    } else if(req.params.direct==="Video") {
        var vicy = {
            origVideoName: req.body.filename,
            VideoName: hashed + "." + req.body.exti
        };
        User.findByIdAndUpdate(req.user._id,{$push: {videoContent: vicy}},function(err,user){
            if(err) {
                console.log(err);
                res.end("error");
            }
            res.end("success");
        });
    }

});

app.get("/deleteFile/:direct/:filename",function(req,res){
    if(req.params.direct==="Documents") {
        User.update({ _id: req.user._id }, { "$pull": { "docContent": { "origDocName": req.params.filename } }}, { safe: true, multi:true }, function(err, obj) {
            if(err) {
                console.log(err);
                return res.redirect("/");
            }
            res.end("Deleted");
        });
    } else if(req.params.direct==="Uploads") {
        User.update({ _id: req.user._id }, { "$pull": { "textContent": { "origName": req.params.filename } }}, { safe: true, multi:true }, function(err, obj) {
            if(err) {
                console.log(err);
                return res.redirect("/");
            }
            res.end("Deleted");
        });
    } else if(req.params.direct==="Music") {
        User.update({ _id: req.user._id }, { "$pull": { "musicContent": { "origMusicName": req.params.filename } }}, { safe: true, multi:true }, function(err, obj) {
            if(err) {
                console.log(err);
                return res.redirect("/");
            }
            res.end("Deleted");
        });
    } else if(req.params.direct==="Video") {
        User.update({ _id: req.user._id }, { "$pull": { "videoContent": { "origVideoName": req.params.filename } }}, { safe: true, multi:true }, function(err, obj) {
            if(err) {
                console.log(err);
                return res.redirect("/");
            }
            res.end("Deleted");
        });
    } else {
        res.end("No file found");
    }
});

app.get("/getData/:direct",function(req,res){
    if(req.params.direct==="Documents") {
        User.findById(req.user._id,function(err,user){
            if(err) {
                console.log(err);
            } else {
                var data = user.docContent.toObject();
                var content = "";
                for(var i=0;i<data.length;i++) {
                    content+=data[i].origDocName+"  ";
                }
                res.send(content);
            }
        });
    } else if(req.params.direct==="Uploads") {
        User.findById(req.user._id,function(err,user){
            if(err) {
                console.log(err);
            } else {
                var data = user.textContent.toObject();
                var content = "";
                for(var i=0;i<data.length;i++) {
                    content+=data[i].origName+"  ";
                }
                res.send(content);
            }
        });
    } else if(req.params.direct==="Music") {
        User.findById(req.user._id,function(err,user){
            if(err) {
                console.log(err);
            } else {
                var data = user.musicContent.toObject();
                var content = "";
                for(var i=0;i<data.length;i++) {
                    content+=data[i].origMusicName+"  ";
                }
                res.send(content);
            }
        });
    } else if(req.params.direct==="Video") {
        User.findById(req.user._id,function(err,user){
            if(err) {
                console.log(err);
            } else {
                var data = user.videoContent.toObject();
                var content = "";
                for(var i=0;i<data.length;i++) {
                    content+=data[i].origVideoName+"  ";
                }
                res.send(content);
            }
        });
    }


    /*if(req.params.direct==="Documents") {
        User.find({ _id: req.user._id }, { "$pull": { "docContent": { "origDocName": req.params.filename } }}, { safe: true, multi:true }, function(err, obj) {
            if(err) {
                console.log(err);
                return res.redirect("/");
            }
            res.end("Deleted");
        });
    }*/
});

app.get("/gimmeajoke",function(req,res){
    res.end(knockknock());
});

app.listen(3000,function(){
    console.log("Serving on PORT 3000");
}); 