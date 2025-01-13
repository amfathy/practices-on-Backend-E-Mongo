import express from 'express' 
const app = express(); 
import dbconnection from './config/dbase.js' ;
import postRouter from './Router/posts.router.js';
import userRouter from './Router/user.router.js';

dbconnection(); 

app.use(express.json());
app.use ('/post' ,  postRouter);
app.use('/user' , userRouter); 

app.listen(1230);


