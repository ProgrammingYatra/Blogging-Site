const express=require("express");
const { getTest } = require("../controllers/userContoller");

const router=express.Router();

router.route("/").get()


module.exports=router;