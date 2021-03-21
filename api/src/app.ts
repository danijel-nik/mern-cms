import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import path from 'path'

import postsRoute from './routes/posts'

// App initialization
const app: Application = express()

// Database connection
import dbConnection from './config/db'

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api/posts', postsRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req: Request, res: Response) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req: Request, res: Response) => {
        res.json({"mern-cms-api": "1.0.0"})
    })
}

module.exports = app