const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// ---------- config ----------
const port = process.env.PORT || 3000;
dotenv.config();
app.set("view engine", "ejs");

// ---------- database ----------
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => app.listen(port))
  .catch((err) => {
    console.log(err);
  });

// ---------- top m/ws ----------
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ---------- routes ----------
app.use("/dashboard/students", studentRoutes);
app.use("/dashboard", authRoutes);

// ---------- redirects ----------
app.get("/", (req, res) => {
  res.redirect("/dashboard/students");
});

// ---------- bottom m/ws ----------
// ---------- error handling ----------

app.use((req, res) => {
  // res.status(401).json({ errors: { message: 'Page not found!' } });
  res.render("404");
});
