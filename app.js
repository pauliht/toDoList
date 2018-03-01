let express = require('express');
const flexjson = require('jsonflex')();
const compression = require('compression');

let app = express();

app.use(compression());
app.use(flexjson);
app.use(express.static('www'));

app.listen(4000, function () {
  console.log('Webserver listening on port 4000');
});
