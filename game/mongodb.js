var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/posts");
mongoose.connect("mongodb+srv://dbUser:Cheese11%21@clusterdb-lglzi.mongodb.net/test?retryWrites=true")

var accountSchema = new mongoose.Schema({
    userName: String,
    password: String,
    heroArray: [String,Number,Number,String],
    coins: Number,
    gameFilterMode: String
});

var heroSchema = new mongoose.Schema({
    name: String,
    attack: Number,
    health: Number,
    power: String
});
var Book = mongoose.model("Book", bookSchema);
var firstBook = new Book({
    title: "first book",
    author: "jay"
});
firstBook.save(function(err, book){
    if(err){
        console.log("Wrong")
    } else {
        console.log("Saved")
        console.log(book);
    }
});

///////////////////////////

var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book_app");
var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    desc: String
});
var Book = mongoose.model("Book", bookSchema);
// var firstBook = new Book({
//     title: "first book",
//     author: "jay"
// });
// firstBook.save(function(err, book){
//     if(err){
//         console.log("Wrong")
//     } else {
//         console.log("Saved")
//         console.log(book);
//     }
// });
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
   res.render("home");
});
app.post("/addpost", function(req, res){
    //var element = {};
    //element.title = req.body.newpost
   // element.author = req.body.newpost2
    var name = req.body.name;
    var attack = req.body.attack;
    var health = req.body.health;
    var power = req.body.power;
    var newHero = {name: name, attack: attack, health: health, power: power}
    Hero.create(newHero, function(err, newlyCreated){
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
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("show", {post: foundBook});
        }
    });
    //res.send("You fell for this " + thing);
   // res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
    Book.find({}, function(err, allBooks){
        if(err){
            console("Wrong");
        } else {
            res.render("posts", {posts:allBooks});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Listening");
});
