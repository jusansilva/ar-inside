import React from 'react';
var Dimensions = require('react-dimensions')


const width = Dimensions.width;
const height = Dimensions.height;

const style = {
    reset: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        width: width,
        height: height,
        fontFamily: 'Open Sans' + ', sans-serif',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: 100 + 'vh',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        position: 'relative'
    },

    firstContetn: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 80 + '%',
        height: 50 + '%',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 15,

    },
    secondContent: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 80 + '%',
        height: 50 + '%',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 15,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    firstCollumn: {
        textAlign: 'center',
        flex: 1 + ' auto',
        backgroundColor: '#58af9b',
        width: 25 + '%',
        height: 100 + '%',
        borderRadius: 15 + 'px ' + 0 + " " + 0 + " " + 15 + "px"
    },
    secondCollumn: {
        textAlign: 'center',
        flex: 2 + ' auto'
    },
    title: {
        marginTop: 25 + '%',
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        textTransformer: 'capitalize'
    },
    title2: {
        fontSize: 40,
        color: 'grey',
        fontWeight: 'bold',
        textTransformer: 'capitalize'
    },
    description: {
        fontSize: 18,
        fontWeight: 100,
        lineHeight: 1,
        color: '#fff'
    },
    description2: {
        fontSize: 18,
        fontWeight: 100,
        lineHeight: 0,
        color: '#grey'
    },
    btn: {
        borderRadius: 15,
        color: 'black',
        width: 30 + "%",
        height: 9 + "%",
        marginTop: 5,
    },
    btn2: {
        borderRadius: 15,
        color: 'black',
        width: 100,
        height: 35,
        marginTop: 5,

    },
    input: {
        padding: 5,
        margin: 5,
        width: 60 + '%'
    }
}

const Cadastrar = (props) => {

    const theme = style;
    return (
        <div style={theme.reset}>
             <head>
                <title>{props.title}</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <script src="https://unpkg.com/react@latest/umd/react.development.js" crossorigin="anonymous"></script>
                <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js" crossorigin="anonymous"></script>
                <script src="https://unpkg.com/babel-standalone@latest/babel.min.js" crossorigin="anonymous"></script>
                {/* Fonts to support Material Design  */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                {/* Icons to support Material Design  */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;1,700&display=swap" rel="stylesheet"></link>
            </head>
            <div className="container" style={theme.container}>
                <div className="contentFirst" style={theme.firstContetn}>
                    <div className="first-colum" style={theme.firstCollumn}>
                        <h2 className="title" style={theme.title}>Manager</h2>
                        <p className="description" style={theme.description}>Você já tem um usuário?</p>
                        <p className="description" style={theme.description}>Logue aqui</p>
                        <button className="btn" onClick={() => setCount(1)} style={theme.btn}><a href="/auth/login" style={{textDecoration: 'none', textDecorationColor: 'black'}}>Logar</a></button>
                    </div>
                    <div className="second-colum" style={theme.secondCollumn}>
                        <h2 className="title" style={theme.title2}>Criar uma Conta</h2>
                        <p className="description" style={theme.description2}>Cadastre com seu email</p>
                        <form action="auth/registrar" className="form" style={theme.form}>
                            <input type="text" className="name" placeholder="digite seu nome" style={theme.input} />
                            <input type="email" className="email" placeholder="digite seu email" style={theme.input} />
                            <input type="password" className="password" placeholder="digite sua Senha" style={theme.input} />
                            <input type="password" className="passwordconfirm" placeholder="Confirme sua senha" style={theme.input} />
                            <button className="btn" style={theme.btn2}>Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;
