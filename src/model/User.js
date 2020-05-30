const connect = require('../database');

const User = (req, res) => {
    function create(data){
        let sql = "INSERT INT user(name, email, password, token, ativo) VALUES ?";
        let values = [data.name, data.email, data.password, data.token, 0];

        connect.query(sql, [values], function(error, result, fields){
            if(error) return res.status(400).send({erorr: 'Ouve um erro ao cadastras usuário'});
            return res.send({erorr: 'Usuário cadastrado com sucesso'});
            connect.end();
        })
    }

    function findOne(data){
        let sql = `SELECT * FROM  user where ${data.key} = ${data.value} `;
        let values = [data.name, data.email, data.password, data.token, 0];
    }
}

module.exports = User;