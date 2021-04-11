import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    name: string
    email: string
    password: string
    role: string
    isAdmin: boolean
}

const postSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

export default mongoose.model<IUser>('Posts', postSchema)