require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// ---------- config ----------
app.set('view engine', 'ejs');

// ---------- database ----------
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });

students = [{
    firstName:"Namal",
    lastName:'Malinga',
    email:"th@rt0",
    phone:'11200212'
}
]

// ---------- top m/ws ----------
app.use(express.static('public'));


// ---------- routes ----------
app.use(studentRoutes)



// ---------- redirects ----------
app.get('/', (req, res) => {
    res.redirect('/dashboard/students');
  });


// ---------- bottom m/ws ----------


// ---------- config ----------
// ---------- config ----------
// ---------- config ----------
