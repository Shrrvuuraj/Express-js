import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 2431;

app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: "sample-1",
    resave:false,
    saveUninitialized:false
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/visit",(req,res)=>{
//   if (req.session.page_views) {
//     req.session.page_views++
//     res.send(`you visted this page ${req.session.page_views}`)
    
//   } else {
//     req.session.page_views=1
//     res.send(`thanku for vistibg this site for first time`)
//   }
// })

// app.get("/remove-visit",(req,res)=>{

//   req.session.destroy()
//   res.send("session removed")

// })

// app.get("/remove-cookie",(req,res)=>{
//   res.clearCookie(`name`);
//   res.send("cleared c0okie")
// });

// app.get("/fetch",(req,res)=>{
//   console.log(req.cookies);
//   res.send("Api Called")
// })

app.listen(PORT, () => {
  console.log(`Server is running into http://localhost:${PORT}`);
});
