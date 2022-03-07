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
            break
        case '/about':
            path += 'about.html'
            break
        default:
            path += '404.html'
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

//2nd paramater is localhost by default, you can change if you want
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})