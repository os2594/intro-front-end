const http = require('http');

const server = http.createServer((req, res) => {
    const contentResponse = '<html><body>Hello desde server con node</body></html>'
    res.write(contentResponse);
    res.end();
});

server.listen(5500);

console.log("servidor esta levantado en el puerto: ", 5500);

