var arc = require('@architect/functions')

function index(req, res) {
  var header = `<h1>Login Demo</h1>`
  var protec = `<a href=${req._url('/protected')}>protected</a>`
  var logout = `<a href=${req._url('/logout')}>logout</a>`
  var nav = `<p>${protec} | ${logout}</p>`

  var form = `
    <form action=${req._url('/login')} method=post>
      <label for=email>Email</label>
      <input type=text name=email>
      <label for=password>Password</label>
      <input type=password name=password>
      <button>Login</button>
    </form>
  `

  res({
    html: `${header} ${req.session.isLoggedIn? nav : form}`
  })
}

exports.handler = arc.html.get(index)
