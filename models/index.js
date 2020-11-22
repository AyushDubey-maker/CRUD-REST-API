const mongoose=require('mongoose');

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confPassword:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('formData',formSchema);