const express = require("express");
const app = express();
const cors=require("cors")
const User = require("./routes/userRoute");
const Blog = require("./routes/blogRoute");
app.use(express.json());
app.use(cors())

app.use("/api",User);
app.use("/api",Blog);

module.exports = app;
