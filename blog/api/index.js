const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(console.log("[MongoDB]:: CONNECTED"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

//Listen on port number
app.listen("5000" , () => {
    console.log("[Express Server]:: RUNNING");
});