// @ts-nocheck
import { useEffect } from 'react';
export function Logo () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('logo') as HTMLCanvasElement });
            speed = 0.2;
            s0.initImage("../../public/livecodeLA_logo.svg");
            src(s0)
            .pixelate(() => 1000 - 1000 * Math.sin(time * 0.1) + 5, () => 1000 - 1000 * Math.sin(time * 0.1) + 5)
            .out(o0);
        }
   
}, [])
    return (
        <div className='logo-wrap'>
            <canvas id="logo" />
        </div>
    );
};