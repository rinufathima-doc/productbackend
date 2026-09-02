import express from 'express';
import authRouter from './routes/authRoutes.js';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import productRouter from './routes/productRoutes.js';

dotenv.config();

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});