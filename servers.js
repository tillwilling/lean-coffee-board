const http = require('http')

const server = http.createServer(onRequest)
server.listen(4000)

function onRequest(req, res) {
  if (req.url === '/') {
    res.end(`Please visit /users to get user data.`)
  }

  if (req.url === '/users') {
    const users = [
      { name: 'Jane Doe', age: 32, email: 'jane@doe.com' },
      { name: 'John Doe', age: 31, email: 'john@doe.com' },
    ]
    res.end(JSON.stringify(users))
  }
}
