// ThreeApp.js
console.log( "Mounting ThreeApp.js..." );

import React from "react";
import * as THREE from 'three';

function init() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x25884 } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    camera.position.z = 5;

    var render = function () {

        requestAnimationFrame( render );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        renderer.render( scene, camera );

    };

    render();

}

window.onload = init;

// eof
