const express = require("express");
const app = express();
const cors=require("cors")
const cookie=require("cookie-parser")
const Blog = require("./routes/blogRoute");
const Auth=require("./routes/authRoute")
app.use(express.json());
app.use(cors())
app.use(cookie())

app.use("/api",Auth)
app.use("/api",Blog);

module.exports = app;
