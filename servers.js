const express = require('express')

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
