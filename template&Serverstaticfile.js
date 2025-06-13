import express from "express";
const app=express();
const PORT=3215

//serving static file 
app.use(express.static("public"))
app.use("/images",express.static("images")) // only serve at specific route



// set ejs as view engine

app.set("view engine" ,"ejs")

app.get("/",(req,res)=>{
     const username="shrrvvuu"
     res.render("index",{username})

})


app.listen(PORT,()=>{
     console.log(`server is running on http://localhost:${PORT}`)
})