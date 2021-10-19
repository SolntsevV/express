const express = require('express')

const app = express()


app.all('/', (req, res) => {
  
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  });
  res.send('vitaly_solntsev');

});

app.listen(process.env.PORT);
