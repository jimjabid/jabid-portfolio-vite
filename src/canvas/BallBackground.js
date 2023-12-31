import * as THREE from "three";
import vertexBg from "./shaders/vertexBg.glsl";
import fragmentBg from "./shaders/fragmentBg.glsl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ ignoreMobileResize: true });

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

    this.isPlaying = true;

    this.addObjects();
    this.resize();
    // this.addLights();
    this.render();
    this.setupResize();
    // Handle scroll animation using GSAP ScrollTrigger
    this.handleScrollAnimation();
  }

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
    this.geometry = new THREE.IcosahedronGeometry(1.1, 25);

    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },

      uniforms: {
        time: { value: 0.0 },
        uColor1: { value: new THREE.Color(0x0a151f) },
        uColor2: { value: new THREE.Color(0xacd4f6) },
        uColor3: { value: new THREE.Color(0x193852) },
        resolution: { value: new THREE.Vector4() },
      },

      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexShader: vertexBg,
      fragmentShader: fragmentBg,
      wireframe: false,
      side: THREE.DoubleSide,
    });

    this.vertices = this.geometry.attributes.position.array.length;

    let randoms = new Float32Array(this.vertices / 3);
    let colorRandom = new Float32Array(this.vertices / 3);

    for (let index = 0; index < this.vertices / 3; index++) {
      randoms.set([Math.random()], index);
      colorRandom.set([Math.random()], index);
    }

    this.geometry.setAttribute(
      "randoms",
      new THREE.BufferAttribute(randoms, 1)
    );
    this.geometry.setAttribute(
      "colorRandom",
      new THREE.BufferAttribute(colorRandom, 1)
    );

    this.mesh = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  // Add ambient and spot lights to the scene
  // addLights() {
  //   let ambientLight = new THREE.AmbientLight(0xcccccc, 1.5);
  //   let spotLight = new THREE.SpotLight(0xffffff, 2, 1000);
  //   spotLight.position.set(-1, 0.5, 1);
  //   this.scene.add(ambientLight, spotLight);
  // }

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
    //this.mesh.rotation.y -= 0.0005;
    this.mesh.position.y = Math.cos(time) * 0.01;
    this.mesh.position.z = Math.cos(time) * 0.01;
    this.material.uniforms.time.value = time;
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

    //GSAP Reveal animation for the canvas
    const canvas = document.querySelectorAll("#myThreeJsCanvas");
    gsap.from(canvas, {
      duration: 2,
      opacity: 0,
      delay: 3.2,
      ease: "back.out",
    });
  }
}
