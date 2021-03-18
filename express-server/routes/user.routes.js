const express = require('express');
const router = express.Router()
const { 
  getUser, 
  getUserByID, 
  addUser, 
  deleteUser,
  editUser 
} = require('../controllers/users.controllers');

router.get('/', getUser)

router.get('/:id', getUserByID)

router.post('/', addUser)

router.put('/:id', editUser)

router.delete('/:id', deleteUser)

module.exports = router