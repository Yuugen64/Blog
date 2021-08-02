const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("[MongoDB]:: CONNECTED"))
.catch((err) => console.log(err));

//Listen on port number
app.listen("5000" , () => {
    console.log("[Express Server]:: RUNNING");
});