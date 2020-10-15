const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log(`Mi primer sitio web http://localhost:${port}`)
})

app.use(express.static(__dirname + '/public'));
