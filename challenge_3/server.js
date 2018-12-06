const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const newUser = require('./database');


let newUserFunc = newUser.newUser;
let findInfo = newUser.findInfo

app.use(express.static('public'))


app.listen(port, () => console.log(`listening on port ${port}`))

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log(res.body);
  findInfo()
  res.send('Hello World');
});




app.post('/', function (req, res) {
  // console.log(req.body, 'this is req.body');
  if(req.body) {
      newUserFunc(req.body, null)
      res.sendStatus(200)
    }

})