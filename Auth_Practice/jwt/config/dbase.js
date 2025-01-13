import mongoose from "mongoose";
const url = 'mongodb://127.0.0.1:27017/AuthTest';
const connectDbase = async() => {
 try{
    await mongoose.connect(url); 
   console.log("Data base connected");
 }
 catch(err){
    console.log({Error : err})
 }} 

 export default connectDbase;
