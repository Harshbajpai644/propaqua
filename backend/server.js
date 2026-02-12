const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "propaqua",
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("MySQL Connected");
});

app.post("/api/inquiry", (req, res) => {
  const { name, phone, email, message } = req.body;

  const sql = "INSERT INTO inquiries (name, phone, email, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, email, message], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Inquiry Saved Successfully" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
