import express from 'express';
const app = express();

import appSrc from './app.js';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 4321)
