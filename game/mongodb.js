var express = require("express");
var app = express();
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/");
var url = 'mongodb+srv://dbUser:Cheese11%21@clusterdb-lglzi.mongodb.net/test?retryWrites=true';
mongoose.connect(url);
// mongoose.connection
// .once('open', () => console.log("connected"))
// .on('error', (error) => {
//   console.log("error");
// });
const username = process.argv[2].split('=')[1]
console.log(`hello, ${username}`)

// async function createUser(username) {
//   return new User({
//     username,
//     created: Date.now()
//   }).save()
// }
//
// async function findUser(username) {
//   return await User.findOne({ username })
// }
//
// ;(async () => {
//   const connector = mongoose.connect(url)
//   const username = process.argv[2].split('=')[1]
//
//   let user = await connector.then(async () => {
//     return findUser(username)
//   })
//
//   if (!user) {
//     user = await createUser(username)
//   }
//
//   console.log(user)
//   process.exit(0)
// })()

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
module.exports = userSchema

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
app.post("/createAccount", function(req, res){
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

app.listen(3000,function(){
    console.log("Server is Listening");
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server is Listening");
// });
