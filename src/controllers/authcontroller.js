const express = require('express');
const bcrypt = require('bcryptjs');
const token = require('jsonwebtoken');

const authConfig = require('../../config/auth.json')

const User = require('../models/User');

const router = express.Router();

function gerarToken(param){
    return token.sign({ param}, authConfig.secret, {
        expiresIn: 86400,
    }) 
}

router.post('/registrar', async (req, res) => {
    const { email } = req.body;

    try{
        if(await User.findOne({email})){
         return   res.status(400).send({ error: "Usuário já existe"})
        }
        const user = await User.create(req.body);
        user.password = undefined;
        return res.send({ user, token: gerarToken(user.id) });
    }catch(err){
        console.log(err)
        return res.status(400).send('Falha ao criar usuário');
        
    }
});

router.post('/autenticar', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user){
        return res.status(400).send('usuário não existe');
    }

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send('error: usuario invalido')
    }

    user.password = undefined;

    
    return res.send({user, token: gerarToken(user.id) });
})

router.post('/esqueci-senha', (req, res) => {

});

module.exports = app => app.use('/auth', router);