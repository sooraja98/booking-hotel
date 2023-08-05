import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('mongodb is connected')
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB is disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected');
});

//middleware
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',roomsRoute)

app.use((error,req,res,next)=>{
  const errorStatus=error.status || 500
  const errorMessage=error.message ||'something went wrong'
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:error.stack
  })
   next() 
})

app.listen(process.env.PORT, () => {
  connect();
  console.log('Back-end is connected');
});
