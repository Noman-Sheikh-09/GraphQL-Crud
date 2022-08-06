const express = require("express");
const app = express();
const PORT = 1000;
const { graphqlHTTP } = require("express-graphql");
const cors=require('cors');
const bodyParser=require('body-parser');



const Connection = require("./database/db");
app.use(bodyParser.urlencoded({extended:true,}));
app.use(bodyParser.json())

app.use(express.json());
const schema = require("./schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use(cors());

app.listen(PORT, () => {
  console.log("App Running on port 1000}");
});
Connection();
