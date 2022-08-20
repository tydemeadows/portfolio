import './Slide_0.css';
import React, {useEffect, useRef, useState} from 'react'
import * as THREE from "three";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const StlBgCard = () => {
  // let path = require("./Splash-water-3d-Cgian-artistB.stl")
  // console.log(path)
  // const mountRef = useRef(null)
  // const [file, setFile] = useState()

  // useEffect(() => {
  //   // Scene Creation
  //   const scene = new THREE.Scene()
  //   scene.add(new THREE.AxesHelper(5))
  //   // Scene Backgroud and Light
  //   const skyColor = 0xB1E1FF;  // light blue
  //   const groundColor = 0xB97A20;  // brownish orange
  //   const intensity = 1;
  //   const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
  //   scene.add(light);

  //   {
  //     const color = 0xFFFFFF;
  //     const intensity = 1;
  //     const light = new THREE.DirectionalLight(color, intensity);
  //     light.position.set(0, 10, 0);
  //     light.target.position.set(-5, 0, 0);
  //     scene.add(light);
  //     scene.add(light.target);
  //   }
    
  //   // scene.background = new THREE.Color('blue');
  //   // const light = new THREE.SpotLight()
  //   // light.position.set(10, 20, 20)
  //   // scene.add(light)


  //   // Scene viewing / Camera options
  //   const fov = 45;
  //   const aspect = 1;
  //   const near = 0.1;
  //   const far = 100000;

  //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  //   camera.position.z = 5
  //   camera.updateProjectionMatrix();

  //   const renderer = new THREE.WebGLRenderer()
  //   renderer.outputEncoding = THREE.sRGBEncoding
  //   renderer.setSize(800,800)
  //   const div = document.getElementById('bg_stl_0')
  //   // div.appendChild(renderer.domElement);
  //   document.body.appendChild(renderer.domElement)

  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;


  // // STL - 3D Object load and render below

  //   const material = new THREE.MeshPhongMaterial({
  //     color: 0xFF0000
  //   });
  //   material.flatShading = true;
  //   const loader = new STLLoader();
  //   loader.load(
  //       path.default,
  //       function (geometry) {
  //           geometry.center();
  //           const mesh = new THREE.Mesh(geometry, material)
  //           scene.add(mesh)
  //           var box = new THREE.Box3().setFromObject( mesh );
  //           console.log(box)
  //           const v = getVolume(geometry);
  //           console.log(v) ;
            
  //       },
  //       (xhr) => {
  //           console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  //       },
  //       (error) => {
  //           console.log(error)
  //       }
  //   )


  //   function getVolume(geometry) {

  //     let position = geometry.attributes.position;
  //     let faces = position.count / 3;
  //     let sum = 0;
  //     let p1 = new THREE.Vector3(),
  //       p2 = new THREE.Vector3(),
  //       p3 = new THREE.Vector3();
  //     for (let i = 0; i < faces; i++) {
  //       p1.fromBufferAttribute(position, i * 3 + 0);
  //       p2.fromBufferAttribute(position, i * 3 + 1);
  //       p3.fromBufferAttribute(position, i * 3 + 2);
  //       sum += signedVolumeOfTriangle(p1, p2, p3);
  //     }
  //     return sum;

  //   }

  //   function signedVolumeOfTriangle(p1, p2, p3) {
  //     return p1.dot(p2.cross(p3)) / 6.0;
  //   }


  //   function animate() {
  //       requestAnimationFrame(animate)
  //       // controls.rotation.x += 0.01
  //       // console.log(controls)
  //       controls.autoRotate = true;
  //       controls.autoRotateSpeed = 18;
  //       controls.update()

  //       render()
  //   }

  //   // function animate6() {
  //   //   requestAnimationFrame(animate6);
  //   //   obj.rotation.x += 0.01;
  //   //   render();

  //   // }

  //   function render() {
  //     renderer.render(scene, camera)
  //   }

  //   let onWindowResize = function () {
  //     camera.aspect = 1;//window.innerWidth / window.innerHeight;
  //     camera.far = 10000;
  //     camera.updateProjectionMatrix();
  //     // renderer.setSize( 600, 600 );
  //   }

  //   window.addEventListener("resize", onWindowResize, false);

  //   animate()
  //   // animate6()
  //   // return () => mountRef.current.removeChild( renderer.domElement);

  // }, []);

  return (
    <div  id="bg_stl_0" className="stl_bg">
    </div>
  )
}


export default StlBgCard





// 