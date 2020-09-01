var mongoose=require("mongoose");

var CompanySchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },

   data:[{
       date:{
           type:String
       },
       price:{
           type:Number
       }
    }
   ],

    

    newsone:{
        type:String
    },

    newstwo:{
        type:String
    },

    newsthree:{
        type:String
    },

    profitpercent:{
        type:Number
    },

    min:{
        type:Number
    }


})

var Company=mongoose.model("rndtwodb",CompanySchema)

module.exports=Company;
