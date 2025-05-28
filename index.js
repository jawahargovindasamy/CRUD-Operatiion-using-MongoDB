import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import productRouter from './Routers/ProductRouter.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello from the server!'
    })
});

app.use('/api/products', productRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server is Started');
});