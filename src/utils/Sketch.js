import * as THREE from "three";

export default class Sketch {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("myThreeJsCanvas")
      .appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.set(0, 0, 2.5);
    //this.camera.zoom = 1.5;
    this.addMesh();
    this.addLights();
    this.time = 0;
    this.resize();
    this.render();
  }

  addMesh() {
    this.geometry = new THREE.IcosahedronGeometry(1, 15);
    this.material = new THREE.MeshPhysicalMaterial({
      color: 0x224b6d,
      roughness: 0,
      metalness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.4,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  addLights() {
    let ambientLight = new THREE.AmbientLight(0xcccccc, 0.8);
    let spotlLight = new THREE.SpotLight(0xffffff, 2);
    spotlLight.position.set(-1, 1, 1);
    this.scene.add(ambientLight, spotlLight);
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;

    this.camera.updateProjectionMatrix();
  }

  render() {
    this.time++;
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }
}
