var express = require("express");
var app = express();
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/");
//mongoose.connect("mongodb+srv://dbUser:Cheese11%21@clusterdb-lglzi.mongodb.net/test?retryWrites=true")

var userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    heroArray: [String,Number,String,Number],
    coins: Number,
//    gameFilterMode: String
});
var heroSchema = new mongoose.Schema({
    name: String,
    attack: Number,
    power: String,
    lvl: Number
});
var User = mongoose.model("User", userSchema);
var firstUser = new User({
  name: 'first User',
  password: 'passWord'
});
firstUser.save(function(err, hero){
    if(err){
        console.log("Wrong")
    } else {
        console.log("Saved")
        console.log(hero);
    }
});

///////////////////////////

var bodyParser = require("body-parser");
// var posts = [
//     {title: "Post 1", author: "Susy"},
//     {title: "My adorable pet bunny", author: "Charlie"},
//     {title: "Can you believe this thing?", author: "Jay"}
// ];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//RESTful Routes and CRUD
app.get("/", function(req,res){
   res.render("posts");
});
app.post("/addpost", function(req, res){
    //var element = {};
    //element.title = req.body.newpost
   // element.author = req.body.newpost2
    // var health = req.body.health;
    // var power = req.body.power;
    var newUser = {name: name, password: password}
    User.create(newUser, function(err, newlyCreated){
      var name = req.body.name;
      var password = req.body.password;
      if(err){
        console.log(err);
      } else {
        res.redirect("/posts");
      }
    });
 //   Book.push(element);
   // posts.push(element);
});

app.get("/posts/:id", function(req,res){
    var post = req.params.post;
    Hero.findById(req.params.id, function(err, foundHero){
        if(err){
            console.log(err);
        } else {
            res.render("show", {post: foundHero});
        }
    });
    //res.send("You fell for this " + thing);
   // res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
    Hero.find({}, function(err, allHero){
        if(err){
            console("Wrong");
        } else {
            res.render("posts", {posts:allHero});
        }
    });
});

app.listen(3000);

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server is Listening");
// });
