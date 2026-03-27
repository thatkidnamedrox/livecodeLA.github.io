// @ts-nocheck
'use client'
import { useEffect } from 'react';
import Script from 'next/script'
export function Logo () {
    return (
        <div className='logo-wrap'>
            <Script 
            src="https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js"
            onReady={() => {
            const hydra = new Hydra({ detectAudio: false, width:0, height:0, canvas: document.getElementById('logo') as HTMLCanvasElement });
            speed = 0.2;
            s0.initImage("/livecodeLA_logo_2.svg");
            src(s0)
            .modulate(noise(() => 10 * Math.sin(time)))
            .out(o0);
             }}
            onError={(e: Error) => {
            console.error('Script failed to load', e)
            }}
            />
            <canvas id="logo" />
        </div>
    );
};