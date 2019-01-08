let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function route(request) {
  let session = await arc.http.session.read(request)
  session.isLoggedIn = false
  let cookie = await arc.http.session.write(session)
  return {
    cookie,
    status: 302,
    location: url('/')
  }
}
