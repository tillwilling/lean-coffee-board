const express = require('express')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/lean-coffee-board', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB (lean-coffee-board)'))
  .catch(console.error)

// express likes to call the server "app"
const app = express()

// add middleware for json data
app.use('/', express.json())
app.use('/api/users', require('./routes/users'))
app.use('/api/cards', require('./routes/cards'))

// catch all (404)
app.use((req, res) => res.sendStatus(404))

// error route
app.use(require('./routes/error'))

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`)
})
