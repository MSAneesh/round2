var express=require("express");
var app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
const dotenv = require('dotenv');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))

dotenv.config();
const port = process.env.PORT || 5000;
const open="open";
const uri = process.env.ATLAS_USER
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/home",function(req,res){
    res.send("Hello")

})

var rndtwo=require("./routes/roundtwocompany");
app.use("/roundtwo",rndtwo);


app.listen( port, ()=> console.log(`Server is connected in port ${port}`));