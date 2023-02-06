const express = require("express")
const app = express()
const port = 1000

app.use(express.static('public'))

app.get('/', (request, response, next) => {

    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response, next) => {

    response.sendFile(__dirname + '/views/works.html')
})

app.get('/photo', (request, response, next) => {

    response.sendFile(__dirname + '/views/photo.html')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})