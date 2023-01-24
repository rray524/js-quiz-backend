import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import { connect } from './db/connect.js';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config();


/** Routes ** */
app.use('/api', router)

app.get('/', (req, res) => {
    try {
        res.json("Your server is running")
    } catch (error) {
        res.json(error);
    }
});
// PORT CONTROL
const port = process.env.PORT || 5000;

// connect server only  when we have valid connection
// Database configuration
mongoose.set('strictQuery', true);
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    } catch (error) {
        console.log("can't connect to server")
    }

}).catch(err => {
    console.log("Invalid Database Connection");
});
