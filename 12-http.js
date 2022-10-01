const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage')
    }
    if (req.url === '/about') {
        res.end('About me')
    }

    res.end(
        `<h1 > Opps < /h1> <
        p > The page is not you looking for < /p>
        <a href='/'>Go Back</a>`
    )



})

server.listen(5000)