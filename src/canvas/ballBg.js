import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ballBg = () => {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Get the canvas element
  const canvas = document.getElementById("myThreeJsCanvas");

  // Setup the WebGL renderer
  const renderer = new THREE.WebGL1Renderer({
    canvas,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor("#0a151f", 1); // Set background color

  // Setup the scene
  const scene = new THREE.Scene();

  // Setup the camera
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  const initialCameraPosition = new THREE.Vector3(0, 0, 2.5);
  camera.position.copy(initialCameraPosition);
  camera.zoom = 1.5;
  renderer.render(scene, camera);

  // Setup the geometry
  let geometry = new THREE.IcosahedronGeometry(1, 15);

  // Setup the material
  let material = new THREE.MeshPhysicalMaterial({
    color: 0x224b6d,
    roughness: 0,
    metallic: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.4,
    wireframe: true,
    side: THREE.DoubleSide,
  });

  // Create a mesh with geometry and material
  const mesh = new THREE.Mesh(geometry, material);
  // Check if screen width is below 650px
  if (window.innerWidth < 650) {
    mesh.scale.set(0.7, 0.7, 0.7);
  } else {
    mesh.scale.set(1.15, 1.15, 1.15); // Scale the mesh
  }
  scene.add(mesh);

  // Setup lights
  let ambientLight = new THREE.AmbientLight(0xcccccc, 0.8);
  let directionalLight = new THREE.SpotLight(0xffffff, 2);
  directionalLight.position.set(-1, 1, 1);
  scene.add(ambientLight, directionalLight);

  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y -= 0.0005;
    renderer.render(scene, camera);
  }
  animate();

  // GSAP ScrollTrigger for animation based on scroll progress
  const body = document.querySelector("#body");
  const meshRef = { current: mesh }; // Create a ref for the mesh
  ScrollTrigger.create({
    trigger: body,
    start: "top top",
    end: () => "+=" + body.offsetHeight * 1.25,
    onUpdate: handleScroll,
  });

  // GSAP Reveal animation for the canvas
  const canva = document.querySelectorAll("#myThreeJsCanvas");
  gsap.from(canva, {
    duration: 2,
    opacity: 0,
    delay: 2.9,
    ease: "back.out",
  });

  function handleScroll(self) {
    const progress = self.progress;
    const rotationAmount = Math.PI * 2 * progress;
    meshRef.current.rotation.x = rotationAmount * -1;
    const zoomAmount = 1 + progress;
    camera.zoom = zoomAmount;
    camera.updateProjectionMatrix();
  }
};
