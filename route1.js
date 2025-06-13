// import express from "express";
// const app=express();

// const port=3500;
// app.get("/",(req,res)=>{
//      res.send("hello express")

// })
// app.get("/things/:name/:id", (req, res) => {
//   const { name, id } = req.params;

//   if (!/^\d{5}$/.test(id)) {
//     return res.status(400).send("ID must be exactly 5 digits");
//   }

//   res.json({ id, name });
// });
 


// // catch all invalid user 
// app.use((req, res) => {
//   res.status(404).send("Sorry, this is an invalid route");
// });



// app.listen(port,()=>{
//  console.log(`server is running on http://localhost:${port}`)
// })