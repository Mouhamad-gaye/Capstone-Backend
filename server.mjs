import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import globalError from './middleware/globalError.mjs';
import cors from 'cors';
import morgan from 'morgan';



//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));


//Routes


//Err Middleware
app.use(globalError);

//Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})

