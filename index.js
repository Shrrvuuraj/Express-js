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
const users=[]

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register",async (req,res)=>{
 const {username,password}=req.body
 username.push
})

app.listen(PORT, () => {
  console.log(`Server is running into http://localhost:${PORT}`);
});
