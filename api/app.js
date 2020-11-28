const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');

const postsRoute = require('./routes/posts');

// App initialization
const app = express();

// Database connection
const dbConnection = require('./config/db');

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api/posts', postsRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.json({"mern-cms-api": "1.0.0"})
    })
}

module.exports = app;