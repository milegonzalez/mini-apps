// first variables defined
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// apps . use
app.use(express.static('client/dist'));
app.use(bodyParser.json());

// routes
// app.get('/', (req, res) => res.send('Hello World!'))


// app listen
app.listen(port, () => console.log(`App listening on port ${port}!`))