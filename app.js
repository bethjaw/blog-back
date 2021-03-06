const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var request = require('request');
const querystring = require('query-string');
var port = process.env.PORT || 3001
const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

app.use(cors('*'))
app.options('*', cors())

app.use('/', routes)




// app.get('/github_login', (req, res, next) => {
//   const code = req.query.code
//
//   if(!code){
//     return next
//   }
//
//   request.post('https://github.com/login/oauth/access_token', {
//     form: {
//       code,
//       client_id: process.env.GITHUB_CLIENT_ID,
//       client_secret: process.env.GITHUB_CLIENT_SECRET
//     }
//   }, (err, response, body) => {
//     const github = querystring.parse(body)
//     res.cookie('blog-token', github.access_token)
//     res.redirect('/main')
//   })
// })
//



app.listen(port, (req, res) => {
  console.log('listening', port);
})
