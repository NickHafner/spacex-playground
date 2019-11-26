const express = require('express')
const graphlHTTP = require('express-graphql')
const schema = require('./schema.js')

const app = express();

app.use('/graphql', graphlHTTP({
    schema,
    graphiql: true
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));