varying vec2 vUv;
varying float vNoise;

void main() {
    // Define the two colors
     vec3 color1 = vec3(0.102, 0.2, 0.278);
    vec3 color2 = vec3(0.675,0.831,0.965);
   // vec3 color1 = vec3(0.039,0.082,0.122); //bg
    
    // Interpolate between the two colors based on vUv.x
    vec3 gradientColor = mix(color1, color2, vNoise);
   
    gl_FragColor = vec4(gradientColor, 1.0);
}
