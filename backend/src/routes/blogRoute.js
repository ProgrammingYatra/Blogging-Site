const express=require("express");
const { getPosts, getPost, deletePost, updatePost, addPost } = require("../controllers/blogController");

const router=express.Router();

router.route("/").get(getPosts).post(addPost)
router.route("/:id").get(getPost).delete(deletePost).put(updatePost)



module.exports=router;