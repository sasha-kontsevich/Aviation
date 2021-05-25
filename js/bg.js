let LOADING_MANAGER;
let IMAGE_LOADER;
let TEXTURE_LOADER;
let OBJ_LOADER;
let MTL_LOADER;
let TEXTURE;
let OBJS_TO_INTERSECT = [];


class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            // this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = undefined;
        }
        scene.traverse(function(child) {
            if (child instanceof THREE.Mesh && child.material.emissive) {
                child.material.emissive.setHex(0x00000);
            }
        });
        selectionParticlesSystem.position.set(0, -20, 0);

        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children, true);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            // console.log(this.pickedObject.name)
            var meshAircraft = this.pickedObject;
            while (meshAircraft.name != 'mesh') {
                meshAircraft = meshAircraft.parent;
                if (meshAircraft.name == "AircraftsScene") break;
            }
            if (meshAircraft.parent && meshAircraft.parent.name != 'text') {
                if (selectionParticlesSystem) {
                    // selectionParticlesSystem.position.set(meshAircraft.position.x, meshAircraft.position.y + 5, meshAircraft.position.z);
                    console.log(selectionParticlesSystem.position);

                }

                // scene.getObjectByName(meshAircraft.parent.name).getObjectByName('mesh').traverse(function(child) {
                //     if (child instanceof THREE.Mesh && child.material.emissive) {
                //         child.material.emissive.setHex(0xFF2211);
                //     }
                // });
            }
            // save its color
            // this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
            // set its emissive color to flashing red/yellow
            // this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000);
        }
    }
}

const pickPosition = { x: 0, y: 0 };
const pickHelper = new PickHelper();
clearPickPosition();

var scene = new THREE.Scene();
scene.name = "AircraftsScene"
var camera = new THREE.PerspectiveCamera(40, getWidth() / getHeight(), 0.1, 4000);
var kFOV = getHeight() / getWidth();
var renderer = new THREE.WebGLRenderer({ antialias: true });
scene.background = new THREE.Color('white');
renderer.setSize(getWidth(), getHeight());
// renderer.toneMapping = THREE.ReinhardToneMapping;
document.body.appendChild(renderer.domElement);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

window.addEventListener('resize', onWindowResize, false);

//COMPOSER
composer = new THREE.EffectComposer(renderer);

//PASSES
const renderScene = new THREE.RenderPass(scene, camera);
// renderScene.renderToScreen = true;
composer.addPass(renderScene);



// // const effectBloom = new THREE.BloomPass(0.5);

// effectSobel = new THREE.ShaderPass(THREE.SobelOperatorShader);
// effectSobel.uniforms['resolution'].value.x = window.innerWidth * window.devicePixelRatio * 3;
// effectSobel.uniforms['resolution'].value.y = window.innerHeight * window.devicePixelRatio * 3;
// // effectSobel.renderToScreen = true;
// composer.addPass(effectSobel);


// // VignetteShader = new THREE.ShaderPass(THREE.VignetteShader);
// // VignetteShader.renderToScreen = true;
// // composer.addPass(VignetteShader);

// ColorCorrectionShader = new THREE.ShaderPass(THREE.ColorCorrectionShader);
// // ColorCorrectionShader.renderToScreen = true;
// composer.addPass(ColorCorrectionShader);
// composer.addPass(renderScene);



FilmShader = new THREE.ShaderPass(THREE.FilmShader);
FilmShader.uniforms['grayscale'].value = 0;
FilmShader.renderToScreen = true;
composer.addPass(FilmShader);



textScale = .06;
txtPow = 1.05;

function onWindowResize() {
    windowHalfX = getWidth() / 2;
    windowHalfY = getHeight() / 2;

    camera.aspect = getWidth() / getHeight();
    camera.updateProjectionMatrix();

    renderer.setSize(getWidth(), getHeight());
    composer.setSize(getWidth(), getHeight());

    if (scene.getObjectByName('text')) {
        scale = textScale * Math.pow(getWidth() / getHeight(), 1);
        scene.getObjectByName('text').getObjectByName('mesh').scale.set(scale, scale, scale);
    }
    // camera.fov = 40 * kFOV * getHeight() / getWidth();
    console.log(camera.fov)
}

