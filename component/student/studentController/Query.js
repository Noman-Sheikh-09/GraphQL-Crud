const {  GraphQLList } = require("graphql");
const studentCollection = require("../StudentModal");
const userType = require("../objectTypes/UserType");

const studentsList = {
  type: new GraphQLList(userType),
  resolve(parent, args) {
    let data = studentCollection.find({});
    return data;
  },
};

module.exports = studentsList;
