import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

const app = express();

app.get('/*', (req,res) => {
    const reactApp = renderToString(
        <h1>Server side rendered page</h1>
    );

    return res.send(`
        <html>
            <body>
                <div id="root">${reactApp}</div>
            </body>
        </html>

    `);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});