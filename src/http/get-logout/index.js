let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = arc.http.async(route)

async function route(request) {
  return {
    session: {},
    location: url('/')
  }
}
