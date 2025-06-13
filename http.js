import express from "express";
import router from "./route.js";

const app = express();
const port = 3500;

app.use("/user", router);

app.use(express.json());
app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `USer with ${name} with email ${email}`,
  });
});

app.put("/user/:id", express.json(), (req, res) => {
  const userId = req.params.id;

  const { name, email } = req.body;
  res.json({
    mesaage: `user ${userId} updates to ${name} ,${email}`,
  });
});

app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `user with id ${userId} is deleted`,
  });
});

// multiple parameters

app.get("/things/:name/:id([0-9]{5})", (req, res) => {
  const { name, id } = req.params;
  res.json({ name, id });
});

app.listen(port, () => {
 
  console.log(`server is now running on http://localhost:${port}`);
});
