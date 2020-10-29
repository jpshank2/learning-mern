const express = require('express')
const app = express()
const connectDB = require('./config/db.js')

const PORT = process.env.PORT || 5000

connectDB();

app.get('/', (req, res) => {
    res.send('API RUNNING')
})
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})