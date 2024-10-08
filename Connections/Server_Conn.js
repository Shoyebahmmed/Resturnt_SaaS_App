const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;