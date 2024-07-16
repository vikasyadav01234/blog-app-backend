const express = require("express");
const router = express.Router();

///Import Controller
const {createComment} = require("../controlles/CommentController");

//Mapping Create
router.post("/comments/create", createComment);

//export 
module.exports = router;