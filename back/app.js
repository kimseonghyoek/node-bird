const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.end('Hello, node!!')
});
server.listen(8080, () => {
  console.log('서버 실행중');
});