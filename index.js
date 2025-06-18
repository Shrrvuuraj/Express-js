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
    resave: false,
    saveUninitialized: false,
  })
);
const users = [];

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  users.push({
    username,
    password
  });
  res.send("user registered")
});

app.post("/login",async (req,res)=>{
  const{username,password}=req.body;
  const user=users.find(u=>u.username===username);
  if (!user||password!==user.password) {
    return res.send("not authorized")
    
  }
  req.session.user=user;
  res.send("user logged in")

})

app.get("/dashboard" ,(req,res)=>{
  if(!req.session.user){
    return res.send(`Logg in pls ${req.session} `)

  }
  res.send(`welcome ${req.session.user.username}`)

})

app.listen(PORT, () => {
  console.log(`Server is running into http://localhost:${PORT}`);
});
