import './Slide_0.css';
import React, {useEffect, useRef, useState} from 'react'
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ObjBgCard = () => {
  // let objpath = require("./SPLASH.obj")
  let objpath = require("./Splash-water-3d-Cgian-artistB.obj");
  console.log(objpath);
  const style_prop = {
    display: "block",
    textAlign: "start",
    position: "relative",
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#cecece"
  }

  const mountRef = useRef(null)

  const [file, setFile] = useState()


  function handleChange(event) {
    setFile(event.target.files[0])
    console.log(event.target.files)
  }

  useEffect(() => {
    // Scene Creation
    const scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    // Scene Backgroud and Light
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);

    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(0, 10, 0);
      light.target.position.set(-5, 0, 0);
      scene.add(light);
      scene.add(light.target);
    }

    var planeW = 50; // pixels
    var planeH = 50; // pixels 
    var numW = 50; // how many wide (50*50 = 2500 pixels wide)
    var numH = 50; // how many tall (50*50 = 2500 pixels tall)
    var plane = new THREE.Mesh(
        new THREE.PlaneGeometry( planeW*numW, planeH*numH, planeW, planeH ),
        new THREE.MeshBasicMaterial( {
            color: 0x111111,
            wireframe: true
        } )
    );
    // scene.add(plane);

    // Scene viewing / Camera options
    const fov = 45;
    const aspect = 1;
    const near = 0.1;
    const far = 100000;

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 500
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer()
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(800,800)
    const div = document.getElementById('splash_vid_0')
    div.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

 
  // Plane creation above
  // STL - 3D Object load and render below

    const material = new THREE.MeshPhongMaterial({
      color: 0xFF0000
    });


    const objLoader = new OBJLoader()
    objLoader.load(
        objpath,
        (object) => {
          object.center()
          // const mesh = new THREE.Mesh(object, material)
          scene.add(object)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    function getVolume(geometry) {

      let position = geometry.attributes.position;
      let faces = position.count / 3;
      let sum = 0;
      let p1 = new THREE.Vector3(),
        p2 = new THREE.Vector3(),
        p3 = new THREE.Vector3();
      for (let i = 0; i < faces; i++) {
        p1.fromBufferAttribute(position, i * 3 + 0);
        p2.fromBufferAttribute(position, i * 3 + 1);
        p3.fromBufferAttribute(position, i * 3 + 2);
        sum += signedVolumeOfTriangle(p1, p2, p3);
      }
      return sum;

    }

    function signedVolumeOfTriangle(p1, p2, p3) {
      return p1.dot(p2.cross(p3)) / 6.0;
    }


    function animate() {
        requestAnimationFrame(animate)
        // controls.rotation.x += 0.01
        // console.log(controls)
        controls.autoRotate = true;
        controls.autoRotateSpeed = 18;
        controls.update()

        render()
    }

    // function animate6() {
    //   requestAnimationFrame(animate6);
    //   obj.rotation.x += 0.01;
    //   render();

    // }

    function render() {
      renderer.render(scene, camera)
    }

    let onWindowResize = function () {
      camera.aspect = 1;//window.innerWidth / window.innerHeight;
      camera.far = 10000;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", onWindowResize, false);

    animate()
    // animate6()

  }, []);
  return (
    <div id="splash_vid_0">
    </div>
  )
  
}


export default ObjBgCard





// 