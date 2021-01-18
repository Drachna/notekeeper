const mongoose=require('mongoose')
const User=require('../models/users')

const noteSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
        
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    list_item:{
        type:[],
        default:[]
    },
    img:{type:String}
    

})

const Notes=mongoose.model('Notes',noteSchema)
module.exports=Notes