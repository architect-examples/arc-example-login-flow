var arc = require('@architect/functions')

function route(req, res) {
  console.log(req)
  var isLoggedIn = req.body.email === 'admin' && req.body.password === 'admin'
  res({
    session: {isLoggedIn},
    location: req._url(`/`)
  })
}

exports.handler = arc.html.post(route)
