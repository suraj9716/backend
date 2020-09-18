const mongoose=require("mongoose");
const Schema=mongoose.Schema
const UserSchema=new Schema({
   user_name:{
       type:String,
       require:true
   },
   email:{
       type:String,
       required:true
   },
   mobile:{
       type:Number,
       required:true
   },
   date:{
       type:Number,
       default:Date.now
   }

})

module.exports=user=mongoose.model('user',UserSchema)