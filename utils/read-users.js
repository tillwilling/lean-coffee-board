runDatabase()

async function runDatabase() {
  const mongodb = require('mongodb')

  const client = await mongodb
    .connect('mongodb://localhost', {
      useUnifiedTopology: true,
    })
    .catch(error => {
      console.error(error)
      process.exit(1)
    })

  const db = client.db('lean-coffee-board')

  const users = await db
    .collection('users')
    .find()
    .toArray()
    .catch(error => {
      console.error(error)
      client.close()
      process.exit(1)
    })

  console.log(users)
  client.close()
}
