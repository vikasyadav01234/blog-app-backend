const Post = require("../models/postModel");

exports.createPost = async(req,res)=>{
    try{
        const {title, body}=req.body;
        const post = new Post({
            title,body,
        });
        const savedPost = await post.save();


        
        res.json({
            post:savedPost,
        })
    }
    catch(error){

    }
}