var clock = new THREE.Clock();
var time = 0;


/*-- default camera position ----*/
camera.position.set(0, 7, -10);
camera.rotation.x = Math.PI / 180 * 10;

/*--- animation ----*/
var render = function() {
    composer.render();

    pickHelper.pick(pickPosition, scene, camera, time);
    requestAnimationFrame(render);
    animate();
    // renderer.render(scene, camera);
};

var animate = function() {
    time += clock.getDelta();
    particleSystem1.position.y += Math.sin(time) * 0.02;
    particleSystem2.position.y -= Math.sin(time * 0.8) * 0.05;
    particleSystem3.position.y += Math.sin(time * 0.8) * 0.02;
    particleSystem4.position.y -= Math.sin(time) * 0.05;
    selectionParticlesSystem.rotation.y += 0.005;

};

/*--- lights ----*/
var light2 = new THREE.AmbientLight(0x575960);
scene.add(light2);

const light = new THREE.DirectionalLight(0xffffff, 0.7);
light.castShadow = true;
light.position.set(-20, 30, 10);
scene.add(light);


// --- shadows ---
//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default
light.shadow.camera.width = 50; // default
light.shadow.camera.height = 50; // default

/*--- objects ----*/

LOADING_MANAGER = new THREE.LoadingManager();
IMAGE_LOADER = new THREE.ImageLoader(LOADING_MANAGER);
TEXTURE_LOADER = new THREE.TextureLoader(LOADING_MANAGER);
OBJ_LOADER = new THREE.OBJLoader(LOADING_MANAGER);
MTL_LOADER = new THREE.MTLLoader(LOADING_MANAGER);

const shadowTexture = TEXTURE_LOADER.load('models/textures/shadow1.png');
const sphereShadowBases = [];

/*--- plane ---*/
geometry = new THREE.PlaneGeometry(5, 20, 32);
const checker = TEXTURE_LOADER.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
checker.wrapS = THREE.RepeatWrapping;
checker.wrapT = THREE.RepeatWrapping;
checker.magFilter = THREE.NearestFilter;
const repeats = 100;
checker.repeat.set(repeats, repeats);
material = new THREE.MeshBasicMaterial({ color: 0xeeeeee, side: THREE.DoubleSide });
plane = new THREE.Mesh(geometry, material);
plane.rotation.set(Math.PI / -2, 0, 0);
plane.position.y = 0;
plane.scale.set(200, 200, 200);
plane.receiveShadow = true;
plane.castShadow = true;
plane.name = 'plane';
scene.add(plane);

let modelsOffsetZ = 30;
//Corsair
OBJ_LOADER.load('models/corsair.obj', (object) => {
    scale = 0.002;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, -Math.PI / 2 + Math.PI / 180 * 30, 0);
    object.position.set(-40, 0, 0 + modelsOffsetZ);
    addObject(object, 8, 'corsair');
});
//h_33
OBJ_LOADER.load('models/h_33/h_33.obj', (object) => {
    scale = 0.008;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, Math.PI / 2 + Math.PI / 180 * 30, 0);
    object.position.set(150, 7, 100 + modelsOffsetZ);
    addObject(object, 8, 'h_33');
});
//bf_109
OBJ_LOADER.load('models/bf_109/bf_109.obj', (object) => {
    scale = 6.6;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, Math.PI / 180 * 260, 0);
    object.position.set(150, 0, 160 + modelsOffsetZ);
    addObject(object, 8, 'bf_109');
});
//bombardier
OBJ_LOADER.load('models/bombardier/bombardier.obj', (object) => {
    scale = .12;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, Math.PI / 180 * 240, 0);
    object.position.set(160, 0, 240 + modelsOffsetZ);
    // object.name = 'bombardier';
    addObject(object, 8, 'bombardier');
    // scene.add(object)
});
//airship
OBJ_LOADER.load('models/airship/airship.obj', (object) => {
    scale = .08;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, Math.PI / 180 * 240, 0);
    object.position.set(450, 100, 0 + modelsOffsetZ);
    addObject(object, 8, 'airship');
});
//Breguet_14
OBJ_LOADER.load('models/Breguet_14/Breguet_14.obj', (object) => {
    scale = .45;
    object.scale.set(scale, scale, scale)
    object.rotation.set(0, Math.PI / 180 * 120 + Math.PI / 180 * 30, 0);
    object.position.set(120, 0, 50 + modelsOffsetZ);
    addObject(object, 8, 'Breguet_14');
});

