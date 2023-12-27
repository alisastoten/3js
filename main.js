import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0xffedfc);

var boxGeometry = new THREE.BoxGeometry(3, 1.5, 0.4);
var boxMaterial = new THREE.MeshStandardMaterial({ color: 0xd962c5 });
var box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(0, 1, 0);
scene.add(box);

camera.position.set(2, 2.5, 4);
camera.lookAt(scene.position); 

var light = new THREE.PointLight(0xe6a3da, 3, 100);
light.position.set(0, 2, 2);
scene.add(light);

var directionalLight = new THREE.DirectionalLight(0xd672c5, 0.5);
directionalLight.position.set(-5, 0, 2);
scene.add(directionalLight);

var animate = function () {
    requestAnimationFrame(animate);
    box.position.y = 1 + 0.1 * Math.sin(Date.now() * 0.002);
    renderer.render(scene, camera);
};

animate();
