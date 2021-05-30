const express = require('express')
const uuidv4 = require('uuid').v4
const router = express.Router()

let cards = [
  {
    text: 'This is a sample text',
    author: 'Jayson Doe',
    votes: 88,
    id: '0',
  },
  {
    text: 'This is also a sample text',
    author: 'Johnny Doe',
    votes: 99,
    id: '1',
  },
]

router.get('/', (req, res, next) => {
  res.json(cards)
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const foundUser = cards.find(user => user.id === id)
  foundUser ? res.json(foundUser) : next()
})

router.post('/', (req, res, next) => {
  const newUser = { ...req.body, id: uuidv4() }
  cards.push(newUser)
  res.status(201).json(newUser)
})

router.patch('/:id', (req, res, next) => {
  const { id } = req.params

  const index = cards.findIndex(user => user.id === id)
  const user = cards[index]
  const updatedUser = { ...user, ...req.body }
  cards.splice(index, 1, updatedUser)
  res.json(updatedUser)
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params
  cards = cards.filter(user => user.id !== id)
  res.sendStatus(204)
})

module.exports = router
