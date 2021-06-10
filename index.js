import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//Router imports
import postRoutes from './routes/posts.js'

const app = express()

//Router Setup
app.use('/posts', postRoutes)

//Main Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = //from mondoDB
const PORT = process.env.port || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //set up to reduce warnings
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false) //set up to reduce warnings