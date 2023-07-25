import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function threeBg() {
  gsap.registerPlugin(ScrollTrigger);
  const canvas = document.getElementById("myThreeJsCanvas");

  const renderer = new THREE.WebGL1Renderer({
    canvas,
    antialias: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //webgl background color

  renderer.setClearColor("#0a151f", 1);

  // setup a scene
  const scene = new THREE.Scene();

  // set up a camera
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  // set up a camera Position
  const initialCameraPosition = new THREE.Vector3(0, 0, 2.5);
  camera.position.copy(initialCameraPosition);
  camera.zoom = 1.5;
  renderer.render(scene, camera);

  // set up a geometry

  let geometry = new THREE.IcosahedronGeometry(1, 15);

  let material = new THREE.MeshPhysicalMaterial({
    color: 0x224b6d,
    roughness: 0,
    metallic: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.4,
    wireframe: true,
    side: THREE.DoubleSide,
  });

  // set up a mesh wih geometry + material
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  let ambientLight = new THREE.AmbientLight(0xcccccc, 0.8);

  // let directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
  let directionalLight = new THREE.SpotLight(0xffffff, 2);

  directionalLight.position.set(-1, 1, 1);

  scene.add(ambientLight, directionalLight);

  function animate() {
    requestAnimationFrame(animate);

    // camera.position.z -= 0.01;
    mesh.rotation.y -= 0.0005;
    renderer.render(scene, camera);
  }
  animate();
  const body = document.querySelector("#body");

  ScrollTrigger.create({
    trigger: body,
    start: "top top",
    // end: "bottom bottom",
    end: () => "+=" + body.offsetHeight * 1.25,
    onUpdate: (self) => {
      const progress = self.progress;
      const rotationAmount = Math.PI * 2 * progress; // Calculate the rotation amount based on scroll progress
      mesh.rotation.x = rotationAmount * -1;
      // Zoom in based on scroll progress
      const zoomAmount = 1.5 + progress;
      camera.zoom = zoomAmount;
      camera.updateProjectionMatrix();
    },
  });

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  onWindowResize();
}
