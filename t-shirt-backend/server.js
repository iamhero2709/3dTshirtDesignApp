const express=require('express');

const cors=require('cors');
const connectDB=require('./config/db');
const designRoutes=require('./routes/designRoutes')
const port=process.env.PORT ||5000;
const app=express();

// using cors 
app.use(cors());
app.use(express.json());//parses incoming JSON requests and puts the parsed data in req.body.
 // connect database 
connectDB();
//app.use('model/design',designRoutes);



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})