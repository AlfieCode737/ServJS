const http = require('http');

// Railway provides the PORT environment variable automatically
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Your Railway Server is Online!</h1><p>Connected via HTTP.</p>');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
