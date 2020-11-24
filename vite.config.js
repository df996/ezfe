module.exports = {
  entry: 'i2222ndex.html',
  port: 8899,
  //resolvers: [{
  //  alias (id) {
  //    console.log (id, arguments)
  //  }
  //}]
  resolvers: [
    {
      requestToFile (publicPath, root) {
        console.log ('-Request to file-----------------------------------------')
        console.log (publicPath, root)
        console.log ('---------------------------------------------------------')
      },

      alias (id) {
        console.log ('-Alias---------------------------------------------------')
        console.log (id)
        console.log ('---------------------------------------------------------')
      }
    }
  ]
}


//console.log (module)
