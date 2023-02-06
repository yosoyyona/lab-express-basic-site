const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (request, response, next) => {

    response.send("WELCOME TO MY HOMEPAGE")
})

app.get('/About', (request, response, next) => {

    response.send("the person")
})

app.get('/Works', (request, response, next) => {

    response.send("the work")
})