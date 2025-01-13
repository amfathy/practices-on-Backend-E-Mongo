import express from 'express';
import controll from '../controller/posts.controller.js'; 
const route = express.Router(); 

route.post('/create' , controll.createPosts);
route.get('/get' , controll.getposts); 


export default route ; 
