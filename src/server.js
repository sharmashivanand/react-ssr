import express from 'express';
import renderer from './helpers/renderer.js'

const server = express();
server.use(express.static('public'))
server.get('*', (req, res) => {

    //console.dir(req);
    //console.log('========================================================================');
    //console.log('========================================================================');
    res.send(renderer(req));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
