var router=require("express").Router();
var mongoose=require("mongoose");
var Company=require("../models/roundtwocompany");

router.get("/",function(req,res){
    Company.find()
      .then(companydata => res.json(companydata))
      .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/").post(function(req,res){
    console.log(req.body)
    console.log(req.body.data[1].price)
    var name=req.body.name;
    var data=req.body.data;
    var newsone=req.body.newsone;
    var newstwo=req.body.newstwo;
    var newsthree=req.body.newsthree;
    var profitpercent=req.body.profitpercent;
    var min=req.body.min;
    
   

    

    var newCompany=new Company({
        name:name,
        data:data,
        newsone:newsone,
        newstwo:newstwo,
        newsthree:newsthree,
        profitpercent:profitpercent,
        min:min
        
    });
    

    console.log(newCompany)

    newCompany.save();

    console.log("Data added to company")
    res.redirect("/home")

})

module.exports=router;
