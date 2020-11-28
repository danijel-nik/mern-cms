const mongoose = require('mongoose');

const dbConnection = mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then((resp) => console.log(`Database connected: ${resp.connection.host}`))
.catch((err) => console.log(err));

module.exports = dbConnection;