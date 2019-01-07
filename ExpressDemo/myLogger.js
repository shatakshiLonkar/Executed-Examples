var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.listen(3000)