const Express = require('express');
const path = require('path');
const { createEngine } = require('express-react-views');


const app = new Express();

app.set('views','./views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.render('index', { name: 'John', title: 'Jusan Magno' });
});

app.get('/login', (req, res) =>{
    res.render('login', {title: 'Login'});
});

app.post('/logar', (req, res) => {

})

app.get('/cadastrar', (req, res) =>{
    res.render('cadastrar', {title: 'Cadastrar'});
});


app.get('/game', (req, res) => {
    res.render('game', {title: 'O local'})
})

app.listen(3000, () =>{
    console.log('Rodando');
})