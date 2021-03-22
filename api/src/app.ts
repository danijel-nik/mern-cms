import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import path from 'path'
import dotenv from 'dotenv'
import postRoute from './routes/postRoutes'

dotenv.config()

// App initialization
const app: Application = express()

// Database connection
import db from './config/db'
db.connect()

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api/posts', postRoute);

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

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`API is running on port ${PORT}`))

module.exports = app