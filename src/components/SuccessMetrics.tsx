import React from 'react';
import { TrendingUp, Users, Droplets } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function SuccessMetrics() {
  const metrics = [
    {
      icon: Droplets,
      value: 10,
      suffix: ' mlrd m³',
      label: 'Tejash potentsiali',
      description: 'Yiliga tejash mumkin bo\'lgan suv',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: '%',
      label: 'Hosildorlik o\'sishi',
      description: 'Optimal sug\'orish orqali',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      value: 1,
      suffix: ' million',
      label: 'Potensial foydalanuvchilar',
      description: 'O\'zbekiston fermerlari',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Kutilayotgan natijalar
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            AI-Irrigatsiya tizimi O'zbekiston qishloq xo'jaligi uchun katta ta'sir ko'rsatishi mumkin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all border border-white/10 group hover:scale-105 duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl mb-2">
                <AnimatedCounter 
                  end={metric.value} 
                  duration={2500}
                  suffix={metric.suffix}
                />
              </div>
              
              <h3 className="text-xl mb-2 text-white">
                {metric.label}
              </h3>
              
              <p className="text-gray-400">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-xl px-8 py-6">
              <p className="text-2xl mb-4">
                🌱 Kelajak uchun innovatsion yechim
              </p>
              <p className="text-gray-300 text-lg">
                Sun'iy intellekt yordamida O'zbekiston qishloq xo'jaligini yangi bosqichga olib chiqamiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