//Su-34
MTL_LOADER.load('models/su-34/Su_34.mtl', (mtl) => {
    mtl.preload();
    OBJ_LOADER.setMaterials(mtl);
    OBJ_LOADER.load('models/su-34/3d-model.obj', (object) => {
        scale = 5;
        object.scale.set(scale, scale, scale)
        object.rotation.set(0, -Math.PI / 180 * 45, 0);
        object.position.set(40, 0, -10 + modelsOffsetZ);
        addObject(object, 11, 'Su-34');
    });
});

//текст
OBJ_LOADER.load('models/greetings.obj', (object) => {
    object.scale.set(textScale, textScale, textScale)
    object.rotation.set(0.2, 0, 0);
    object.position.set(0, 55, -150 + modelsOffsetZ);
    object.name = 'mesh';
    addObject(object, 8, 'text');
    shadow = scene.getObjectByName('text').getObjectByName('shadow');
    scene.getObjectByName('text').getObjectByName('shadow').scale.set(12, 2, 12);
    if (scene.getObjectByName('text')) {
        scale = textScale * Math.pow(getWidth() / getHeight(), txtPow);
        scene.getObjectByName('text').getObjectByName('mesh').scale.set(scale, scale, scale);
    }
});



//ch_146
MTL_LOADER.load('models/ch_146/ch_146.mtl', (mtl) => {
    mtl.preload();
    OBJ_LOADER.setMaterials(mtl);
    OBJ_LOADER.load('models/ch_146/ch_146.obj', (object) => {
        scale = 0.1;
        object.scale.set(scale, scale, scale)
        object.rotation.set(0, Math.PI / 180 * -60, 0);
        object.position.set(700, 50, -400 + modelsOffsetZ);
        object.name = 'mesh';
        // object.position.set(-0, 30, -50);
        addObject(object, 8, 'ch_146');
    });
});

//F-15
MTL_LOADER.load('models/f-15/F_15.mtl', (mtl) => {
    mtl.preload();
    OBJ_LOADER.setMaterials(mtl);
    OBJ_LOADER.load('models/f-15/F_15.obj', (object) => {
        scale = 8;
        object.scale.set(scale, scale, scale)
        object.rotation.set(0, Math.PI / 180 * 60, 0);
        object.position.set(-450, 40, -330 + modelsOffsetZ);
        object.name = 'mesh';
        // object.position.set(-0, 30, -50);
        addObject(object, 8, 'F-15');

        for (let i = 0; i < scene.children.length; i++) {
            if (scene.children[i].getObjectByName('mesh')) {
                OBJS_TO_INTERSECT[i] = scene.children[i];
            }
        }
    });
});



