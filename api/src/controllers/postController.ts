import { Request, Response } from 'express'
import Post, {IPost} from '../models/Post'
import { CreateQuery, Query } from 'mongoose'

/** 
* @desc    Fetch all posts
* @route   GET /api/post
* @access  Public
*/
export const getPosts = (req: Request, res: Response) => {
    res.json({"route": "posts"})
}

/** 
* @desc    Create post
* @route   POST /api/post
* @access  Private
*/
export const createPost = async (req: Request, res: Response) => {
    const post = new Post(req.body.post)
    const createdPost = await post.save()
    if (createdPost) {
        res.status(201).json(createdPost)
    } else {
        res.status(400)
        throw new Error("Post have not created! Please try again")
    }
}