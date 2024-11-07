
const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(express.json()); 

// Routes
app.use('/api/blogs', blogRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
