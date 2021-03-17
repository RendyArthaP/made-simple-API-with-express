const http = require('http');

const host = "localhost"
const port = 3000

const reqHandler = (req, res) => {
  console.log(req.url)
  res.end("hello server")
}

const server = http.createServer(reqHandler)

server.listen(port, host, err => {
  if(err) {
    return console.log("error")
  }
  console.log("server running on port", port);
})