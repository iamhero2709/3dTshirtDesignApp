const express =require('express');
const {createDesign,getDesign}=require('../controllers/designController');
const router=express.Router();



router.post('/',createDesign);
router.get('/',getDesign);

module.exports=router;