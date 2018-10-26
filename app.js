var express = require("express");
var app = express();


app.get("/",function(req,res){
    res.render("dashboard.ejs");
});

app.listen(3000,function(){
    console.log("Serving on PORT 3000");
}); 