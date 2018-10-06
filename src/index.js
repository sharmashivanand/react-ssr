const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home/Home').default;

const server = express();

server.get('/', (req, res) => {
    const content = renderToString(<Home />);
    console.log(new Date() + ' ' + content);
    res.send(content);
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});