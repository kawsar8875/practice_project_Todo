const ProfileModel=require("../models/ProfileModel")

exports.CreateProfile=(req,res)=>{
    let reqBody=req.body;
    ProfileModel.create(reqBody,(err,data)=>{
    if(err){
    req.status(400).json({status:"fail",data:err})
    }
    else{
        req.status(400).json({status:"Success",data:data})
    }
    })
}