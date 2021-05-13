if (process.argv[2] === "seeder") {
    // Seeder
    const { importData, destroyData } = require('./api/dist/seeder')
    if (process.argv[3] === "-d") {
        destroyData()
    } else {
        importData()
    }
} else {
    // Load API
    const app = require('./api/dist/app')
}