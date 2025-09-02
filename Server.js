const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// File upload config (optional)
const upload = multer({ dest: path.join(__dirname, "uploads/") });

app.post("/register", upload.single("profilePic"), (req, res) => {
  console.log("Form Data Received:");
  console.log("Full Name:", req.body.fullname);
  console.log("Email:", req.body.email);
  console.log("DOB:", req.body.dob);
  console.log("Gender:", req.body.gender);
  console.log("Phone:", req.body.phone);
  console.log("Course:", req.body.course);
  console.log("Skills:", req.body.skills);
  console.log("Address:", req.body.address);
  console.log("Favorite Color:", req.body.color);
  console.log("Website:", req.body.website);
  console.log("Experience:", req.body.experience);
  console.log("Coding Interest:", req.body.range);
  console.log("Uploaded File:", req.file ? req.file.originalname : "No file");

  res.send("<h2>Registration Successful!</h2><p>Check server console for submitted data.</p>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
