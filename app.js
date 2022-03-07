const express = require('express')

const app = express()

//listen for requests
app.listen(3000)

app.get('/', (req, res) => {
    //don't need to set headers or status codes
    res.send('<h1>My First Express App!!!</h1>')
})