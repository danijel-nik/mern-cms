const express = require('express');
const postsRoute = express.Router();

postsRoute.get('/', (req, res) => {
    res.json({"route": "posts"});
});

module.exports = postsRoute;