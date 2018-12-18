let arc = require('@architect/functions')

exports.handler = async function http(request) {
  let session = await arc.http.session.read(request)
  let isLoggedIn = request.body.email === 'admin@example.com' && request.body.password === 'admin'
  session.isLoggedIn = isLoggedIn
  const location = isLoggedIn ? '/' : '/login'
  let cookie = await arc.http.session.write(session)
  return {
    cookie,
    status: 302,
    location
  }
}
