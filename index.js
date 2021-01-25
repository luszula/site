const http = require('http');

const hostname = 'localhost';
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Laboratorium L2. Sekcja: L. Szula, B. Klima');
});

server.listen(PORT, hostname, () => {
  console.log("Server running at http://${hostname}:${PORT}/");
});

