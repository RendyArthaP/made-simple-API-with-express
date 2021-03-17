const e = require('express')
const express = require('express')
const app = express()
const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`example app at http://localhost:${port}`)
})
