const express = require('express');
const { route } = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('get all users contacts');
});

router.post('/', (req, res) => {
  res.send('add a new contact');
});

router.put('/:id', (req, res) => {
  res.send('update a contact');
});

router.delete('/:id', (req, res) => {
  res.send('delete a contact');
});

module.exports = router;
