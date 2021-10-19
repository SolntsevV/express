import express from 'express';
import appSrc from './app.js';
import bodyParser from 'body-parser';
import createReadStream from 'fs';
import crypto from 'crypto';
import http from 'http';

const app = appSrc(express, bodyParser, createReadStream, crypto, http);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 4321)
