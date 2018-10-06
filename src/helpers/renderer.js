import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';


export default () => {
    
    const content = renderToString(
        <StaticRouter context={{}}>
            <Routes />
        </StaticRouter>
    );

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
