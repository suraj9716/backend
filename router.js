var express =require('express');
var router=express.Router()

router.get('/',function(req,res){
    res.send("welcome to backend")

})
router.get("/profile", function(req,res){
    res.send("my name is suraj")
})
router.get("/info", function(req,res){
    res.send("suraj,delhi")
})

module.exports=router;