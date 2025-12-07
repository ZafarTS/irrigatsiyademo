import React from 'react';
import { CheckCircle, Circle, MapIcon, Clock } from 'lucide-react';

const stages = [
  {
    phase: "1-bosqich: G'oya shakllanishi",
    status: "completed",
    items: [
      "Suv tanqisligi va qishloq xo'jaligi muammolari bo'yicha tahlil",
      "Sun'iy yo'ldosh va AI asosidagi yechim konsepsiyasi",
      "Dastlabki arxitektura va texnologik yo'nalishlarni tanlash"
    ]
  },
  {
    phase: "2-bosqich: Prototip",
    status: "completed",
    items: [
      "NDVI/NDMI xaritalarini olish",
      "Sun'iy yo'ldoshdan olingan tasvirlarni vizuallashtirish",
      "Birinchi test dataseti orqali indeks aniqligi tekshiruvi"
    ]
  },
  {
    phase: "3-bosqich: MVP",
    status: "current",
    items: [
      "Web-dashboard uchun asosiy interfeys yaratish",
      "Dalaning vegetatsiya va namlik xaritalari",
      "Random Forest asosida sug'orish tavsiyasi tizimi",
      "30 kunlik indekslar bo'yicha vaqt qatori tahlili",
      "Veb-demo ishga tushirish"
    ]
  },
  {
    phase: "4-bosqich: AI modullarini kengaytirish",
    status: "planned",
    items: [
      "Ekin turini avtomatik aniqlovchi model (Crop Type Classification)",
      "O'simlik kasalliklari va stressini erta aniqlash (NDRE + ML)",
      "Sho'rlanish va tuproq namligini aniqlash (SWIR indekslari)",
      "Hosildorlik prognozi (NDVI time series + regression)"
    ]
  },
  {
    phase: "5-bosqich: To'liq web-platforma",
    status: "planned",
    items: [
      "Real vaqtda monitoring tizimi",
      "Foydalanuvchi kabineti va ko'p foydalanuvchilik",
      "Agrobank yoki fermerlar uchun integratsiya",
      "Mobil moslashuvchan dizayn",
      "API modulini yo'lga qo'yish"
    ]
  },
  {
    phase: "6-bosqich: Pilot loyiha va sinov",
    status: "planned",
    items: [
      "Mirishkor, Nishon, G'uzor, Qarshi tumanlarida pilot dala sinovlari",
      "Agrobank, Ekologiya vazirligi va Fermerlar kengashi bilan hamkorlik",
      "Tejalgan suv va hosil ko'payishini o'lchash",
      "🎯 Maqsad: 20–30% suvni tejash + barqaror hosil"
    ]
  },
  {
    phase: "7-bosqich: Ishga tushirish (yakuniy)",
    status: "planned",
    items: [
      "To'liq ishlaydigan raqamli agro-platforma",
      "Sug'orish, ekin monitoringi va hosil prognozi xizmatlari",
      "Mahsulotni tijoratlashtirish (subscription modeli)",
      "O'zbekiston bo'ylab keng miqyosda ishga tushirish"
    ]
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-5 py-3 rounded-full text-lg mb-6">
            <MapIcon className="w-6 h-6" />
            <span>Rivojlanish yo'li</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Yo'l xaritasi va hozirgi bosqich
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            G'oyadan to'liq ishga tushirilgan mahsulotgacha 7 bosqichli yo'limiz
          </p>
        </div>
        
        <div className="mb-16 flex items-center justify-center gap-10 flex-wrap">
          <div className="flex items-center gap-3 bg-green-50 px-6 py-3 rounded-xl border border-green-200">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-gray-800 text-lg">Tugallangan</span>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-xl border-2 border-blue-500 shadow-md">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
            <span className="text-blue-700 text-lg">Hozirgi bosqich: MVP (3-bosqich)</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-xl border border-gray-200">
            <Circle className="w-6 h-6 text-gray-400" />
            <span className="text-gray-800 text-lg">Rejalashtirilgan</span>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-blue-600 to-gray-300" />
          
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 ${
                      stage.status === 'completed' ? 'border-green-500 bg-green-50' :
                      stage.status === 'current' ? 'border-blue-500 bg-blue-50' :
                      'border-gray-300'
                    } hover:shadow-2xl transition-all hover:scale-[1.02] duration-300`}>
                      <div className="flex items-center gap-4 mb-6">
                        {stage.status === 'completed' ? (
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        ) : stage.status === 'current' ? (
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <Circle className="w-8 h-8 text-gray-400" />
                        )}
                        <h3 className={`text-xl ${
                          stage.status === 'completed' ? 'text-green-700' :
                          stage.status === 'current' ? 'text-blue-700' :
                          'text-gray-900'
                        }`}>
                          {stage.phase}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {stage.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-700 text-lg">
                            <span className={`flex-shrink-0 mt-1 text-lg ${
                              stage.status === 'completed' ? 'text-green-600' :
                              stage.status === 'current' ? 'text-blue-600' :
                              'text-gray-400'
                            }`}>
                              {stage.status === 'completed' ? '✓' : '•'}
                            </span>
                            <span className={stage.status === 'completed' ? 'text-gray-600' : ''}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {stage.status === 'completed' && (
                        <div className="mt-5 text-sm text-green-600 flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span>Yakunlangan</span>
                        </div>
                      )}
                      {stage.status === 'current' && (
                        <div className="mt-5 text-sm text-blue-600 flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg">
                          <Clock className="w-4 h-4" />
                          <span>Joriy bosqich</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg z-10"
                    style={{
                      backgroundColor: stage.status === 'completed' ? '#16a34a' :
                                     stage.status === 'current' ? '#2563eb' :
                                     '#d1d5db'
                    }}
                  />
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 border-2 border-blue-200 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl text-gray-900 mb-4">
              Keyingi qadamlar (2025-2026)
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Bizning jamoa hozirda ishlaydigan MVP bosqichida. Navbatdagi rejamiz esa AI modullarini 
              kengaytirish va platformani real pilot hududlarda sinovdan o'tkazishdir.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-gray-900 mb-2 text-xl">4-bosqich</h4>
              <p className="text-gray-600 text-lg">AI modullarini kengaytirish</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="text-gray-900 mb-2 text-xl">5-bosqich</h4>
              <p className="text-gray-600 text-lg">To'liq web-platforma ishga tushirish</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-gray-900 mb-2 text-xl">6-7-bosqich</h4>
              <p className="text-gray-600 text-lg">Pilot loyiha va tijoratlashtirish</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
    </section>
  );
}