import * as THREE from "three";
import Sketch from "../utils/Sketch";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default class BallBackground extends Sketch {
  constructor() {
    super();
    // Set camera position and zoom, update renderer background color
    this.camera.position.set(0, 0, 2.5);
    this.camera.zoom = 1.2;
    this.camera.updateProjectionMatrix();
    this.renderer.setClearColor("#0a151f", 1);

    // Handle window resize event and apply mesh scale accordingly
    window.addEventListener("resize", this.handleResize.bind(this));
    this.handleResize();

    // Handle scroll animation using GSAP ScrollTrigger
    this.handleScrollAnimation();
  }

  // Add the 3D mesh to the scene
  addMesh() {
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
    this.scene.add(this.mesh);
  }

  // Handle resizing of the canvas and adjust mesh scale for small screens
  handleResize() {
    this.resize();
    if (window.innerWidth < 650) {
      this.mesh.scale.set(0.7, 0.7, 0.7);
    } else {
      this.mesh.scale.set(1.15, 1.15, 1.15);
    }
  }

  // Add ambient and spot lights to the scene
  addLights() {
    let ambientLight = new THREE.AmbientLight(0xcccccc, 2);
    let spotLight = new THREE.SpotLight(0xffffff, 5);
    spotLight.position.set(-1, 0.5, 1);
    this.scene.add(ambientLight, spotLight);
  }

  // Render loop for animation
  render() {
    this.time++;
    this.mesh.rotation.y -= 0.0005;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }

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
    const canvas = document.querySelectorAll("#myThreeJsCanvas");
    gsap.from(canvas, {
      duration: 2,
      opacity: 0,
      delay: 2.9,
      ease: "back.out",
    });
  }
}
