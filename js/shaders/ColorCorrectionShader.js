(function() {

    /**
     * Color correction
     */

    const ColorCorrectionShader = {
        uniforms: {
            'tDiffuse': {
                value: null
            },
            'powRGB': {
                value: new THREE.Vector3(2, 2, 2)
            },
            'mulRGB': {
                value: new THREE.Vector3(1, 1, 1)
            },
            'addRGB': {
                value: new THREE.Vector3(0, 0, 0)
            },
            'white': {
                value: new THREE.Vector3(1, 1, 1)
            }
        },
        vertexShader:
        /* glsl */
            `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader:
        /* glsl */
            `

		uniform sampler2D tDiffuse;
		uniform vec3 powRGB;
		uniform vec3 mulRGB;
		uniform vec3 addRGB;
		uniform vec3 white;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.rgb = white - gl_FragColor.rgb;

		}`
    };

    THREE.ColorCorrectionShader = ColorCorrectionShader;

})();