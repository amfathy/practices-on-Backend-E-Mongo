import schema from '../Model/user.model.js'
import hash from '../Utili/hashing.js'
import jwt from 'jsonwebtoken' 
import dotenv from 'dotenv'

dotenv.config();

const createUser = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({ message: "Email and Password are required" });
        }

        const newUser = new schema({ Email, Password });
        await newUser.save();
      

        const token = jwt.sign(
            {userId : newUser._id } ,
            process.env.JWT_SECRET_KEY ,                        
            {expiresIn :process.env.JWT_EXPIRE_TIME}
        );


        res.status(201).json({ data : newUser , token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUser = async (req , res)=> {
    try{
        const data = await schema.find(); 
         res.status(200).json(data);
    }
    catch(err){
        res.status(404).json({Error : err});
    }
}


const login = async (req , res ) => {
    try {
       const {Email , Password } = req.body ;
       if (!Email || !Password) {
        return res.status(400).json({ message: "Email and password are required" });
        }
       const user = await schema.findOne({Email});  
       

       if(user){
            const isMatching = await hash.isMatch(Password , user.Password);
            if(isMatching){
                 const token = jwt.sign({userId : user._id} ,
                 process.env.JWT_SECRET_KEY ,
                 {expiresIn : process.env.JWT_EXPIRE_TIME});
                 res.status(200).json({ user,token}); 
            }
            else{ 
                res.status(402).json("Password is uncorrect"); 
            }
       }else{
        res.status(401).json("Email Not found"); 
       }
    }
    catch(err){
        res.json({Error : err});
    }
}   

export default { 
    createUser , getUser  , login
}

