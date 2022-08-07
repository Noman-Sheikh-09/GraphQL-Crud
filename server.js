const express = require("express");
const PORT = 1000;
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const bodyParser = require("body-parser");
const schema = require("./schema");
const Connection = require("./database/db");
const studentCollection= require("./component/student/StudentModal");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

Connection();
app.get("/",async(req,res)=>{
  const data = await studentCollection.find({});
  res.send(data);
  // console.log("data get ins server.js",data);
})


app.listen(PORT, () => {
  console.log("App Running on port 1000}");
});

