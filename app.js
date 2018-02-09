const express = require('express')
const app = express()
var port = 3001


app.listen(port, (req, res) => {
  console.log('listening', port);
})
