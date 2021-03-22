import { Request, Response } from 'express'

/** 
* @desc    Fetch all posts
* @route   GET /api/post
* @access  Public
*/
export const getPosts = (req: Request, res: Response) => {
    res.json({"route": "posts"})
}