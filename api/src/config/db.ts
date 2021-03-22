import mongoose from 'mongoose'

interface DB {
    connect(): void
}

const db: DB = {
    connect: () => {
        // @ts-ignore
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then((resp) => console.log(`Database connected: ${resp.connection.host}`))
        .catch((err) => console.log(err))
    }
}

export default db