const express = require('express');
const users = require('../models/users');
const router = express.Router()
const { 
  getUser, 
  getUserByID, 
  addUser, 
  deleteUser 
} = require('../controllers/users.controllers');

router.get('/', getUser)

router.get('/:id', getUserByID)

router.post('/', addUser)

router.delete('/:id', deleteUser)

module.exports = router