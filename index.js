const express = require('express')
const app = express()
const PORT = 4321

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT)
