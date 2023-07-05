const express = require('express');
const connection = require('./connection/connection');
const bookingRouter = require('./Routes/userRoute');
const userRouter = require('./Routes/userRoute');
const userRoute = require('./Routes/userRoute');
const cors = require('cors');
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())


app.use("/user",userRoute)




app.listen(process.env.port, async ()=>{
    try {
        await connection
        console.log("Connected to DB Succesfully");
    } catch (error) {
        console.log(error)
        console.log("Error while Connecting to DB");
    }
    console.log("Server is Connected To Port No 4500");
})