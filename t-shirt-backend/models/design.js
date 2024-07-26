const mongoose=require('mongoose');
const DesignSchema=new mongoose.Schema({
    user:String,
    design:String,
    created_at:{
        type:Date,default:Date.now
    },

});
module.exports=mongoose.model(Design,DesignSchema);