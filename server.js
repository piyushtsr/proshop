const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

connectDB();

// Init Middleware
app.use(express.json());

app.use('/api/users', require('./routes/api/users'));





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));