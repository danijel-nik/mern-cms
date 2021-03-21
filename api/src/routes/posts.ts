import express, { Request, Response } from 'express'
const postsRoute = express.Router()

postsRoute.get('/', (req: Request, res: Response) => {
    res.json({"route": "posts"})
});

export default postsRoute