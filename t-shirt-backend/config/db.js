const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/tshirtdesign',{
         //   useUnifiedTopology: true,
        //    useCreateIndex: true,
          //  useFindAndModify: false
            
        });
        console.log('mongoDB connected.......')
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
};
module.exports=connectDB;