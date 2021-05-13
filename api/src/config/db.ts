import mongoose from 'mongoose'

interface DB {
    connect(dbConnection: string): void
}

const db: DB = {
    connect: (dbConnection) => {
        mongoose.connect(dbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then((resp) => console.log(`Database connected: ${resp.connection.host}`))
        .catch((err) => console.log(err))
    }
}

export default db