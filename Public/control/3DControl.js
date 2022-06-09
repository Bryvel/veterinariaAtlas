import * as THREE from 'three';

        import { MTLLoader } from '/three.js/MTLLoader.js';
        import { OBJLoader } from '/three.js/OBJLoader.js';
        import { OrbitControls } from '/three.js/OrbitControls.js';
        import { TeapotGeometry } from '/three.js/TeapotGeometry.js';

        let camera, scene, renderer;
        let cameraControls;
        let ambientLight, light, light2, light3;
        let tess = - 1;


        init();
        render();
        function init() {

            const container = document.createElement('div');
            document.getElementById("3DViewer").appendChild(container);

            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;

            // CAMERA
            camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 2000);
            camera.position.z = 100;
            camera.position.y = 25;
            camera.position.x = 25
            

            // LIGHTS
            ambientLight = new THREE.AmbientLight(0x333333);

            light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
            light.position.set(0.32, 0.39, -10);
            light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
            light2.position.set(0.32, 0.39, 10);
            light3 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
            light3.position.set(0.32,- 0.39, 10);

            // RENDERER
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(canvasWidth, canvasHeight);
            renderer.outputEncoding = THREE.sRGBEncoding;
            container.appendChild(renderer.domElement);

            // EVENTS
            window.addEventListener('resize', onWindowResize);  

            // CONTROLS
            cameraControls = new OrbitControls(camera, renderer.domElement);
            cameraControls.addEventListener('change', render);




            // scene itself
            scene = new THREE.Scene();
            scene.add(ambientLight);
            scene.add(light,light2,light3);
            const onProgress = function (xhr) {

                if (xhr.lengthComputable) {

                    const percentComplete = xhr.loaded / xhr.total * 100;
                    console.log(Math.round(percentComplete, 2) + '% downloaded');

                }

            };

            new MTLLoader()
                .setPath('/3D/encefalo/')
                .load('Pruebas2.mtl', function (materials) {

                    materials.preload();

                    new OBJLoader()
                        .setMaterials(materials)
                        .setPath('/3D/encefalo/')
                        .load('Pruebas2.obj', function (object) {

                            object.position.y = 0;
                            scene.add(object);

                        }, onProgress);

                });
        }

        function onWindowResize() {

            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;

            renderer.setSize(canvasWidth, canvasHeight);

            camera.aspect = canvasWidth / canvasHeight;
            camera.updateProjectionMatrix();

            render();

        }

            function render(){

                renderer.render( scene, camera );

            }

			function animate() {
				requestAnimationFrame( animate );
    				renderer.render( scene, camera );
			};

			animate();



