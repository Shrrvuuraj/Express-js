import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { person } from "./models/person.js";

const app = express();
const PORT = 2431;

await connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});


// saving data
app.post("/person", async (req, res) => {
  
  res.send("person added");
  const { email, age, name } = req.body;
  const newPerson = new person({name, age, email});
  await newPerson.save()
  console.log(newPerson)
});

//updating data in database
//can update mulitiple things
// findOne,findById and many other object

//.findById(id)
//   personData.age=30;
//  await  personData.save()
// no save requiresin findid update

app.put("/person", async (req, res) => {
  const {id}=req.body

  const personData= await person.findByIdAndUpdate(id,{age:"28"})

  console.log(personData)
  res.send("person upgraded");
 
  
});

//deleting the data

// ... (all your other imports and setup remains the same)

// deleting the data - fixed version
app.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPerson = await person.findByIdAndDelete(id);
  
  if (!deletedPerson) {
    console.log("No person found with that ID");
    return res.send("No user found to delete");
  }
  
  console.log("Deleted person:", deletedPerson);
  res.send("user deleted");
});

// ... (rest of your code remains the same)


app.listen(PORT, () => {
  console.log(`Server is running into http://localhost:${PORT}`);
});
