import React from 'react';
import Dimension from 'react-dimensions';

const width = Dimension.width;
const height = Dimension.height;


const GoAr = (props) => {

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
                <script src="https://aframe.io/releases/0.6.1/aframe.min.js"> </script>
                <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"> </script>

            </head>
            <body style={{ margin: 0, overflow: 'hidden' }}>
                <a-scene embedded arjs='sourceType: webcam;'>

                    <a-marker preset='hiro'>
                        <a-assets>
                            <a-asset-item id="carro-obj" src="/obj/carro/bugatti.obj"></a-asset-item>
                            <a-asset-item id="carro-mtl" src="/obj/carro/bugatti.mtl"></a-asset-item>
                        </a-assets>
                        <a-entity obj-model="obj: #carro-obj; mtl: #carro-mtl"></a-entity>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </body >
        </>
    );
}

module.exports = GoAr;