const express = require('express');
const routes = require('./routes');

const app = express();

const port = 3333;

routes(app);

app.listen(port, () => console.log(`🚀🚀 Server started port ${port}`));

module.exports = app;

