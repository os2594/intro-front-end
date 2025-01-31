const http = require('http');
const port = 5500;

const server = http.createServer((req, res) => {
    const contentResponse = '<html><body>Hello desde server con node</body></html>'
    const status = 200;
    const mimeType = {'Content-type': 'text/html'}
    res.writeHead(status, mimeType);
    res.write(contentResponse);
    res.end();
});

server.listen(port);

console.log(`servidor esta levantado en el puerto: ${port}`);

