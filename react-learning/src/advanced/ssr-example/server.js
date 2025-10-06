import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
function App(){
    return <h1> Message from the Server Side React</h1>;
}
app.get('/', (req, res) => {
    const html = ReactDOMServer.renderToString(<App />);
    res.send(`
    <!DOCTYPE html><html><body>${html}  </body></html>
    `);
});
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));