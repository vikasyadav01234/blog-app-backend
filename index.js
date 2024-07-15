const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})

