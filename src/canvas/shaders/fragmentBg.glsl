varying vec2 vUv;

void main() {
    // Define the two colors
    //vec3 color1 = vec3(0.102, 0.2, 0.278);
    vec3 color2 = vec3(0.133, 0.294, 0.427);
    //vec3 color2 = vec3(0.086,0.149,0.2);
    
    // Interpolate between the two colors based on vUv.x
    //vec3 gradientColor = mix(color1, color2, vUv.x);
   
    gl_FragColor = vec4(color2, 1.0);
}
