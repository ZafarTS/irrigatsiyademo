import React from 'react';
import { AlertCircle, Lightbulb, TrendingDown, Droplet, DollarSign, AlertTriangle } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function ProblemSolution() {
  return (
    <section id="problem" className="py-24 bg-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Banner */}
        <div className="mb-20 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-10 border-2 border-red-200 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl text-red-600 mb-3">
                <AnimatedCounter end={52} duration={2500} /> mlrd m³
              </div>
              <p className="text-gray-700 text-lg">Yillik suv iste'moli</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl text-red-600 mb-3">
                <AnimatedCounter end={90} duration={2500} />%
              </div>
              <p className="text-gray-700 text-lg">Qishloq xo'jaligiga</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl text-red-600 mb-3">
                <AnimatedCounter end={30} duration={2500} />-<AnimatedCounter end={40} duration={2500} />%
              </div>
              <p className="text-gray-700 text-lg">Suvning isrof bo'lishi</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 mb-24">
          {/* Problem */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-5 py-3 rounded-full text-lg">
              <AlertCircle className="w-6 h-6" />
              <span>Muammo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Suv tanqisligi va ko'r-ko'rona sug'orish
            </h2>
            
            <p className="text-gray-600 text-xl leading-relaxed">
              O'zbekistonda bir yilda o'rtacha 52 mlrd m³ suv iste'mol qilinadi va uning taxminan 90% qismi 
              qishloq xo'jaligiga to'g'ri keladi. An'anaviy sug'orish usullarida bu suvning 30-40% (taxminan 14 mlrd kub metr) gacha qismi isrof bo'ladi.
            </p>
            
            <div className="space-y-5">
              <div className="flex gap-5 bg-red-50 p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center shadow-sm">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Ko'r-ko'rona sug'orish</h3>
                  <p className="text-gray-600 text-lg">
                    Fermer dalaning qaysi qismi quruq ekanini aniq bilmaydi, "ehtimol quruqdir" degan 
                    taxmin bilan ko'p suv berib yuboradi
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-red-50 p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center shadow-sm">
                  <TrendingDown className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Monitoringning yo'qligi</h3>
                  <p className="text-gray-600 text-lg">
                    Tuproq namligi, o'simlik holati va sho'rlanish bo'yicha real vaqt xaritalari 
                    va raqamli tahlil tizimi mavjud emas
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5 bg-red-50 p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center shadow-sm">
                  <Droplet className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Noto'g'ri sug'orish rejimi</h3>
                  <p className="text-gray-600 text-lg">
                    Suv noto'g'ri vaqtda yoki noto'g'ri joyga beriladi, natijada oqib ketadi, 
                    bug'lanadi yoki foydasiz sarflanadi
                  </p>
                </div>
              </div>

              <div className="flex gap-5 bg-red-50 p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center shadow-sm">
                  <DollarSign className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2 text-xl">Tuproq sho'rlanishi</h3>
                  <p className="text-gray-600 text-lg">
                    Ortiqcha sug'orish sho'r qatlamni yuqoriga olib chiqadi, dala unumdorligi 
                    yildan-yilga kamayadi
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-3 rounded-full text-lg">
              <Lightbulb className="w-6 h-6" />
              <span>Yechim</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Intellektual irrigatsiya tizimi
            </h2>
            
            <p className="text-gray-600 text-xl leading-relaxed">
              Sun'iy yo'ldosh ma'lumotlari va AI modeli asosida 
              dalalarni raqamli tahlil qiluvchi va aqlli sug'orish tavsiyalarini beruvchi platforma.
            </p>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <h3 className="text-gray-900 mb-6 text-2xl">Platforma qanday ishlaydi:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                    1
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Sun'iy yo'ldosh tasvirlaridan NDVI, NDMI, NDWI, NDRE va SWIR indekslarni hisoblash
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                    2
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Har bir dala bo'yicha quruq, o'rtacha va optimal hududlarni ajratish
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                    3
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    AI modeli orqali sug'orish holatini klassifikatsiya qilish
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                    4
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">
                    Veb-dashbordda rangli xaritalar va AI tavsiyalarini ko'rsatish
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-md">
              <h4 className="text-blue-900 mb-3 text-xl">AI klassifikatsiyasi:</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="text-lg">• <strong>Critical</strong> – zudlik bilan sug'orish zarur (qancha suv kerakligi ko'rsatiladi)</li>
                <li className="text-lg">• <strong>Warning</strong> – 1–3 kun ichida sug'orish kerak (qancha suv kerakligi ko'rsatiladi)</li>
                <li className="text-lg">• <strong>Optimal</strong> – hozircha suv berish shart emas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="mb-5 text-2xl">Kutilayotgan natijalar:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">✓</span>
                  <span>Suv sarfini 20–30% gacha kamaytirish</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">✓</span>
                  <span>Hosildorlikni barqarorlashtirish</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">✓</span>
                  <span>O'simlik kasalliklarini erta aniqlash</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">✓</span>
                  <span>Dalalar bo'yicha aniq raqamli monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500"></div>
    </section>
  );
}
