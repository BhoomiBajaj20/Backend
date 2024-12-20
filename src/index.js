// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import  { DB_NAME } from "./constants";
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express";

const app = express()

dotenv.config({path: './env'})
console.log("MONGODB_URI", process.env.MONGODB_URI);
console.log("DB_NAME:", process.env.DB_NAME);



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT: ${process.env.PORT || 8000}`);
    })
})
.catch((err)  => {
    console.log("MONGODB connection failed !!!", err);
    
})


/*
import express from "express"
const app = express()

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)  => {
            console.log("ERRR. ", error);
            throw error
            
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening  on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR", error);
        throw error
    }
})()

*/