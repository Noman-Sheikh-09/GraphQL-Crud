var mongoose = require('mongoose');

function Connection() {
  mongoose.connect(
    `mongodb+srv://NomanXheikh:myGql-09@gql.ds8rb4j.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("Connected with Database")
      }
    }
  )
}
module.exports = Connection;