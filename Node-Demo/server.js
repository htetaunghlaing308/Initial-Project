const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const server = http.createServer((req , res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    // if (req.url === '/') {
    //     filePath = path.join(__dirname, 'index.html');   
    // }else {
    //     filePath = path.join(__dirname, req.url);
    // }
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("<h1>404 Not Found</h1>", 'utf-8');
            }

        }else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content, 'utf-8');
        }

    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});  