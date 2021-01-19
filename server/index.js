const express = require('express')
const mongoose = require('mongoose')
const fileupload=require('express-fileupload')
const cookieParser = require("cookie-parser")

const routes = require('./routes/authRoutes')
const notesRoutes=require('./routes/notesRoute')


const app = express()


mongoose.connect('mongodb://localhost:27017/noteKeeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open',()=>{
    console.log('connected to mongo');
})

app.use(cookieParser());
app.use(express.json())
app.use(fileupload())
app.use(express.static(__dirname+'/images'))
app.use(routes)
app.use(notesRoutes)



app.listen('4000', () => {
    console.log('listening to 4000');
})