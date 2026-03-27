// @ts-nocheck
'use client'
import { useEffect } from 'react';
import Script from 'next/script'
export function Footer () {
    return (
        <div className="footer-wrap">
            <Script 
            src="https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js"
            onReady={() => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('footer') as HTMLCanvasElement });
            speed = 0.0001;
            s0.initImage("/livecodeLA_logo_2.svg");
            src(s0)
            .modulateKaleid(noise(() => 500 * Math.sin(time)))
            .modulate(osc(() => 10 * Math.sin(time)))
            .out(o0);
        }}
            onError={(e: Error) => {
          console.error('Script failed to load', e)
        }}
            />
            <canvas id="footer" />
        </div>
    );
};