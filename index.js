import express from 'express';
import bodyParser from 'body-parser';
import {createReadStream} from 'fs';
import crypto from 'crypto';
import http from 'http';
import m from 'mongoose';
import UserModel from './models/user.js';
import puppeteer from 'puppeteer';

import appSrc from './app.js';

const User = UserModel(m);
const app = appSrc(express, bodyParser, createReadStream, crypto, http, m, User, puppeteer);

app.listen(process.env.PORT)
