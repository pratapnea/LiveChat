var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Pratap', message: 'Hi'},
    {name: 'Yogi', message: 'Hello'}
]

app.get('/messages', (req, res, next) => {
    res.send(messages)
})

app.post('/messages', (req, res, next) => {
    messages.push(req.body)
    res.sendStatus(200)
})

var server = app.listen(3000, () => {
    console.log("Server is listening on port", server.address().port)
})