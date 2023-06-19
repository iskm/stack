const express = require('express')
const app = express()
const cors = require('cors')
const Blog = require('../models/blog.js')
const blogsRouter = require('../controllers/blogs')
const mongoose = require('mongoose')
const logger = require('../utils/logger.js')


logger.info("Connecting to mongo server")
const mongoUrl = 'hello'
mongoose.connect(mongoUrl)
logger.info("Successfully connected to mongo server")

app.use(cors())
app.use(express.json())

app.get('/api/blogs', blogsRouter)

app.post('/api/blogs', blogsRouter)

const PORT = 3003
app.listen(PORT, () => {
 logger.info(`Server running on port ${PORT}`)
})
