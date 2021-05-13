import dotenv from 'dotenv'
import db from './config/db'
import User from './models/User'
import Post from './models/Post'
import posts from './_data/posts'
import users from './_data/users'

dotenv.config()
db.connect(process.env.DB_CONNECTION || "")

const importData = async () => {
    try {
        // Clear data
        await User.deleteMany({})
        await Post.deleteMany({})

        // Insert data
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const samplePosts = posts.map(post => {
            return { ...post, user: adminUser }
        })
        await Post.insertMany(samplePosts)
        console.log('Data is imported!')

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany({})
        await Post.deleteMany({})
        console.log('Data is destroyed!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = {
    importData,
    destroyData
}