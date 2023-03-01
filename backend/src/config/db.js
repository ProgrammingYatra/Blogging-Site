const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost" || process.env.HOST,
  user: "root" || process.env.USERNAME,
  password: "root" || process.env.PASSWORD,
  database: "blog" || process.env.DATABASE,
  insecureAuth: true,
});

db.connect((err) => {
  if (err) {
    console.log("Error occuress ", err.stack);
    return;
  }
  console.log("MySQL is Conneccted to ", db.threadId);
});
module.exports = db;
