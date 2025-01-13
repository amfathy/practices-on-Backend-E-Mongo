import postModel from '../Model/posts.model.js'

const createPosts = async (req , res) => { 
    try {
         const {Title , Discription , User} = req.body ; 
         if(!Title || !Discription || !User) {
            res.status(404).json({Error : err});
         }
         await postModel.create({Title , Discription , User}); 
         res.status(201).json("User Added");
    }
    catch (err) { 
        res.status(404).json({Error : err});
    }
}

const getposts = async (req , res) => {
    try{
        const posts = await postModel.find(); 
        res.status(200).json(posts);
    }
    catch(err){
        res.status(404).json({Error : err});
    }
}

export default { createPosts , getposts}; 
