const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/**-----------Middleware-----------**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

app.listen(PORT, () => {
  console.log('huzzah, listening on port', PORT);
});
