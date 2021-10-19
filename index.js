import express from 'express';
import appSrc from './app.js';

const app = appSrc(express, bodyParser, createReadStream, crypto, http);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 4321)
