//import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like a post
exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();
        //update the post colection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}},{new : true})
        .populate("Likes").exec();
        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(400).json({
            error:"Error while like posts"
        })
    }
}

exports.unlikePost = async(req,res) =>{
    try{
        const {post, like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findByIdAndDelete({post:post,_id:like});
        //update the post collection
        const updatedPost = await Post.findByIdAndDelete(post,{$pull: {likes: deletedLike._id}}, {new: true});
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"Error while unlike posts"
            });
    }
}