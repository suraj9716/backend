var express =require('express');
var app=express()
var router=require('./router');

const mongoose =require('mongoose');
const uri="mongodb+srv://devikTech:9931320688v@cluster0-koncr.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri,{

    useNewUrlParser:true,
})
.then(()=>{

    console.log("MongoDb Connected");
})

app.use("/router", router);
app.listen(4000);