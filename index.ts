import express from 'express'
import { router } from './router/router'

const app = express()

app.use('/api', router)

app.listen(4000, ()=>{
  console.log("Listening to port 4000!!")
})
