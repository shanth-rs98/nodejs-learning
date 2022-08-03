const express = require('express');
//dotenv configuration for environment changes
require('dotenv').config()


const app = express();

app.use(express.json())
// app.use(express.url())

const db = require('./connection')

db.connect((err,res)=>{

    if(!err){
        console.log("DB CONNECTED")
    }
    else{
        console.log(err)
    }
})

//routes
const books = require('./books');
app.use('/books',books)



//application run
app.listen(process.env.PORT || 8000,_=>{
    console.log("Running")
})