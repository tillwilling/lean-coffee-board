const [name, age, email] = process.argv.slice(2)

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

  const response = await db
    .collection('users')
    .insertOne({ name, age, email })
    .catch(error => {
      console.error(error)
      client.close()
      process.exit(1)
    })

  console.log(
    `SUCCESS: Inserted ${name}, ${age}, ${email} with ObjectId "${response.insertedId}"`
  )

  client.close()
}
