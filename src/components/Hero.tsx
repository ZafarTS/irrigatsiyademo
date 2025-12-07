import React from 'react';
import { Droplets, Sprout } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1689349483530-bb7a0734d9fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGlycmlnYXRpb24lMjBmaWVsZHxlbnwxfHx8fDE3NjQyMTgwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Agriculture field"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <Droplets className="w-6 h-6" />
            <span className="text-sm tracking-wide">O'ZBEKISTON FERMERLARI UCHUN</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
            AI-Irrigatsiya tizimi
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-green-50">
            Sun'iy yo'ldosh va AI yordamida aqlli sug'orish. 
            20-30% suv tejang, hosildorlikni oshiring!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => {
                if ((window as any).navigate) {
                  (window as any).navigate('/demo');
                } else {
                  window.location.href = '/demo';
                }
              }}
              className="bg-white text-green-700 px-8 py-4 rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 hover:shadow-2xl"
            >
              <Sprout className="w-5 h-5" />
              <span>Demo ko'rish</span>
            </button>
            <button 
              onClick={() => {
                const section = document.querySelector('#problem');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all hover:border-green-300"
            >
              Batafsil ma'lumot
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-2">
                <AnimatedCounter end={20} duration={2000} />-<AnimatedCounter end={30} duration={2000} />%
              </div>
              <div className="text-green-100">Suv tejash</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-2">
                <AnimatedCounter end={15} duration={2000} />-<AnimatedCounter end={25} duration={2000} />%+
              </div>
              <div className="text-green-100">Hosildorlik oshishi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all transform hover:scale-105">
              <div className="text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-green-100">Real-time monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}