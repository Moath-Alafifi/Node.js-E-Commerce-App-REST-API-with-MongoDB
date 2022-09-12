const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter=require('./routes/auth')
const userRouter=require('./routes/user')
const productRouter=require('./routes/product')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("successes"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.listen(process.env.PORT || 5000, () => console.log("first"));
