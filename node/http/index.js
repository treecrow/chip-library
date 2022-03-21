const http = require('http')

const server = http.createServer((request, response) => {
    console.log('request url: ', request.url);
    if (request.url === '/timeout') {
        setTimeout(function () {
            response.end('OK!');
        }, 1000 * 60 * 2 + 100)
    } else {
        response.end('ok+')
    }
}).listen(3020)
console.log('server listening on port ', 3020);