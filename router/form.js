const express=require('express');
const router=express.Router()
const formData=require('../models/index')

router.get('/',async(req,res)=>{
  try{
      const data=await formData.find();
      res.json(data);
  }catch(err){
      res.send('Error'+err);
  }
});
router.post('/',async(req,res)=>{
  const alien=new formData({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    confPassword:req.body.confPassword
  });
  try{
    const a1=await alien.save()
    res.json(a1)
  }catch(err){
    res.send('Error');
  }

})
module.exports=router
