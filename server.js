const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/plain')
    //sends content to browser
    res.write('hello josh')
    res.end()
})

//2nd paramater is localhost by default, you can change if you want
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})