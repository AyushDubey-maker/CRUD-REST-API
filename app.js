//const { json } = require('express');
const express =require('express');
const mongoose=require('mongoose');
const url='mongodb://localhost/client-form'
const app=express()

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
const conn=mongoose.connection

conn.on('open',()=>{
    console.log('connected')
});
app.use(express.json());

const dataRouter=require('./router/form');
app.use('/form',dataRouter);
app.listen(80,()=>{
    console.log('Server Started');
})