const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    body: {
        type: Text,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);