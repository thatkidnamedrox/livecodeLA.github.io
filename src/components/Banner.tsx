// @ts-nocheck
'use client'
import { useEffect } from 'react';
import Script from "next/script"

export function Banner () {
    return (
        <div className="banner-wrap">
            <Script 
            src="https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js"
            onReady={() => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('banner') as HTMLCanvasElement });
            speed = 0.5;
            s0.initImage("/livecodeLA_logo.svg");
            src(s0)
            .scale(0.2)
            .pixelate(() => 100 - 100 * Math.sin(time * 0.01) + 5, () => 100 - 100 * Math.sin(time * 0.01) + 5)
            .out(o0);
        }}
            onError={(e: Error) => {
          console.error('Script failed to load', e)
        }}
            />
            <canvas id="banner" />
        </div>
    );
};