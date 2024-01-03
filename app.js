const express =require("express");
const path=require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path: './.env'});
const app=express();
const db=mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE

});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.set('view engine','hbs');

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("mysql connected")
    }
})

app.get("/",(req,res)=>{
    // res.send("<h1>HomePage</h1>")
    res.render("index");
});

app.listen(8005,()=>{
    console.log("server started at 8005");
})