// particles
spss = 30;
var particles1 = new THREE.Geometry;
var particles2 = new THREE.Geometry;
var particles3 = new THREE.Geometry;
var particles4 = new THREE.Geometry;
var selectionParticles = new THREE.Geometry;
for (var p = 0; p < 500; p++) {
    var particle = new THREE.Vector3(Math.random() * 400 - 200, Math.random() * 200 - 100, Math.random() * 500 - 200);
    particles1.vertices.push(particle);
}
for (var p = 0; p < 500; p++) {
    var particle = new THREE.Vector3(Math.random() * 400 - 200, Math.random() * 200 - 100, Math.random() * 500 - 200);
    particles2.vertices.push(particle);
}
for (var p = 0; p < 100; p++) {
    var particle = new THREE.Vector3(Math.random() * 400 - 200, Math.random() * 200 - 100, Math.random() * 500 - 200);
    particles3.vertices.push(particle);
}
for (var p = 0; p < 100; p++) {
    var particle = new THREE.Vector3(Math.random() * 400 - 200, Math.random() * 200 - 100, Math.random() * 500 - 200);
    particles4.vertices.push(particle);
}
for (var p = 0; p < 200; p++) {
    var a = Math.random() * Math.PI * 2;
    var particle = new THREE.Vector3(spss * Math.cos(a), 0, spss * Math.sin(a));
    selectionParticles.vertices.push(particle);
}


var particleMaterial1 = new THREE.PointsMaterial({ color: 0x883333, size: 2 });
var particleMaterial2 = new THREE.PointsMaterial({ color: 0x333388, size: 2 });
var particleSystem1 = new THREE.Points(particles1, particleMaterial1);
var particleSystem2 = new THREE.Points(particles2, particleMaterial1);
var particleSystem3 = new THREE.Points(particles3, particleMaterial2);
var particleSystem4 = new THREE.Points(particles4, particleMaterial2);
var selectionParticlesSystem = new THREE.Points(selectionParticles, particleMaterial1);
selectionParticlesSystem.position.y = -20;

scene.add(particleSystem1);
scene.add(particleSystem2);
scene.add(particleSystem3);
scene.add(particleSystem4);
scene.add(selectionParticlesSystem);

renderer.domElement.addEventListener("click", function(evt) {
    console.log("Mouse is over " + evt.target);
});



render();

/*--- stats -----*/
// var stats = new Stats();
// stats.setMode(2);

// stats.domElement.style.position = 'fixed';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';

// document.body.appendChild(stats.domElement);

// setInterval(function() {
//     stats.begin();
//     stats.end();
// }, 1000 / 60);

/*-- scrolling functionality ---*/
previousOffset = pageYOffset;

var Align = window.onscroll = function(e) {
    var vertical_position = 0;
    if (pageYOffset) //usual
        vertical_position = pageYOffset;
    else if (document.documentElement.clientHeight) //ie
        vertical_position = document.documentElement.scrollTop;
    else if (document.body) //ie quirks
        vertical_position = document.body.scrollTop;
    delta = (vertical_position - previousOffset);

    setScene(vertical_position);

    // console.log(vertical_position)

    previousOffset = pageYOffset;
}

setScene();

function setScene(vertical_position) {
    start = 0;
    end = 1000;
    if (vertical_position <= end) {
        camera.position.z = vertical_position / 8;
        camera.rotation.x = Math.PI / 180 * 10;
        camera.rotation.z = 0
        camera.rotation.y = 0
    }

    start = 1000;
    end = 1300;
    if (vertical_position > start && vertical_position <= end) {
        camera.position.z = vertical_position / 8;
        camera.rotation.x = Math.PI / 180 * 10 * (1 - (vertical_position - start) / (end - start));
        camera.rotation.z = 0
    }

    start = 1300;
    end = 2000;
    if (start < vertical_position && vertical_position <= end) {
        camera.position.z = start / 8;
        camera.position.x = 0;
        camera.rotation.y = Math.PI / 180 * -90 * (0 + (vertical_position - start) / (end - start));
        camera.rotation.x = Math.PI / 180 * 20 * (0 + (vertical_position - start) / (end - start));
        camera.rotation.z = Math.PI / 180 * 20 * (0 + (vertical_position - start) / (end - start));
    }

    start = 2000;
    end = 3000;
    if (start < vertical_position) {
        camera.position.z = 1300 / 8;
        camera.position.x = -(vertical_position - start) / 10;
        camera.rotation.y = Math.PI / 180 * -90;
        camera.rotation.x = Math.PI / 180 * 0 * (1 + (vertical_position - start) / (end - start));
        camera.rotation.z = Math.PI / 180 * 0;
    }
    if (scene.getObjectByName('F-15')) {
        f15 = scene.getObjectByName('F-15');
        rotation = f15.getObjectByName('mesh').rotation;
        f15.position.set(vertical_position / 2 * Math.sin(rotation.y), 50, vertical_position / 2 * Math.cos(rotation.y));
    }
    if (scene.getObjectByName('ch_146')) {
        liner = scene.getObjectByName('ch_146');
        rotationliner = liner.getObjectByName('mesh').rotation;
        liner.position.set(vertical_position / 2 * Math.sin(rotationliner.y), 0, vertical_position / 2 * Math.cos(rotationliner.y));
    }


}

