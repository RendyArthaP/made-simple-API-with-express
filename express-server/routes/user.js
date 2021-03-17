const express = require('express');
const users = require('../models/users');
const router = express.Router()

router.get('/users', (req, res) => {
  res.json({
    message: "get users success",
    data: users
  })
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(item => item.id == id)

  if(!user) {
    res.json({
      message: "data id tidak ditemukan"
    })
  } else {
    res.json({
      message: "get users by id success",
      data: user
    })
  }

})

router.post('/users', (req, res) => {
  const user = req.body
  users.push(user)

  res.json({
    message: "success adding new user",
    data: users
  })
})

router.delete('/users/:id', (req, res) => {
  const id = req.params.id
  const user = users.filter(item => item.id != id)

  res.json({
    message: "users deleted success",
    data: user
  })

})

module.export = router