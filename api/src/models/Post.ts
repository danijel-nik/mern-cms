import mongoose, { Schema, Document } from 'mongoose'

export interface IPost extends Document {
    user: string
    title: string
    permalink: string
    category: string
    description: string
    body: string
    type: string
    image?: string
}

const postSchema: Schema = new Schema({
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

export default mongoose.model<IPost>('Posts', postSchema)