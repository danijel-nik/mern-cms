import mongoose from 'mongoose'

// @ts-ignore
const dbConnection = mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((resp) => console.log(`Database connected: ${resp.connection.host}`))
.catch((err) => console.log(err))

export default dbConnection