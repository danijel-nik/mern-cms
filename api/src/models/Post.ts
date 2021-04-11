import mongoose, { Schema } from 'mongoose'

// @ts-ignore
const postSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    permalink: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    description: {
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
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export default mongoose.model('Posts', postSchema)