let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http(req) {
  let state = await arc.http.session.read(req)
  let isLoggedIn = !!state.isLoggedIn

  var loggedInPage = `
	<h2>You're logged in</h2>
  	<p>
	  <a href=${url('/protected')}>protected</a>
	  <a href=${url('/logout')}>logout</a>
	</p>`

  var notLoggedInPage = `
    <h2>Logged out</h2>	
    <p>You can try and visit <a href=${url('/protected')}>protected</a> but you won't be able to until you log in!</a>
    <p>PS. The email is 'admin@example.com', and the password is 'admin'</p>  
    <form action=${url('/login')} method=post>
      <label for=email>Email</label>
      <input type=text name=email>
      <label for=password>Password</label>
      <input type=password name=password>
      <button>Login</button>
    </form>
  `

  return {
    type: 'text/html; charset=utf8',
    status: 200,
    body: `
	<body>
		<h1>Login Demo</h1>
		${isLoggedIn ? loggedInPage : notLoggedInPage}
	<body>`
  }
}
