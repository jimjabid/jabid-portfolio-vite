import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default class BallBackground {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor("#0a151f", 1);

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      65,
      this.width / this.height,
      1,
      1000
    );
    // Set camera position and zoom, update renderer background color
    this.camera.position.set(0, 0, 2.5);
    this.camera.zoom = 1.2;
    this.camera.updateProjectionMatrix();

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.minPolarAngle = 0;
    //this.controls.maxPolarAngle = 0;
    // this.controls.minAzimuthAngle = 0;
    // this.controls.maxAzimuthAngle = 0;
    this.controls.enableZoom = false;
    this.controls.enableDamping = false;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = -0.5;
    this.controls.update();

    this.isPlaying = true;

    this.addObjects();
    this.resize();
    this.addLights();
    this.render();
    this.setupResize();
    //this.setUpSettings();

    // Handle scroll animation using GSAP ScrollTrigger
    this.handleScrollAnimation();
  }

  // setUpSettings() {
  //   this.settings = {
  //     progress: 0,
  //   };

  //   this.gui = new GUI();
  //   this.gui.add(this.settings, "progress", 0, 1, 0.01);
  // }
  // Add the 3D mesh to the scene

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    if (window.innerWidth < 650) {
      this.mesh.scale.set(0.7, 0.7, 0.7);
    } else {
      this.mesh.scale.set(1.15, 1.15, 1.15);
    }
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    this.geometry = new THREE.IcosahedronGeometry(1, 15);
    this.material = new THREE.MeshPhysicalMaterial({
      color: 0x224b6d,
      roughness: 0,
      metalness: 0.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }

  // Add ambient and spot lights to the scene
  addLights() {
    let ambientLight = new THREE.AmbientLight(0xcccccc, 2.5);
    let spotLight = new THREE.SpotLight(0xffffff, 2, 1000);
    spotLight.position.set(-1, 0.5, 1);
    this.scene.add(ambientLight, spotLight);
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

  // Render loop for animation
  render() {
    if (!this.isPlaying) return;
    const time = this.clock.getElapsedTime();
    this.mesh.position.y = Math.cos(time) * 0.01;
    this.mesh.position.z = Math.cos(time) * 0.01;
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
  // render() {
  //   this.time++;
  //   this.mesh.rotation.y -= 0.0005;
  //   this.renderer.render(this.scene, this.camera);
  //   window.requestAnimationFrame(this.render.bind(this));
  // }

  // Handle scroll animation with GSAP ScrollTrigger
  handleScrollAnimation() {
    const body = document.querySelector("#body");
    const meshRef = { current: this.mesh };
    ScrollTrigger.create({
      trigger: body,
      start: "top top",
      end: () => "+=" + body.offsetHeight * 1.25,
      onUpdate: (self) => {
        // Calculate scroll progress and apply rotation and zoom animations
        const progress = self.progress;
        const rotationAmount = Math.PI * 2 * progress;
        meshRef.current.rotation.x = rotationAmount * -1;
        const zoomAmount = 1.2 + progress;
        this.camera.zoom = zoomAmount;
        this.camera.updateProjectionMatrix();
      },
    });

    // GSAP Reveal animation for the canvas
    // const canvas = document.querySelectorAll("#myThreeJsCanvas");
    // gsap.from(canvas, {
    //   duration: 2,
    //   opacity: 0,
    //   delay: 2.9,
    //   ease: "back.out",
    // });
  }
}
