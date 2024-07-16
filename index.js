const express = require("express");
const app = express();

//const router = express.Router()
require("dotenv").config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount

app.use("/api/v1", blog);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
})

const connectwithDb= require("./config/database");
connectwithDb();

