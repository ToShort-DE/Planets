var infoplanet = null;
var planetmap = {};
let moonForPlanet, rendererForPlanet, sceneForPlanet, cameraForPlanet

let INTERSECTED, overlay, renderer, controls, scene, camera, pointer, raycaster;
renderPlanet()
renderSpace()
function renderSpace() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );

    scene.background = new THREE.TextureLoader().load("assets/img/space.jpg");

    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add( ambientLight );

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg')
    });
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.setZ(300)
    
    var backgroundSphere = new THREE.Mesh(
        new THREE.SphereGeometry(10000, 800, 800),
        new THREE.MeshLambertMaterial ({
            map: (new THREE.TextureLoader).load("assets/img/space.jpg"),
            side: THREE.BackSide
        })
    );
    scene.add(backgroundSphere)
    
    var i = 0;
    for(var planet of planets) {
        var texture = new THREE.TextureLoader().load(planet.texture)
            
        var planet_mash = new THREE.Mesh(
            new THREE.SphereGeometry( planet.size, 70, 70 ),
            new THREE.MeshStandardMaterial( {
                map: texture
            } )
        )
        
        planet_mash.position.x = planet.positionX;
        planet_mash.position.y = planet.positionY;
        planet_mash.position.z = planet.positionZ;

        planet.planet = planet_mash;
        
        planets[i] = planet;
        planetmap[planet_mash.uuid] = planet;

        scene.add(planet_mash)
        i++;
    }
    raycaster = new THREE.Raycaster();
    pointer = new THREE.Vector2();

    document.addEventListener( 'click', onClick );
    window.addEventListener( 'resize', onWindowResize );

    function onPointerMove( event ) {

        pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.minDistance = 10;
    controls.maxDistance = 1000;

    animateSpace();

    Array(1000).fill().forEach(addStar) // add 1000 stars
}

function animateSpace() {
    requestAnimationFrame( animateSpace );

    for(var planet of planets) {
        planet.planet.rotation.z += 0.001;
        planet.planet.rotation.y += 0.01;
    }

    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children, false );

    if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
            INTERSECTED = intersects[ 0 ].object;
            if(planetmap.hasOwnProperty(INTERSECTED.uuid)) {
                var ovl = document.querySelector("#info");
                
                var text = document.querySelector("#infoText");
                try {
                    if(ovl.style.opacity > 0) {
                        ovl.style.opacity = 0;
                        setTimeout(function () {
                            text.innerHTML = planetmap[INTERSECTED.uuid].info
                            infoplanet.material = new THREE.MeshStandardMaterial( {
                                map: new THREE.TextureLoader().load(planetmap[INTERSECTED.uuid].texture)
                            })
                            ovl.style.opacity = 1;
                            overlay = ovl
                        }, 250);
                    } else {
                        ovl.style.opacity = 1;
                        text.innerHTML = planetmap[INTERSECTED.uuid].info
                        infoplanet.material = new THREE.MeshStandardMaterial( {
                            map: new THREE.TextureLoader().load(planetmap[INTERSECTED.uuid].texture)
                        })
                    }
                } catch (e) {
                    console.error("Error on displaying info: " + e.message)
                }
                overlay = ovl
            }
        }
    } else 
        INTERSECTED = null;

    renderer.render( scene, camera );
    controls.update()
};

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new THREE.MeshStandardMaterial( {color: 0xffffff} )
    const star = new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

    star.position.set(x, y, z)
    scene.add(star)
}



function renderPlanet() {
    sceneForPlanet = new THREE.Scene();
    cameraForPlanet = new THREE.PerspectiveCamera( 75, 1, 0.1, 100000 );

    const ambientLightForPlanet = new THREE.AmbientLight(0xffffff)
    sceneForPlanet.add( ambientLightForPlanet );

    rendererForPlanet = new THREE.WebGLRenderer({
        canvas: document.querySelector('#planet'),
        alpha: true
    });
    rendererForPlanet.setPixelRatio(window.devicePixelRatio)
    rendererForPlanet.setSize( 150, 150 );
    cameraForPlanet.position.setZ(20)

    const textureForPlanet = new THREE.TextureLoader().load('assets/img/space.jpg')
    
    moonForPlanet = new THREE.Mesh(
        new THREE.SphereGeometry( 10, 70, 70 ),
        new THREE.MeshStandardMaterial( {
            map: textureForPlanet
        } )
    )

    infoplanet = moonForPlanet;

    sceneForPlanet.add(moonForPlanet)
    animateForPlanet()
}


function animateForPlanet() {
    requestAnimationFrame( animateForPlanet );

    moonForPlanet.rotation.z += 0.001;
    moonForPlanet.rotation.y += 0.01;

    rendererForPlanet.render( sceneForPlanet, cameraForPlanet );
};


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onClick( event ) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}