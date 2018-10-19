let arc = require('@architect/functions')
let url = arc.http.helpers.url

function route(req, res) {
  let isLoggedIn = req.body.email === 'admin' && req.body.password === 'admin'
  res({
    session: {isLoggedIn},
    location: url(`/`)
  })
}

exports.handler = arc.http(route)
