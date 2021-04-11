import express from 'express'
const postRoute = express.Router()
import { getPosts, createPost } from '../controllers/postController'

postRoute
    .get('/', getPosts)
    .post('/', createPost)

export default postRoute