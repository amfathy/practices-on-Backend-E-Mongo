import express from 'express' ; 
import controller from '../controller/user.controller.js'; 
const router = express.Router(); 

router.get('/get' , controller.getUser); 
router.post('/create' , controller.createUser);
router.post('/login' , controller.login);

export default router ;