window.addEventListener('wheel', function(e) {
    // camera.position.z += e.deltaY / 10;


})

window.onload = function() {
    window.scrollTo(0, 10);
};

/*--- anchorlink button ----*/

/*$(function(){
  $('.button').click(function(b){
   b.preventDefault();
   var Target = $('.button').attr('href');
   var Y = $(Target).offset();
   $('html, body').stop().animate({
     scrollTop: Y.top
   }, 1200 );  
  });
  
  $('h1').animate({
    left:50
  });
  
}); */

// $(function() {
//     $('.button').click(function(b) {
//         b.preventDefault();
//         $('#more').velocity('scroll', 1700, 'easeOutCirc');
//     });
// });

function addObject(object, r = 1, name) {
    const planeSize = r;
    const shadowGeo = new THREE.PlaneGeometry(planeSize, planeSize);

    const base = new THREE.Object3D();
    if (name) {
        base.name = name;
    }
    scene.add(base);
    const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true, // so we can see the ground
        depthWrite: false, // so we don't have to sort
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = 0.05; // so we're above the ground slightly
    shadowMesh.position.x = object.position.x;
    shadowMesh.position.z = object.position.z;
    shadowMesh.rotation.x = Math.PI * -.5;
    const shadowSize = r;
    shadowMesh.scale.set(shadowSize, shadowSize, shadowSize);
    shadowMesh.name = 'shadow';
    object.name = 'mesh';
    base.add(shadowMesh);
    base.add(object);


}





function getCanvasRelativePosition(event) {
    const rect = renderer.domElement.getBoundingClientRect();

    return {
        x: (event.clientX - rect.left) * renderer.domElement.width / rect.width,
        y: (event.clientY - rect.top) * renderer.domElement.height / rect.height,
    };
}

function setPickPosition(event) {
    const pos = getCanvasRelativePosition(event);

    pickPosition.x = (pos.x / renderer.domElement.width) * 2 - 1;
    pickPosition.y = (pos.y / renderer.domElement.height) * -2 + 1; // note we flip Y
}

function clearPickPosition() {
    // unlike the mouse which always has a position
    // if the user stops touching the screen we want
    // to stop picking. For now we just pick a value
    // unlikely to pick something
    pickPosition.x = -100000;
    pickPosition.y = -100000;
}

window.addEventListener('mousemove', setPickPosition);
window.addEventListener('mouseout', clearPickPosition);
window.addEventListener('mouseleave', clearPickPosition);

window.addEventListener('touchstart', (event) => {
    // prevent the window from scrolling
    event.preventDefault();
    setPickPosition(event.touches[0]);
}, { passive: false });

window.addEventListener('touchmove', (event) => {
    setPickPosition(event.touches[0]);
});

window.addEventListener('touchend', clearPickPosition);

function getWidth() {
    xWidth = null;
    if (window.screen != null)
        xWidth = window.screen.availWidth;

    if (window.innerWidth != null)
        xWidth = window.innerWidth;

    if (document.body != null)
        xWidth = document.body.clientWidth;

    return xWidth;
}

function getHeight() {
    xHeight = null;
    if (window.screen != null)
        xHeight = window.screen.availHeight;

    if (window.innerHeight != null)
        xHeight = window.innerHeight;

    if (document.body != null)
        xHeight = document.body.clientHeight;

    return xHeight;
}