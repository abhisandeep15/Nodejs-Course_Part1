const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('These belongs to web server');
});


server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
