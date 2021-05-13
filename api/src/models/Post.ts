import mongoose, { Schema, Document } from 'mongoose'

export interface IPost {
    user: mongoose.Schema.Types.ObjectId | null
    title: string
    permalink: string
    category?: string
    description: string
    body: string
    type: "post" | "page"
    status: "draft" | "published"
    access: "protected" | "public"
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
        required: true,
        unique: true
    },
    permalink: {
        type: String,
        required: true,
        unique: true
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
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    access: {
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

export default mongoose.model<IPost & Document>('Posts', postSchema)