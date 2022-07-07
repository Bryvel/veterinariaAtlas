import * as THREE from 'three';


import { OrbitControls } from '/three.js/OrbitControls.js';
import { GLTFLoader } from '/three.js/GLTFLoader.js';
import { CSS2DRenderer, CSS2DObject } from '/three.js/CSS2DRenderer.js';



let camera, scene, renderer, labelRenderer;
let cameraControls;
const container = document.createElement('div');
document.getElementById("Viewer").appendChild(container);

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const loader = new GLTFLoader();

init();
render();

function init() {

    // CAMERA
    camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    camera.position.y = 25;
    camera.position.x = 25

    // scene itself
    scene = new THREE.Scene();

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.7);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1.40);
    light.position.set(0.32, 0.39, -10);
    scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    camera.add(pointLight);

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.physicallyCorrectLights = true
    renderer.shadowMap.enabled = true
    renderer.toneMappingExposure = 1;
    renderer.setSize(canvasWidth, canvasHeight);
    container.appendChild(renderer.domElement);
    renderer.outputEncoding = THREE.sRGBEncoding;

    labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.domElement.style.position = 'absolute'
    labelRenderer.domElement.style.top = '0px'
    labelRenderer.domElement.style.pointerEvents = 'none'
    container.appendChild(labelRenderer.domElement)



    // EVENTS
    window.addEventListener('resize', onWindowResize);

    // CONTROLS
    cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.addEventListener('change', render);
    cameraControls.minDistance = 50;
    cameraControls.maxDistance = 150;

}

function onWindowResize() {

    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    renderer.setSize(canvasWidth, canvasHeight);

    labelRenderer.setSize(canvasWidth, canvasHeight);

    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    render();


}

function render() {

    labelRenderer.render(scene, camera);
    renderer.render(scene, camera);


}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
};

const loader3D = new Vue({
    el: "#controlador3D",
    data: {
        organo: "",
        modelo: ""
    },
    mounted() {
        this.organo = this.obtenerParametroRuta("organo")
        this.modelo = this.obtenerParametroRuta("modelo")
        this._charge3D(this.organo, this.modelo);


    },

    methods: {
        _chargeData: function (organo, modelo) {
            this.organo = organo;
            this.modelo = modelo;

        },
        _charge3D: async function (organo, modelo) {
            let annotations = {}
            loader.load(
                // resource URL
                '/3D/' + organo + '/Modelos/' + modelo + '.gltf',
                // called when the resource is loaded
                function (gltf) {


                   
                    scene.add(gltf.scene)

                    
                

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
                   const labelDownload = new XMLHttpRequest()
                   labelDownload.open('GET', '/3D/' + organo + '/data/' + modelo + '.json')
                   labelDownload.onreadystatechange = function() {
                        if (this.readyState ===4 ) {
                            annotations = JSON.parse(labelDownload.responseText)
                            console.log(annotations)
                            Object.keys(annotations).forEach((a) =>{
                                const labelDiv = document.createElement('div');
                                labelDiv.className = 'label '+annotations[a].Color;
                                labelDiv.textContent = annotations[a].label;
                                labelDiv.style.marginTop = '-1em';
            
                                const parteLabel = new CSS2DObject(labelDiv);
                                parteLabel.position.set(annotations[a].Pos.x,annotations[a].Pos.y, annotations[a].Pos.z);
                                scene.add(parteLabel);
                                
                            })
        
                        }
                    };
                    labelDownload.send()

            animate();

        },
      
        obtenerParametroRuta: function (nombreParametro) {
            let result = "";
            let tmp = [];
            let items = location.search.substr(1).split("&");
            for (let index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === nombreParametro) result = decodeURIComponent(tmp[1]);
            }
            return result;
        },

    }

})






