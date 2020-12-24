const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/assets', express.static('assets'));
app.use('/fonts', express.static('fonts'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('App listening on: http://localhost:3000');
});
