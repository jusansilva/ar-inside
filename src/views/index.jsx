import React from 'react';
import Login from './login';
import Manager from './Manager';




const Index = (props) => {
    return (
        <>
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
            <Manager />

        </>
    );
}

module.exports = Index;