const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name:"xyz",
  fields: {
    codeImprove: {
      type: new GraphQLList(userType),
      resolve(parent, args) {
        let data = [
          {
            id: 1,
            name: "coder",
            email: "coder@gmail.com",
            phone: 03120000000,
          },
          {
            id: 2,
            name: "test",
            email: "test@gmail.com",
            phone: 03110000000,
          },
        ];
        return data;
      },
    },
  },
});
module.exports = new GraphQLSchema({ query: RootQuery });
