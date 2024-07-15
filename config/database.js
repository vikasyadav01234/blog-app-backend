const mongoose = require("mongoose");
require("dotenv").config();

const connectwithDb = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch(err => {
        console.log(err);
        console.log("DB facing Connection Issues");
        process.exit(1);
    });
};
module.exports = connectwithDb;