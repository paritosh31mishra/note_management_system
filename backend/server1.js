//express downloading code
const express = require('express');
const app = express();

// use cross origin for frontend-backend communication
const cors = require('cors'); // calling cross origin library


const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://note-management-system-yrlw.onrender.com" // Hosted frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Block the request
      }
    },
    credentials: true, // Include credentials (if needed)
  })
);

app.use(express.json());



//database connection code start
const mongoose = require('mongoose'); // importing mongodb compiler

mongoose.connect(
  "mongodb+srv://mishraparitosh31:pari31tosh@cluster0.nskf6.mongodb.net/Note_management?retryWrites=true&w=majority&appName=Cluster0", 
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("Database Connected..."))
  .catch((error) => console.error("Database connection failed:", error));


const accountapi = require("./accountapi");
app.use("/account", accountapi);  


const manageuser = require("./userapi");
app.use("/note", manageuser); 
app.use("/deletenote", manageuser); 
app.use("/editnote", manageuser); 
app.use("/retrievenote", manageuser); 
app.use("/addnote", manageuser); 

app.listen(4444, () => console.log("The server is live now...."));



// app.use(cors()); // creating object of cors library
// app.use(express.json());

// //database connection code start
// const mongoose = require("mongoose");// importing mongodb compiler
// mongoose.connect("mongodb://127.0.0.1:27017/skillstreet", {useNewUrlParser:true});
// //passing the url of database 
// // use ip address instead of domain name localhost:27017

// const db = mongoose.connection; //connection to db
// db.on("error", (error)=> console.log( error )); // if error than show error
// db.on("open", ()=> console.log(" Database Connected... ")); // otherwise show Database Connected
// // database connection code end