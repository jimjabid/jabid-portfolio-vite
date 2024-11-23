import * as THREE from "three";
import vertex from "./shaders/vertexTech.glsl";
import fragment from "./shaders/fragmentTech.glsl";
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
    // Add validation
    if (!options.dom) {
      console.error("No DOM element provided for BallAbout");
      return;
    }

    this.scene = new THREE.Scene();
    this.container = options.dom;
    
    // Check if container is visible
    const rect = this.container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      console.warn("Container has zero dimensions:", rect);
    }

    this.width = rect.width || 240; // Fallback width
    this.height = rect.height || 176; // Fallback height
    
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

    // Optimize for mobile
    const isMobile = window.innerWidth < 768;
    this.camera.zoom = isMobile ? 1.5 : 1.2;
    this.camera.position.set(-0.3, -0.1, isMobile ? 3.5 : 3);
    this.camera.updateProjectionMatrix();

    // Create a clock to measure time and set initial state for animation
    this.clock = new THREE.Clock();
    this.isPlaying = true;

    // Initialize the objects, lights, and controls
    this.addObjects(options.imageURL);
    this.addLights();
    this.enableOrbitControls(isMobile);
    this.resize();
    this.render();
    this.setupResize();

    // Reduce animation complexity for mobile
    this.animationSpeed = isMobile ? 0.5 : 1;
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
    // Create a more detailed icosahedron for particle positions
    this.geometry = new THREE.IcosahedronGeometry(1, 4);
    
    // Convert geometry to particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = this.geometry.attributes.position.count;
    
    // Create arrays for particle positions and random values
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount);
    
    // Copy positions from icosahedron and add random values
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = this.geometry.attributes.position.array[i * 3];
      positions[i * 3 + 1] = this.geometry.attributes.position.array[i * 3 + 1];
      positions[i * 3 + 2] = this.geometry.attributes.position.array[i * 3 + 2];
      randoms[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('random', new THREE.BufferAttribute(randoms, 1));

    // Create shader material for particles with matching colors
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        uniform float time;
        attribute float random;
        varying float vRandom;
        varying float vNoise;
        
        void main() {
          vRandom = random;
          vec3 pos = position;
          
          // Add subtle movement
          float noise = sin(time * 2.0 + random * 10.0) * 0.03;
          pos += normal * noise;
          vNoise = noise;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          // Adjust point size based on distance and device
          float size = 6.0;
          #ifdef IS_MOBILE
            size = 4.0;
          #endif
          gl_PointSize = size * (1.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying float vRandom;
        varying float vNoise;
        
        void main() {
            // Keep the original smooth circle calculation
            float dist = length(gl_PointCoord - vec2(0.5));
            float alpha = 1.0 - smoothstep(-0.2, 0.5, dist);
            
            // Match background colors
            vec3 color1 = vec3(0.102,0.216,0.318); // #0a151f
            vec3 color2 = vec3(0.675, 0.831, 0.965); // #acd4f6
            vec3 color3 = vec3(0.098, 0.220, 0.322); // #193852
            
            // Color selection logic matching fragmentBg.glsl
            vec3 finalColor = color1;
            if(vRandom > 0.99 && vRandom < 0.66) {
                finalColor = color2;
            } else if(vRandom > 0.66) {
                finalColor = color3;
            }
            
            // Add noise influence
            finalColor += vNoise * 0.05;
            
            // Adjust mobile rendering
            #ifdef IS_MOBILE
                alpha *= 0.9;
            #endif
            
            gl_FragColor = vec4(finalColor, alpha * 0.9);
        }
      `,
      transparent: true,
      uniforms: {
        time: { value: 0 }
      },
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    // Create particle system
    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);

    // Create a solid but invisible sphere for the decal
    const decalSphere = new THREE.SphereGeometry(0.9, 32, 32);
    const decalMesh = new THREE.Mesh(
      decalSphere,
      new THREE.MeshBasicMaterial({ 
        visible: false,
        transparent: true,
        opacity: 0 
      })
    );
    this.scene.add(decalMesh);

    // Load and apply decal with modified material
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageURL);

    const decalMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
      depthTest: true,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.2
    });

    // Create and position decal with adjusted size
    const decalGeometry = new DecalGeometry(
      decalMesh,
      new THREE.Vector3(0, 0, 0.1),  // Slightly forward
      new THREE.Euler(0, 0, 0),
      new THREE.Vector3(1.7, 1.7, 1.7)  // Slightly larger
    );
    
    this.decal = new THREE.Mesh(decalGeometry, decalMaterial);
    
    // Ensure decal renders on top of particles
    this.decal.renderOrder = 1;
    this.particles.renderOrder = 0;
    
    this.scene.add(this.decal);
  }

  // Add ambient and spot lights to the scene
  addLights() {
    let ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    let directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(200, 200, 200);

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
  enableOrbitControls(isMobile) {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableZoom = false;
    this.controls.enableDamping = true;
    
    // Restrict rotation on mobile
    if (isMobile) {
      this.controls.enableRotate = true;
      this.controls.autoRotate = false;
      // this.controls.autoRotateSpeed = 1;
    }

    this.controls.update();
  }
  // Render loop for animation
  render() {
    if (!this.isPlaying) return;
    
    const time = this.clock.getElapsedTime() * this.animationSpeed;
    
    // Simplified animation for better performance
    if (this.particles && this.particles.material.uniforms) {
      this.particles.material.uniforms.time.value = time;
    }
    
    // Reduce floating animation amplitude
    const floatY = Math.cos(time) * 0.03;
    const floatZ = Math.sin(time) * 0.03;
    
    if (this.particles) {
      this.particles.position.y = floatY;
      this.particles.position.z = floatZ;
    }
    if (this.decal) {
      this.decal.position.y = floatY;
      this.decal.position.z = floatZ;
    }
    
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}

// Function to create multiple BallAbout instances with different images
export default function BallAboutInstances() {
  const techElements = document.querySelectorAll(".tech-ball");
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
  
  // Add error handling and logging
  try {
    techElements.forEach((element, index) => {
      if (index < imageURLs.length) {
        console.log(`Initializing ball ${index} with image: ${imageURLs[index]}`);
        new BallAbout({ 
          dom: element, 
          imageURL: imageURLs[index] 
        });
      }
    });
  } catch (error) {
    console.error("Error initializing tech balls:", error);
  }
}
