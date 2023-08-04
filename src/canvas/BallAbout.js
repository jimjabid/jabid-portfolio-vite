import * as THREE from "three";
import figma from "/img/figma.png?url";
import git from "/img/git.png?url";
import github from "/img/github.png?url";
import html from "/img/html.png?url";
import javascript from "/img/javascript.png?url";
import mongo from "/img/mongodb.png?url";
import node from "/img/nodejs.png?url";
import react from "/img/reactjs.png?url";
import tailwind from "/img/tailwind.png?url";
import threejs from "/img/threejs.svg?url";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DecalGeometry } from "three/addons/geometries/DecalGeometry.js";

class BallAbout {
  constructor(options) {
    // Create a new scene
    this.scene = new THREE.Scene();

    // Set the container for the renderer
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    // Create a WebGL renderer with antialiasing and alpha (for transparency)
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.LinearEncoding = THREE.SRGBColorSpace;

    // Append the renderer's DOM element to the container
    this.container.appendChild(this.renderer.domElement);

    // Create a camera with specific settings
    this.camera = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
      1,
      1000
    );

    this.camera.position.set(-0.3, -0.1, 3);
    this.camera.zoom = 1.2;
    this.camera.updateProjectionMatrix();

    // Create a clock to measure time and set initial state for animation
    this.clock = new THREE.Clock();
    this.isPlaying = true;

    // Initialize the objects, lights, and controls
    this.addObjects(options.imageURL);
    this.addLights();
    this.enableOrbitControls();
    this.resize();
    this.render();
    this.setupResize();
    //this.setUpSettings();
  }

  setUpSettings() {
    this.settings = {
      progress: 0,
    };

    this.gui = new GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    this.camera.updateProjectionMatrix();
  }

  addObjects(imageURL) {
    // Create an IcosahedronGeometry
    this.geometry = new THREE.IcosahedronGeometry(1, 1);

    // Create a MeshPhysicalMaterial for the Icosahedron

    this.material = new THREE.MeshStandardMaterial({
      color: 0x224b6d,
      roughness: 0,
      metalness: 0.2,

      clearcoat: 1,
      clearcoatRoughness: 0.4,
      flatShading: true,

      side: THREE.DoubleSide,
    });
    // this.material = new THREE.MeshPhysicalMaterial({
    //   color: 0x224b6d,
    //   roughness: 1,
    //   //metalness: 0,

    //   clearcoat: 0,
    //   clearcoatRoughness: 0,
    //   flatShading: true,

    //   side: THREE.DoubleSide,
    // });

    // Create a Mesh using the geometry and material
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(1.0, 1.0, 1.0);

    // Enable casting and receiving shadows for the mesh
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // Add the mesh to the scene
    this.scene.add(this.mesh);

    // Create a DecalMaterial with the provided image URL
    const decalMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(imageURL),
      transparent: true,
      //saturation: 1,
      //depthTest: true,
      //depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      flatShading: true,
    });
    // const decalMaterial = new THREE.MeshPhysicalMaterial({
    //   map: new THREE.TextureLoader().load(imageURL),
    //   transparent: true,
    //   //depthTest: true,
    //   //depthWrite: false,
    //   polygonOffset: true,
    //   polygonOffsetFactor: -4,
    //   flatShading: true,
    // });

    // Set position, orientation, and size for the DecalGeometry
    const position = new THREE.Vector3(0, 0, 0.1);
    const orientation = new THREE.Euler(2 * Math.PI, 0, 6.25, "XYZ");
    const size = new THREE.Vector3(1, 1, 5);

    // Create a DecalGeometry and mesh using the mesh, position, orientation, and size
    const decalGeometry = new DecalGeometry(
      this.mesh,
      position,
      orientation,
      size
    );
    this.decal = new THREE.Mesh(decalGeometry, decalMaterial);

    // Add the decal mesh to the scene
    this.scene.add(this.decal);
  }

  // Add ambient and spot lights to the scene
  addLights() {
    let ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    let directionalLight = new THREE.PointLight(0xffffff, 1.5);
    directionalLight.position.set(0, 20, 10);

    this.scene.add(ambientLight, directionalLight);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render();
      this.isPlaying = true;
    }
  }

  // Add orbit controls to the scene
  enableOrbitControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    //this.controls.autoRotate = true;
    this.controls.update();
  }
  // Render loop for animation
  render() {
    if (!this.isPlaying) return;
    const time = this.clock.getElapsedTime();
    this.mesh.position.y = Math.cos(time) * 0.1;
    this.decal.position.y = Math.cos(time) * 0.1;
    this.mesh.position.z = Math.cos(time) * 0.1;
    this.decal.position.z = Math.cos(time) * 0.1;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

// Function to create multiple BallAbout instances with different images
export default function BallAboutInstances() {
  const techElements = document.querySelectorAll("#tech");
  const imageURLs = [
    figma,
    git,
    github,
    html,
    javascript,
    mongo,
    node,
    react,
    tailwind,
    threejs,
  ];
  // Create BallAbout instances for each tech element with its corresponding image
  techElements.forEach((element, index) => {
    new BallAbout({ dom: element, imageURL: imageURLs[index] });
  });
}
