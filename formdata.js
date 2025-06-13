import express from "express";
import multer from "multer";
import { storage } from "./config/multer.js";

const app = express();
const PORT = 3214;


const upload = multer({
  storage,
  limits: { fileSize: 1024000 },
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/form", upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("form activated");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
