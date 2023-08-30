varying vec2 vUv;
varying float vColorRandom;
varying float vNoise;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;


void main() {
   // color = vec3(0.133,0.294,0.427)
   //	gl_FragColor = vec4(0.133,0.294,0.427,1.);
   //	gl_FragColor = vec4(vUv,0.,1.);
   float alpha = 1. -smoothstep(-0.2,0.5,length(gl_PointCoord - vec2(0.5)));

    vec3 finalColor = uColor1;
	if(vColorRandom>0.33 && vColorRandom<0.66){
		finalColor = uColor2;
	}
	if( vColorRandom<0.66){
		finalColor = uColor3;
	}

   	//gl_FragColor = vec4(finalColor,1.);
   	gl_FragColor = vec4(finalColor,alpha);

}
