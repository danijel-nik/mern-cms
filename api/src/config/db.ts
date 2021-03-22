import mongoose from 'mongoose'

interface DB {
    connect(): void
}

const dbConnectionURI: string = process.env.DB_CONNECTION || ""

const db: DB = {
    connect: () => {
        mongoose.connect(dbConnectionURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then((resp) => console.log(`Database connected: ${resp.connection.host}`))
        .catch((err) => console.log(err))
    }
}

export default db