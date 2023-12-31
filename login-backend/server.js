const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");
const booklistRoutes = require('./routes/booklist');
const reviewRoutes = require('./routes/review');

const cors = require("cors");
// require("dotenv").config();
app.use(express.json());

dotenv.config();
app.use(cors());

const uri = process.env.MONGO_URL;
const pass = process.env.PASS_SEC;
console.log(pass);
mongoose
  .connect(
    "mongodb+srv://gagan:gagan@cluster0.svsii6u.mongodb.net/WesternBookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connection successful"))
  .catch((err) => {
    console.log("Error is ", err);
  });


app.listen(process.env.PORT || 5151, () => {
  console.log("Backend working");
});

app.get('/',(req,res) =>{
  console.log("Hello");
});


app.post('/test', (req, res) => {
    console.log(req.body);  // Log the request body
    res.status(200).json({ message: "Test route", body: req.body });
});


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);
app.use('/api/booklists', booklistRoutes);
app.use('/api/reviews', reviewRoutes);
