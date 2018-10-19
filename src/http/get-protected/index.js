let arc = require('@architect/functions')
let url = arc.http.helpers.url

function protect(req, res, next) {
  if (req.session.isLoggedIn) {
    next()
  }
  else {
    res({
      location: url(`/`)
    })
  }
}

function attack(req, res) {
  let msg = 'oh hai you must be logged in to see me!'
  let logout = `<a href=${url('/logout')}>logout</a>`
  res({
    html: `${msg} ${logout}`
  })
}

exports.handler = arc.http(protect, attack)
