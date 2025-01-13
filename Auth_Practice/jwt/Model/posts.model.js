import mongoose from "mongoose";

const postSchema = new mongoose.Schema ( 
    {
        Title : {
            type : String ,
            required : true ,
        },
        Discription : {
            type : String , 
            required : true ,
        },
        User : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "userSchemaa" , 
            required : true ,
        }
    }, 
    {timestamps : true}
)


export default  mongoose.model('Post' ,postSchema );
