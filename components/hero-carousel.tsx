'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/1.png',
  '/2.png',
  '/3.png'
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [randomVal, setRandomVal] = useState('0.0000')

  useEffect(() => {
    setRandomVal(Math.random().toFixed(4))
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[450px] w-full max-w-[500px] mx-auto overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-4  group-hover:opacity-70 transition-opacity duration-1000" />
      
      {/* Images Container */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-110 rotate-1'
          }`}
        >
          <Image
            src={src}
            alt={`Hero Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          
          {/* Elegant Overlay Gradient */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}
        </div>
      ))}

      {/* Navigation Indicators & Progress Bar */}
      <div className="absolute bottom-6 left-8 right-8 z-10">
        <div className="flex gap-3 mb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentIndex 
                  ? 'w-12 bg-primary shadow-[0_0_15px_rgba(2,141,163,0.6)]' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="h-[1px] w-full bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-[5000ms] ease-linear"
            key={currentIndex}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* High-Tech Overlays */}
      {/* <div className="absolute top-6 left-6 flex flex-col gap-1">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">System Active</span>
        </div>
        <div className="text-[10px] font-mono text-white/40 px-1">
          IDX: 00{currentIndex + 1} // TRN: OPTIMAL
        </div>
      </div> */}

      <div className="absolute top-8 right-8 h-12 w-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center animate-pulse">
         <div className="relative h-6 w-6">
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping" />
            <div className="absolute inset-1 border-2 border-primary/50 rounded-full animate-spin duration-[3000ms]" />
            <div className="absolute inset-2 bg-primary rounded-full" />
         </div>
      </div>

      {/* <div className="absolute bottom-20 right-8 text-right">
        <div className="text-[32px] font-bold text-white/10 leading-none">0{currentIndex + 1}</div>
        <div className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Phase</div>
      </div> */}
{/* 
      <div className="absolute bottom-20 left-8 max-w-[120px] opacity-40">
        <div className="text-[8px] font-mono text-white leading-tight uppercase tracking-widest mb-1 border-b border-white/20 pb-1">Calculation Data</div>
        <div className="text-[6px] font-mono text-white/60 space-y-0.5">
          <div>CONST VAL = {randomVal}</div>
          <div>ITER_SEQ = [{currentIndex}]</div>
          <div>STATUS = OPTIMAL</div>
        </div>
      </div> */}

    </div>
  )
}
