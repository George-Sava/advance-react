import express from 'express';
import config from './config';
import serverRender from './renderers/server';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const initialContent = serverRender();
    res.render('index', {initialContent });
});

app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log('listening on port ' + config.port);
});