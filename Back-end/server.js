import express from 'express';

import sequelize from './Config/connection.js'
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './Routes/usersRouter.js'
import articleRoute from './Routes/articleRoute.js'
import adminRoutes from './Routes/AdminRoute.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT || 8090;

sequelize.sync()   


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

app.get('/',(req,res)=>{
 res.send("hello world")
})

app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/articles', articleRoute );


app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
  