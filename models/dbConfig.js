const mongoose = require ("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/node-api",
    {useNewUrlParser:true, UseUnifiedTopology:true},
    (err)=>{
        if(!err) console.log("mongo connected");
        else console.log("connection error:" + err);
    }
)