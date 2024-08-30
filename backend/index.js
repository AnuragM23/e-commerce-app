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
mongoose.connect('mongodb+srv://anuragmahatocsbs:user123@shoppee.vrrbo.mongodb.net/shoppee?retryWrites=true&w=majority&appName=shoppee');


// API creation
app.get("/", (req, res)=>{
    res.send("Express server is running");
})

// Image storage engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({storage:storage})

// creating upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
});


// Schema for creating products
const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    avialable:{
        type: Boolean,
        default: true,
    },
});

app.post('/addproduct', (req, res) => {
    const product = new Product(
        {
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        }
    );
})


app.listen(port, (e) => {
    if(!e){
        console.log(`server is running on port ${port}`);        
    } else {
        console.error("Error : ", e);
    }
})



