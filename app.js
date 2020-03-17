const express=require('express');
const Routes=require('./routes/image');
const mongoose=require('mongoose')

// put your db link

mongoose.connect('',()=>{
    console.log('connected to db')
})


const app=express();
app.use(express.static('uploads'))
app.use(Routes);

app.listen(3000,()=>{
    console.log("server is up")
})