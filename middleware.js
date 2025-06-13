import express from "express";
const app=express();
const PORT=3737;



app.get("/",(req,res)=>{
     res.send("hello World");
     console.log("middle")
})
// manging error

app.get("/error",()=>{
     throw new Error("this is a test error")
})

app.use((err,req,res,next)=>{
     console.error(err);
     res.send("internal server eroor")

})

app.listen(PORT,()=>{
     console.log(`the server is runningg on http://localhost:${PORT}`)
});



//flow how midlleware work


// app.use((req,res,next)=>{
//      console.log("Start");
//      res.on("finish",()=>{  // event listner 
//           console.log("end")
//      })
//      next()
// })
// app.get("/",(req,res)=>{
//      res.send("hello World");
//      console.log("middle")
// })


//these midlleware apllied to alll routes

// app.use('/welcome',(res,req,next)=>{
//      console.log("a neew Request recived at "+Date.now())
//      next()
// })
// app.get("/welcome",(req,res)=>{
//      res.send("express app")
// })