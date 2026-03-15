// @ts-nocheck
import { useEffect } from 'react';
export function Footer () {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('footer') as HTMLCanvasElement });
            speed = 0.0001;
            s0.initImage("../../public/livecodeLA_logo.svg");
            src(s0)
            .modulateScale(noise(() => 500 * Math.sin(time)))
            .kaleid(1)
            .pixelate(() => 100 - 100 * Math.sin(time * 0.01) + 5, () => 100 - 100 * Math.sin(time * 0.01) + 5)
            .out(o0);
        }
   
}, [])
    return (
        <div className="footer-wrap">
            <canvas id="footer" />
        </div>
    );
};