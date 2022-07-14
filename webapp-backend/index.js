//import statements
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

//configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//connection to our database
mongoose.connect(
  "mongodb://localhost:27017/logininfo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

//Schema Definition for our collection users
const userSchema = new mongoose.Schema({
  empid: String,
  password: String,
  name: String
});

//Model Definition for our collection users
const User = new mongoose.model("User", userSchema);

//Schema Definition for our collection appointments
const bookinginfoSchema = new mongoose.Schema({
  date: String,
  room_name: String,
  time: String,
  id: Number,
});

//Model Definition for our collection appointments
const Appointment = new mongoose.model("Appointment", bookinginfoSchema);

//Schema Definition
const sch = {
  name: String,
  email: String,
  id: Number,
};

//Model Definition
const monmodel = mongoose.model("NEWCOL", sch);

//counter table Schema Definition
const counterSchema = {
  id: {
    type: String,
  },
  seq: {
    type: Number,
  },
};

//counter table Model Definition
const countermodel = mongoose.model("counter", counterSchema);

//token generation function
const createToken =  (user) => {
  return jwt.sign({user},"HIMYNAMEISSLIMSHADYAKAKAKAKEMINEM")
}

//Routes
//Login Route
app.post("/login", (req, res) => {
  const { empid, password } = req.body;
  User.findOne({ empid: empid }, (err, user) => {
    if (user) {
      if (password === user.password) {
        // res.send({ message: "Sign in Successful", user: user });
        const token = createToken(user);
        
        res.cookie("jwtoken",token,{
          expires:new Date(Date.now() + 25892000000),
          httpOnly:true
        })
        return res.status(200).json({message:'Sign in Successful',token,user })
      } else {
        res.send({ message: "Invalid Credentials" });
      }
    } else {
      res.send({ message: "Invalid Credentials" });
    }
  });
});


// Input Route
app.post("/input", (req, res) => {
  const { date, room_name, time } = req.body;
  if (date && time && room_name) {
    Appointment.findOne(
      { room_name: room_name, time: time, date: date },
      (err, event) => {
        if (event) {
          res.send({
            message:
              "Room Not Booked as time-slot selected by you is colliding with another meeting",
            event: event,
          });
        } else {
          countermodel.findOneAndUpdate(
            { id: "autoval" },
            { $inc: { seq: 1 } },
            { new: true },
            (err, cd) => {
              let seqId;
              if (cd == null) {
                const newval = new countermodel({ id: "autoval", seq: 1 });
                newval.save();
                seqId = 1;
              } else {
                seqId = cd.seq;
              }

              const data = new Appointment({
                room_name: req.body.room_name,
                date: req.body.date,
                time: req.body.time,
                id: seqId,
              });
              data.save();
            }
          );
          res.send({ message: "Room Booked Successfully" });
        }
      }
    );
  } else {
    res.send({ message: "Kindly fill all the details :)" });
  }
});

//Fetching Data
app.get("/meetings", (req, res) => {
  Appointment.find({}, { _id: 0, __v: 0 }, (err, result) => {
    if (err) throw error;
    res.send(result);
  });
});

//Fetching names
app.get("/name", (req, res) => {
  User.find({}, { empid: 0, _id: 0, password: 0 }, (err, result) => {
    if (err) throw error;
    res.send(result);
  });
});

//Exercising CRUD Operations
//GET
app.get("/get", (req, res) => {
  res.json({ a: "HELLO WORLD", age: "21", town: "Vasind" });
  
});
//POST
app.post("/post", (req, res) => {
  console.log(req.body);
  res.send("OKK");
});
//PUT
app.put("/put", (req, res) => {});

//some internal working
app.listen(9002, () => {
  console.log("Backend started at port 9002");
});
