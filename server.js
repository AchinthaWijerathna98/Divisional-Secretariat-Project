const express =require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes=require('./routes/posts');

//App middleware
app.use(bodyparser.json());
app.use(cors());


app.use(postRoutes);

const PORT = 8000;

const DB_URL = 'mongodb+srv://projectitpm7:ITPM1234@requestmanagement.no2rdke.mongodb.net/RequestManagement?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>console.log('DB Connection error',err));

app.listen(PORT,()=>{
    console.log('App is running on ${PORT}');
});

