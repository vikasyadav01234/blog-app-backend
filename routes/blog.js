const express = require("express");
const router = express.Router();

///Import Controller
const {createComment} = require("../controlles/CommentController");
const {createPost, getAllPosts} =require("../controlles/PostController");
const {likePost, unlikePost} = require("../controlles/LikeController")

//Mapping Create
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike",unlikePost)
//export 
module.exports = router;