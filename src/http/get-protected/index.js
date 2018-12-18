let arc = require('@architect/functions')
let url = arc.http.helpers.url

async function requireLogin(request) {
  let state = await arc.http.session.read(request)

  if (!state.isLoggedIn) {
    console.log(`Attempt to access protected page without logging in!`)
    // Return a response, so middleware processing ends
    return {
      status: 302,
      location: url(`/`)
    }
  }
  console.log(`We're logged in`)
  // return nothing, so middleware processing continues
}

async function showProtectedPage(request) {
  console.log(`Showing dashboard`)

  let protectedPage = `
	<body>
		<h1>Dashboard</h1>
		<p>Only logged in users can visit this page!</p>
		<p><a href="${url('/logout')}">logout</a></p>
	</body>`
  return respond.makeResponse(protectedPage)
}

exports.handler = arc.middleware(requireLogin, showProtectedPage)
