import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import globalError from './middleware/globalError.mjs';
import cors from 'cors';
import morgan from 'morgan';
import membersRoutes from './routes/membersRoutes.mjs'
import eventsRoutes from './routes/eventsRoutes.mjs'
import communicationsRoutes from './routes/communicationsRoute.mjs'



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
app.use('/api/member', membersRoutes);
app.use('/api/event', eventsRoutes);
app.use('/api/comm', communicationsRoutes)


//Err Middleware
app.use(globalError);

//Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})

