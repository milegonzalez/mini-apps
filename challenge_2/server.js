const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
  res.send('Hello World!');
})

app.post('/postJSON', function(req, res) {
  console.log('this is req.body', req.body);

  let recursiveFunc = function (nodes) {
    let thread = [];

    const recursive = function (node) {
      for (var i in node) {
        if (Array.isArray(node[i])) {
          for (var j = 0; j < node[i].length; j++) {
            recursive(node[i][j]);
          }
        } else if (typeof node[i] === 'number') {
          thread.push(node[i] + '<br/>');
        } else {
          thread.push(node[i]);
        }
      }
    }
    var obj = JSON.parse(nodes);
    recursive(obj)
    let joinedThread = thread.join(",")
    return joinedThread;
  }

  res.send(recursiveFunc(req.body.data))
  res.status(200)
});


app.listen(port, function() {
  console.log( `listening on port ${port}!`);
});