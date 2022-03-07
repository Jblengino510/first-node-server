const http = require('http')
//module for reading files
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 304
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    //send html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            //content of html file
            res.end(data)
        }
    })
    
})

//2nd parameter is localhost by default, you can change if you want
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})