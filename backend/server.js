const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/v1/',require('./api'))

const PORT = 8081
app.listen(PORT,()=> {
   console.log("server running");
})
