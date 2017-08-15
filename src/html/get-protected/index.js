var arc = require('@architect/functions')

function protect(req, res, next) {
  if (req.session.isLoggedIn) {
    next()
  }
  else {
    res({
      location: req._url(`/`)
    })
  }
}

function attack(req, res) {
  var msg = 'oh hai you must be logged in to see me!'
  var logout = `<a href=${req._url('/logout')}>logout</a>`
  res({
    html: `${msg} ${logout}`
  })
}

exports.handler = arc.html.get(protect, attack)
