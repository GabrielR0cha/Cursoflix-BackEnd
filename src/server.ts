import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import { adminJs, adminJsRouter } from './adminjs'
import { database } from './database'
import { router } from './routes'
import cors from 'cors'



const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Server started successfuly at port ${PORT}.`)
})