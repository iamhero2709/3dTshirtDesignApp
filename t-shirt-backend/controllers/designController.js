const Design=require('../models/design');
exports.createDesign=async(req,res)=>{
const {user,design}=req.body;
const newDesign=new Design({user,design});
await newDesign.save();
res.status(201).send(newDesign);


};
exports.getDesign=async(req,res)=>{
const designs=await Design.find();
res.status(200).send(designs);
}