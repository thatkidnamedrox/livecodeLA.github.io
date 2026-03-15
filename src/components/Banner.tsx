// @ts-nocheck
import { useEffect } from 'react';
export function Banner () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('banner') as HTMLCanvasElement });
            s0.initImage("../../public/livecodeLA_logo.svg");
            speed = 0.5;
            src(s0)
            .scale(0.2)
            .pixelate(() => 100 - 100 * Math.sin(time * 0.01) + 5, () => 100 - 100 * Math.sin(time * 0.01) + 5)
            .out(o0);
        }
   
}, [])
    return (
        <div className="banner-wrap">
            <canvas id="banner" />
        </div>
    );
};