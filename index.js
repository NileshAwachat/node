// let a = 10
// let b = 10
// console.log(a + b);



const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world! i am learning node js\n');
});
server.listen(4000, 'localhost', () => { console.log('Server running at http://localhost:3000/'); }); 
