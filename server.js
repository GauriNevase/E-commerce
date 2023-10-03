// import express from'express';
// import colors from'colors';
// import dotenv from 'dotenv';
// import morgan from 'morgan';
// import connectDB from './config/db.js';
// import authRoute from './routes/authRoute.js';
// import userModel from './models/userModel.js';

// //configure env
// dotenv.config()


// //database config
// connectDB();

// //rest object
// const app =express()


// //routes
// app.use('/api/v1/auth',authRoute)

// //middleware
// app.use(express.json())

// app.use(morgan('dev'))
// //rest api
// app.get('/',(req,res)=>{
//     res.send(
//         "<h1>Welcome to ecommerce app</h1>"
//     )
// })

// //PORT
// const PORT=process.env.PORT||8080;

// //run listen
// app.listen(PORT,()=>{
//     console.log(`Sever Running on ${PORT}`.bgCyan.white);
// })
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();

// Create an Express application
const app = express();

// Middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', authRoute);

// REST API
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the ecommerce app</h1>');
});

// PORT
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`.bgCyan.white);
});
