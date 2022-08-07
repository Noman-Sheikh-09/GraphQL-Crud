const { GraphQLString, GraphQLInt } = require("graphql");
const userType = require("../objectTypes/UserType");
const studentCollection = require("../StudentModal");
const statusType = require("../objectTypes/statusType");
module.exports.addStudent = {
  type: userType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    name:{type:GraphQLString},
    rollNo: { type: GraphQLInt},
    // class: { type: Grap}
  },
  resovle(parent, args) {
    const newStudent = new studentCollection({
      name: args.name,
      // rollNo: args.rollNo,
      // class:args.class
      email: args.email,
    });

    return newStudent;
  },
};

module.exports.updateStudent = {
  type: userType,
  ars: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    // rollNo: { type: GraphQLInt },
    // class: { type: GraphQLString },
  },

  resolve: async (parent, args) => {
    const _id = args.id;

    const updateObj = {
      name: args.name,
      rollNo: args.rollNo,
      email: args.email,
      // class:args.class
    };
    await studentCollection.findByIdAndUpdate(
      _id,
      updateObj,

      { new: true },
      // console.log("Document id:", _id),
      // console.log("Data is Updated:", updateObj),
      (err, data) => {
        console.log("Data is updated...Seccess:", data);
        // console.log("Error" , err);

        if (err) {
          return err;
        }
        console.log("Document is Deleted!! Successfully");
      }
    );
    return {
      success: true,
      message: "Seccessfully Deleted",
      err: "",
    };
  },
};
