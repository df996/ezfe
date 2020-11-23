module.exports = {
  entry: 'i2222ndex.html',
  port: 8899,
  resolvers: [{
    alias (id) {
      console.log (id, arguments)
    }
  }]
}


//console.log (module)
