import * as THREE from 'three';


import { OrbitControls } from '/three.js/OrbitControls.js';
import { GLTFLoader } from '/three.js/GLTFLoader.js';
import { RoomEnvironment } from '/three.js/RoomEnvironment.js';

let camera, scene, renderer;
let cameraControls;
let ambientLight, light, light2, light3;



init();
render();


function init() {




    const container = document.createElement('div');
    document.getElementById("Viewer").appendChild(container);

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const material = new THREE.MeshStandardMaterial();
    const loader = new GLTFLoader();
    // CAMERA
    camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 100;
    camera.position.y = 25;
    camera.position.x = 25

      // scene itself
      scene = new THREE.Scene();

    // LIGHTS
    const ambientLight = new THREE.AmbientLight( 0xffffff, 1.2);
    scene.add( ambientLight );

    light = new THREE.DirectionalLight(0xFFFFFF, 1.3 );
    light.position.set(0.32, 0.39, -10);
    scene.add( light );

    const pointLight = new THREE.PointLight(0xffffff, 1);
    camera.add(pointLight);

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setSize(canvasWidth, canvasHeight);
    container.appendChild(renderer.domElement);
    renderer.outputEncoding = THREE.sRGBEncoding;


    // EVENTS
    window.addEventListener('resize', onWindowResize);

    // CONTROLS
    cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.addEventListener('change', render);

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    loader.load(
        // resource URL
        '/3D/encefalo/Pruebas.gltf',
        // called when the resource is loaded
        function (gltf) {

            scene.add(gltf.scene);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );


  
    
    const onProgress = function (xhr) {

        if (xhr.lengthComputable) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');

        }

    };

}

function onWindowResize() {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize(canvasWidth, canvasHeight);

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();


