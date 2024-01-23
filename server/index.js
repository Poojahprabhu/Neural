import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
const app =express();

app.use(bodyParser.json({limit:"300mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true }));
app.use(cors());
app.use('/posts',postRoutes); //every route inside post starts with /posts 
//usingcloud atlas of monodb

const CONNECTION_URL = 'mongodb+srv://pooja:Password123@cluster0.igqzwfo.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5500;
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=> app.listen( ()=> console.log('Server running on a port:',PORT ))) // no need of port parameter
    .catch((error) => console.log(error.message));

//mongoose.connect(CONNECTION_URL).catch(error => handleError(error));
