import express from 'express';
import renderer from './helpers/renderer.js'


const server = express();
server.use(express.static('public'))
server.get('/', (req, res) => {

    console.log(new Date());
    res.send(renderer());
});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});
