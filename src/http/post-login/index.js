let arc = require('@architect/functions')

async function route(request) {
  let isLoggedIn = request.body.email === 'admin@example.com' && request.body.password === 'admin'
  return {
    session: { isLoggedIn },
    location: isLoggedIn ? '/protected' : '/'
  }
}

exports.handler = arc.http.async(route)
