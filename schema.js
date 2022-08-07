const graphql = require("graphql");

const { GraphQLObjectType, GraphQLSchema } = graphql;
const studentsList = require("./component/student/studentController/Query");

const {
  addStudent,
  updateStudent,
} = require("./component/student/studentController/Mutation");

const rootQuery = new GraphQLObjectType({
  name: "testing",
  fields:{
    studentsList: studentsList,
  },
});

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields:{
    addStudent: addStudent,
    updateStudent: updateStudent,
  },
});


module.exports = new GraphQLSchema({ query: rootQuery, mutation: mutation });
