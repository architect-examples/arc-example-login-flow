let arc = require('@architect/functions')

async function route(request) {
  return {
    session: {},
    location: '/'
  }
}

exports.handler = arc.http.async(route)
