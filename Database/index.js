import express from "express";
import mongoose from "mongoose";


const app=express();
const PORT =5565;

const MONGODB_URI="mongodb+srv://expressMongo:12345@employees.mpnvsua.mongodb.net/test?retryWrites=true&w=majority&appName=employees";




mongoose.connect(MONGODB_URI).then(()=>{
     console.log("Database connected")

})


app.get("/",(req,res)=>{
     res.send("hello")
})

app.listen(PORT,()=>{
     console.log(`server is runnning in http://localhost:${PORT}`)

})
