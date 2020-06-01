const Express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');
const bodyParse = require('body-parser');


const app = new Express();

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: false}))
// require('./controllers')(app);

app.set('views',__dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.render('index', { name: 'John', title: 'Jusan Magno' });
});



app.get('/ar-inside', (req, res) => {
    res.render('game', {title: 'Ar Inside'})
})

app.get('/ar-inside-box', (req, res) => {
    res.render('box', {title: 'Ar Inside Box'})
})

app.get('/marker.patt', (req, res) => {
    res.sendFile(__dirname + '/obj/mark/marker.patt');
})

app.get('/covid.obj', (req, res) => {
    res.sendFile(__dirname + '/obj/carro/covid.obj');
})

app.get('/covid.mlt', (req, res) => {
    res.sendFile(__dirname + '/obj/carro/covid.mtl');
})

app.listen(3000, () =>{
    console.log('Rodando');
})