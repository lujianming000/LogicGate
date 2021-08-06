import express from "express";
import cors from "cors";
import fs from 'fs';
import mongoose from 'mongoose';
const morgan = require("morgan");
require("dotenv").config();


const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTION ERR => ", err));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res,next) =>{
    console.log("middle");
    next();
})

fs.readdirSync("./routes").map((r)=>{
    app.use("/api",require(`./routes/${r}`));
});

const port = process.env.PORT || 8081;

app.listen(port, ()=>{
    console.log("listen");
});