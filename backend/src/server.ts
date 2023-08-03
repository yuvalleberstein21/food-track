import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import foodRouter from './routes/food.router';
import userRouter from './routes/user.router';
import { dbConnect } from './configs/database.config';

dbConnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

const port = 5001;
app.listen(port, () => {
  console.log('Website served on http://localhost:' + port);
});
