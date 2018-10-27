var mongoose = require('mongoose');
var passportLocalMongoose=require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    textContent: [ 
        {
            origName: String,
            textName: String,
            text: String
        }
    ],
    docContent: [
        {
            origDocName: String,
            docName: String
        }
    ],
    musicContent: [
        {
            origMusicName: String,
            MusicName: String
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);