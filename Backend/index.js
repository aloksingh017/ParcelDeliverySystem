const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const cors= require('cors');
const authRoute = require("./routes/auth");
const connectDB = require('./config/db');
dotenv.config();
const app= express();

//DATABASE CONNECTION STARTS
connectDB()
//DATABASE CONNECTION ENDS

app.use(cors);
app.use(express.json());
//ROUTES
app.use('/auth',authRoute);





const PORT= process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})
