import express from "express"
import bodyParser from "body-parser"

var names = [];
var topics = [];
var descriptions = [];

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("index.ejs",{names:names,topics:topics,descriptions:descriptions});
})

app.get("/createBlog",(req,res)=>
{
    res.render("createPost.ejs");
})

app.listen(port,()=>
{
console.log(`server runs on port ${port}`);
})

app.post("/shared",(req,res)=>
    {
      var name = req.body["name"];
      var topic = req.body["topic"];
      var description = req.body["description"];
      names.push(name);
      topics.push(topic);
      descriptions.push(description);
      res.render("index.ejs",{names:names,topics:topics,descriptions:descriptions});

    })
app.get("/clearData",(req,res)=>
{
    names.length = 0;
    descriptions.length = 0;
    topics.length = 0;
    res.render("index.ejs",{names:names,topics:topics,descriptions:descriptions});
})

