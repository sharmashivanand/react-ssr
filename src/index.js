import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from './client/components/Home/Home';
//const Home = require('./client/components/Home/Home').default;

const server = express();
server.use(express.static('public'))
server.get('/', (req, res) => {
    const content = renderToString(<Home />);
    const html =`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Boo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="bundle.js" defer></script>
    </head>
    <body id="root"><div id="App">${content}</div></body>
    </html>`;
    console.log(new Date() + ' ' + html);
    res.send(html);
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});