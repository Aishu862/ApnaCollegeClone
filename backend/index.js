require('dotenv').config();
const express = require('express');
const connectToMongoDB = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// API routes
app.use('/api/users', userRoutes);

// Connect to MongoDB on startup
connectToMongoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });


