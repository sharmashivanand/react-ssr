import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home/Home';

export default () => {
    const content = renderToString(<Home />);
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Boo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="client.js" defer></script>
    </head>
    <body id="root"><div id="App">${content}</div></body>
    </html>`;
}
