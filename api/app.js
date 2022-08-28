var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', function (req, res, next) {
  res.json([
    {"id": "1", 
    "title": "Book review: Winnie the Pooh!"
    },
    {"id": "2", 
    "title": "Game review: Pokemon Go!!!"
    },
    {"id": "3", 
    "title": "Show review: Disney Cartoon!"
    }
  ])
})
 
app.listen(4000, function () {
  console.log('listening on port 4000')
})