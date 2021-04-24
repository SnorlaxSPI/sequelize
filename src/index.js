const express = require('express');

const app = express();

//app.use(bodyParser.json());
app.use(express.json());

const port = 3333;

app.get('/teste', (req, res) => {
  res.status(200)
  res.send({ message: 'Welcome to API'});
});

app.listen(port, () => console.log(`🚀🚀 Server started port ${port}`));

module.exports = app;

