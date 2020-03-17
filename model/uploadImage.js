const mongoose=require('mongoose');

var schema= mongoose.Schema

var image=new schema({
    url:String
})
module.exports=mongoose.model('image', image);