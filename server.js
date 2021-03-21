import dotenv from 'dotenv'
dotenv.config()

const app = require ('./api/dist/app')

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))