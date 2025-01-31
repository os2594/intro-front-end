//const express = require('express');
// const colors = require('colors');
const app = express(); // express is a function
const port = 3000;
import express from 'express';
import colors from 'colors';

//const data = require('./utils/songs');
import * as data from './utils/songs.js';

//const operations = require('./utils/operations');
import{sum, substract} from './utils/operations.js';


app.get('/', (req, res) => {
    res.send('<html><body>Hello desde server con express</body></html>');
});

app.get('/songs', (req, res) => {
    res.json(data.songs);
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`.rainbow);
    console.log(`El resultado de la suma de a + b es: `, sum(10, 5));
    console.log(`El resultado de la resta de a - b es: `, substract(10, 5));
});

