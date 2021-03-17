const e = require('express')
const express = require('express')
const app = express()
const port = process.env.port || 3000

const users = [
  {
    id: 0,
    nama: "rendy"
  },
  {
    id: 1,
    nama: "artha"
  },
  {
    id: 2,
    nama: "prawira"
  },
]

app.get('/', (req, res) => {
  res.json({
    message: "Hello everyone!"
  })
})

app.get('/users', (req, res) => {
  res.json({
    message: "get users success",
    data: users
  })
})

app.listen(port, () => {
  console.log(`example app at http://localhost:${port}`)
})
