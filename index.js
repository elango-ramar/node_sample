const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'SUCCESS',
    body: 'App is running'
  });
});

app.listen(3000, () => {
  console.log('Application is running on port 3000');
});
