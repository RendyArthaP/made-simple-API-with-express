const express = require('express');
const router = express.Router()
const userRouter = require('./user.routes');

router.get('/', (req, res) => {
  res.json({
    message: "Hello everyone!"
  })
})

router.use("/user", userRouter)

module.exports = router