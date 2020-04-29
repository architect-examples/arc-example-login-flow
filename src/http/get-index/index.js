let arc = require('@architect/functions')

async function route(req) {

  var loggedInPage = `
	<h2>You're logged in</h2>
  	<p>
	  <a href=/protected>protected</a>
	  <a href=/logout>logout</a>
	</p>`

  var notLoggedInPage = `
    <h2>Logged out</h2>	
    <p>You can try and visit <a href=/protected>protected</a> but you won't be able to until you log in!</a>
    <p>PS. The email is 'admin@example.com', and the password is 'admin'</p>  
    <form action=/login method=post>
      <label for=email>Email</label>
      <input type=text name=email>
      <label for=password>Password</label>
      <input type=password name=password>
      <button>Login</button>
    </form>
  `

  return {
    html: `
	<body>
		<h1>Login Demo</h1>
		${req.session.isLoggedIn ? loggedInPage : notLoggedInPage}
	<body>`
  }
}

exports.handler = arc.http.async(route)
