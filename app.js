// app.js
const express = require('express');
const app = express();
const db = require('./db'); // Import database connection
const userRoutes = require('./routes/user');

app.use(express.json()); // Parse JSON request bodies

// Mount API routes
app.use('https://sheetdb.io/api/v1/lic692opgm6s1', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port ${port}');
});