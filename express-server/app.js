const e = require('express')
const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.json({
    message: "Hello everyone!"
  })
})

app.listen(port, () => {
  console.log(`example app at http://localhost:${port}`)
})
