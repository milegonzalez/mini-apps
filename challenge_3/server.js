const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(bodyParser.json());