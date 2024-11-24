import * as THREE from "three";
import vertexBg from "./shaders/vertexBg.glsl";
import fragmentBg from "./shaders/fragmentBg.glsl";
import gsap from "gsap";
import {ScrollTrigger }from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.normalizeScroll(true);



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

    // Bind the render method to maintain correct context
    this.render = this.render.bind(this);

    // Add performance optimizations
    this.renderer.powerPreference = "high-performance";
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Add frustum culling
    this.camera.frustumCulled = true;
    
    // Reduce geometry complexity for mobile
    this.isMobile = window.innerWidth < 768;

    // Context loss handling
    this.handleContextLost = this.handleContextLost.bind(this);
    this.handleContextRestored = this.handleContextRestored.bind(this);

    this.renderer.domElement.addEventListener('webglcontextlost', this.handleContextLost);
    this.renderer.domElement.addEventListener('webglcontextrestored', this.handleContextRestored);

    // Store resources for cleanup
    this.resources = new Set();
    this.boundEvents = new Set();

    // Optimize for iOS
    const isIOS = /iPhone|iPad|iPod|Safari/i.test(navigator.userAgent);
    if (isIOS) {
      this.renderer.powerPreference = "default";
      this.renderer.setPixelRatio(1); // Force 1x pixel ratio on iOS
      this.camera.zoom = 1.1; // Slightly reduced zoom for better performance
      
      // Reduce animation complexity
      this.animationSpeed = 0.5;
      this.particleCount = Math.floor(this.particleCount * 0.7);
    }

    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
    this.handleScrollAnimation();
  }

  setupResize() {
    const resizeHandler = this.resize.bind(this);
    window.addEventListener('resize', resizeHandler);
    this.boundEvents.add([window, 'resize', resizeHandler]);
  }

  resize() {
    const isMobile = window.innerWidth < 768;
    
    if (this.mesh) {
        const scale = isMobile ? 0.7 : 1.15;
        this.mesh.scale.set(scale, scale, scale);
    }
    
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    
    // Adjust camera position for mobile
    if (isMobile) {
        this.camera.position.z = 2.8; // Slightly further back on mobile
    } else {
        this.camera.position.z = 2.5;
    }
    
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    const isMobile = window.innerWidth < 768;
    
    // Create geometry with appropriate detail level
    const geometry = this.trackResource(
        new THREE.IcosahedronGeometry(
            isMobile ? 0.9 : 1.1,
            isMobile ? 20 : 25
        )
    );

    const material = this.trackResource(
        new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            defines: {
                IS_MOBILE: isMobile
            },
            uniforms: {
                time: { value: 0.0 },
                uColor1: { value: new THREE.Color(0x0a151f) },
                uColor2: { value: new THREE.Color(0xacd4f6) },
                uColor3: { value: new THREE.Color(0x193852) },
            },
            vertexShader: vertexBg,
            fragmentShader: fragmentBg,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })
    );

    // Store material reference
    this.material = material;

    this.vertices = geometry.attributes.position.array.length;

    let randoms = new Float32Array(this.vertices / 3);
    let colorRandom = new Float32Array(this.vertices / 3);

    for (let index = 0; index < this.vertices / 3; index++) {
      randoms.set([Math.random()], index);
      colorRandom.set([Math.random()], index);
    }

    geometry.setAttribute(
      "randoms",
      new THREE.BufferAttribute(randoms, 1)
    );
    geometry.setAttribute(
      "colorRandom",
      new THREE.BufferAttribute(colorRandom, 1)
    );

    this.mesh = new THREE.Points(geometry, material);
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
      this.isPlaying = true;
      this.render();
    }
  }

  // Render loop for animation
  render() {
    if (!this.isPlaying) return;
    
    const time = this.clock.getElapsedTime();
    const isMobile = window.innerWidth < 768;
    
    if (this.mesh) {
        // Adjust movement amplitude but keep it visible on mobile
        const amplitude = isMobile ? 0.008 : 0.01;
        this.mesh.position.y = Math.cos(time) * amplitude;
        this.mesh.position.z = Math.cos(time) * amplitude;
        
        // Add subtle rotation for more movement
        this.mesh.rotation.y = Math.sin(time * 0.1) * 0.02;
    }
    
    if (this.material && this.material.uniforms) {
        this.material.uniforms.time.value = time;
    }
    
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render);
  }

  // Handle scroll animation with GSAP ScrollTrigger
  handleScrollAnimation() {
    const body = document.querySelector("#body");
    const isMobile = window.innerWidth < 768;
    
    ScrollTrigger.create({
        trigger: body,
        start: "top top",
        end: () => "+=" + body.offsetHeight * 1.25,
        onUpdate: (self) => {
            if (!this.mesh) return;
            
            const progress = self.progress;
            const rotationAmount = Math.PI * 2 * progress;
            
            // Adjust rotation speed for mobile
            const rotationSpeed = isMobile ? -0.8 : -1;
            this.mesh.rotation.x = rotationAmount * rotationSpeed;
            
            // Adjust zoom range for mobile
            const minZoom = isMobile ? 1.1 : 1.2;
            const maxZoom = isMobile ? 1.8 : 2.2;
            const zoomAmount = minZoom + (progress * (maxZoom - minZoom));
            
            this.camera.zoom = zoomAmount;
            this.camera.updateProjectionMatrix();
        },
        invalidateOnRefresh: true,
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

  handleContextLost(event) {
    event.preventDefault();
    this.stop();
    console.log('WebGL context lost');
  }

  handleContextRestored() {
    console.log('WebGL context restored');
    this.setupRenderer();
    this.addObjects();
    this.play();
  }

  // Track resources for cleanup
  trackResource(resource) {
    this.resources.add(resource);
    return resource;
  }

  // Memory management
  dispose() {
    // Stop animation
    this.stop();

    // Dispose of geometries and materials
    this.resources.forEach(resource => {
      if (resource.dispose) {
        resource.dispose();
      }
    });

    // Remove event listeners
    this.boundEvents.forEach(([element, event, handler]) => {
      element.removeEventListener(event, handler);
    });

    // Clear scene
    this.scene.traverse(object => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });

    // Remove context loss listeners
    this.renderer.domElement.removeEventListener('webglcontextlost', this.handleContextLost);
    this.renderer.domElement.removeEventListener('webglcontextrestored', this.handleContextRestored);

    // Dispose of renderer
    this.renderer.dispose();

    // Clear references
    this.resources.clear();
    this.boundEvents.clear();
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
}
