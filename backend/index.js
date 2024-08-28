const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');
const path = require('path');


app.use(express.json());
app.use(cors());


// database connection with mongodb
mongoose.connect('mongodb+srv://ecommerce:user@123@e-commerce-app.digd9.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce-app');


// API creation

app.get("/", (req, res)=>{
    res.send("Express server is running");
})

app.listen(port, (e) => {
    if(!e){
        console.log(`server is running on port ${port}`);        
    } else {
        console.error("Error : ", e);
    }
})



