import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res,next) =>{
    console.log("middle");
    next();
})

app.get('/',(req,res)=>{
    res.send("hit server");
});

const port = process.env.PORT || 8081;

app.listen(port, ()=>{
    console.log("listen");
});