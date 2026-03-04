import { useEffect, useRef } from 'react';

// WebGL shader — colorful concentric ring animation
// Uses raw WebGL to avoid Three.js bundle cost (~600KB)

const VERT = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  void main(void) {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    float t = u_time * 0.08;
    float lineWidth = 0.0015;

    // Dark sleek silver/blue base color for the lines
    vec3 baseColor = vec3(0.85, 0.85, 0.9);
    float intensity = 0.0;
    
    // Abstract topographic / fluid rings
    for(int i = 0; i < 4; i++){
      vec2 p = uv;
      p.x += 0.2 * sin(t + float(i) * 1.5 + uv.y * 3.0);
      p.y += 0.2 * cos(t + float(i) * 1.5 + uv.x * 3.0);
      
      intensity += lineWidth / abs(max(abs(p.x), abs(p.y)) - 0.5 - 0.1 * float(i));
    }

    vec3 color = baseColor * intensity;
    
    // Vignette to fade out edges
    color *= smoothstep(1.5, 0.0, length(uv));
    
    // Background is near-black
    vec3 bg = vec3(0.02, 0.02, 0.02);
    
    gl_FragColor = vec4(bg + color, 1.0);
  }
`;

const ShaderAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const compileShader = (src: string, type: number) => {
            const s = gl.createShader(type)!;
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        };

        const prog = gl.createProgram()!;
        gl.attachShader(prog, compileShader(VERT, gl.VERTEX_SHADER));
        gl.attachShader(prog, compileShader(FRAG, gl.FRAGMENT_SHADER));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        // Full-screen quad (two triangles via TRIANGLE_STRIP)
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const posLoc = gl.getAttribLocation(prog, 'a_position');
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const resLoc = gl.getUniformLocation(prog, 'u_resolution');
        const timeLoc = gl.getUniformLocation(prog, 'u_time');

        let animId: number;
        let t = 0;

        const resize = () => {
            // Cap DPR at 2 for performance on high-density displays
            const dpr = Math.min(window.devicePixelRatio, 2);
            canvas.width = canvas.clientWidth * dpr;
            canvas.height = canvas.clientHeight * dpr;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resLoc, canvas.width, canvas.height);
        };

        resize();
        window.addEventListener('resize', resize);

        const render = () => {
            t += 0.05;
            gl.uniform1f(timeLoc, t);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            animId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            gl.deleteProgram(prog);
            gl.deleteBuffer(buf);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
        />
    );
};

export default ShaderAnimation;
