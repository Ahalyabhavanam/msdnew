// Import Express module
const express = require("express");

// Create an Express application
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my Express.js Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// POST route example
app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.send(`User created: ${name}, Age: ${age}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
