import express from 'express'
import { router } from './router/router'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: true
}))
app.use(express.json())
app.use('/api', router)

app.listen(4000, ()=>{
  console.log("Listening to port 4000!!")
})
