let arc = require("@architect/functions")
let url = arc.http.helpers.url

// Callback style works too
// function index(req, res) {
//   var header = `<h1>Login Demo</h1>`
//   var protec = `<a href=${url('/protected')}>protected</a>`
//   var logout = `<a href=${url('/logout')}>logout</a>`
//   var nav = `<p>${protec} | ${logout}</p>`

//   var form = `
//     <form action=${url('/login')} method=post>
//       <label for=email>Email</label>
//       <input type=text name=email>
//       <label for=password>Password</label>
//       <input type=password name=password>
//       <button>Login</button>
//     </form>
//   `

//   res({
//     html: `${header} ${req.session.isLoggedIn? nav : form}`
//   })
// }

// exports.handler = arc.http(index)

exports.handler = async function http(req) {
	let state = await arc.http.session.read(req)
	let isLoggedIn = !!state.isLoggedIn

	var header = `<h1>Login Demo</h1>`
	var protec = `<a href=${url("/protected")}>protected</a>`
	var logout = `<a href=${url("/logout")}>logout</a>`
	var nav = `<p>${protec} | ${logout}</p>`

	var form = `
    <form action=${url("/login")} method=post>
      <label for=email>Email</label>
      <input type=text name=email>
      <label for=password>Password</label>
      <input type=password name=password>
      <button>Login</button>
    </form>
  `

	return {
		type: "text/html",
		body: `${header} ${isLoggedIn ? nav : form}`
	}
}
