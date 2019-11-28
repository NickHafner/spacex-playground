const express = require('express')
const graphlHTTP = require('express-graphql')
const schema = require('./schema.js')
const cors = require('cors');
const app = express();

app.use(cors() );

app.use('/graphql', graphlHTTP({
    schema,
    graphiql: true
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));