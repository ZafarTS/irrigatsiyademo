import React from 'react';
import { Code2, Database, Brain, Cloud, Satellite, Layers, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const techStack = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    tools: [
      "Random Forest - Sug'orish qarorini klassifikatsiya qilish",
      "ANFIS - Adaptive Neuro-Fuzzy Inference System",
      "Scikit-learn - Machine Learning algoritmlari",
      "LSTM - Hosil bashorati uchun time series modeli"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Sun'iy yo'ldosh ma'lumotlari",
    icon: Satellite,
    tools: [
      "Sun'iy yo'ldoshda maxsus API bor",
      "Radar ma'lumotlari (bulutli kunlar)",
      "GDAL & Rasterio - Geospatial ma'lumotlarni qayta ishlash",
      "NumPy & Pandas - Ma'lumotlar tahlili"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend & Hisoblash",
    icon: Database,
    tools: [
      "Python - Asosiy dasturlash tili",
      "Streamlit - Interaktiv web dashboard",
      "Conda - Virtual environment",
      "GitHub - Version control"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Vizualizatsiya",
    icon: Code2,
    tools: [
      "Plotly & Matplotlib - Grafiklar va diagrammalar",
      "Leaflet / Folium - Interaktiv xaritalar",
      "K-means - Zonal segmentatsiya",
      "Color mapping - NDVI/NDMI ranglar"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Infrastruktur & Hosting",
    icon: Cloud,
    tools: [
      "Railway / Render - Cloud hosting",
      "Streamlit Cloud - Web deployment",
      "API Integration - Sentinel Hub API",
      "Environment variables - Xavfsizlik"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Sun'iy yo'ldosh ma'lumotlarini yig'ish",
    description: "Sun'iy yo'ldosh tasvirlarini API orqali olish. Zarurat bo'lsa Sun'iy yo'ldosh radar ma'lumotlarini qo'shish (bulutli kunlarda).",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "02",
    title: "Tasvirlarni tahlil qilish",
    description: "Bulut niqobi (cloud mask), vegetatsiya maskasi va spektral indekslarni hisoblash: NDVI, NDMI, NDWI, NDRE, SWIR.",
    color: "from-purple-500 to-purple-600"
  },
  {
    number: "03",
    title: "Zonal segmentatsiya",
    description: "K-means algoritmi yordamida dalani 3 zonaga bo'lish: Critical (quruq), Warning (o'rtacha), Optimal (namlik yetarli).",
    color: "from-green-500 to-green-600"
  },
  {
    number: "04",
    title: "AI modeli orqali tavsiya",
    description: "Random Forest modeli NDVI, NDRE, NDMI, SWIR asosida har zona uchun sug'orish holatini klassifikatsiya qiladi.",
    color: "from-orange-500 to-orange-600"
  },
  {
    number: "05",
    title: "Veb-dashbordda natija",
    description: "Indeks xaritalari, vaqt qatori grafiklari, AI tavsiyasi va dala koordinatalari bo'yicha interaktiv ko'rinish.",
    color: "from-red-500 to-red-600"
  }
];

const aiModules = [
  {
    icon: "🤖",
    title: "Random Forest Classification",
    description: "Sug'orish ehtiyojini aniqlash uchun Random Forest modeli. NDVI, NDMI, NDWI va SWIR indekslari asosida har zonaning hozirgi namlik holatini baholaydi."
  },
  {
    icon: "🌱",
    title: "Ekin turini aniqlash (CropType AI)",
    description: "NDVI vaqt qatori va spektral imzolar asosida paxta, g'alla, makkajo'xori va boshqa ekinlarni avtomatik tasniflash."
  },
  {
    icon: "🔬",
    title: "Kasallik va stress aniqlash",
    description: "Red-Edge kanallar (B05, B06, B07) va NDRE indeksidan foydalanib kasallik belgisini NDVI o'zgarmasdan oldin aniqlaymiz."
  },
  {
    icon: "💧",
    title: "Tuproq namligi va sho'rlanish",
    description: "SWIR 1–2 kanallari yordamida tuproqdagi minerallar, sho'rlanish va namlik farqlarini aniqlash."
  },
  {
    icon: "📈",
    title: "Hosil prognozi (LSTM)",
    description: "NDVI va NDMI vaqt qatorlari asosida regressiya modeli orqali hosilning taxminiy hajmini aniqlash. Kelajakda LSTM time series modeli."
  }
];

export function Technology() {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <Layers className="w-5 h-5" />
            <span>Texnologiya va yechim</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Muammoni qanday hal qilamiz
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Suv tanqisligini sun'iy yo'ldosh ma'lumotlari, AI va raqamli tahlil yordamida hal qilamiz
          </p>
        </div>

        {/* Main Approach */}
        <div className="mb-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
          <div className="text-center mb-8">
            <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
              Asosiy yondashuv
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Dalalardagi namlik, vegetatsiya, sho'rlanish va ekin holatini masofaviy aniqlash uchun 
              Sun'iy yo'ldosh tasvirlarini qayta ishlaydi. AI modeli qaysi hududni sug'orish kerakligini 
              aniq aniqlaydi va 20–30% suv tejashga yordam beradi.
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-8 text-center">
            Rejamizdagi asosiy qadamlar
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 h-full">
                  <div className={`text-4xl bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                    {step.number}
                  </div>
                  <h4 className="text-gray-900 mb-2 text-sm">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-green-600 text-xl z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-4 text-center">
            Foydalanayotgan texnologiyalar
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Zamonaviy AI texnologiyalari va professional vositalar yordamida ishlaydigan tizim
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className={`h-2 bg-gradient-to-r ${tech.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center text-white`}>
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-gray-900">
                      {tech.category}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0 mt-1">•</span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* AI Integration */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-4 text-center">
            AI texnologiyalaridan qanday foydalanmoqchimiz
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Har xil AI modullari orqali kompleks tahlil va aniq bashoratlar
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiModules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="text-4xl mb-3">{module.icon}</div>
                <h4 className="text-gray-900 mb-2">
                  {module.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1744035181460-4e2d829b9da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjB0ZWNobm9sb2d5JTIwZGF0YXxlbnwxfHx8fDE3NjQyMTgwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Satellite technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl text-gray-900 mb-4">
                  Spektral indekslar va ularning ahamiyati
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <strong className="text-gray-900">NDVI</strong>
                    <span className="text-gray-600 text-sm"> - O'simlik zichligi va vegetatsiya salomatligi</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <strong className="text-gray-900">NDMI</strong>
                    <span className="text-gray-600 text-sm"> - Namlik indeksi, suv tanqisligini aniqlash</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <strong className="text-gray-900">NDWI</strong>
                    <span className="text-gray-600 text-sm"> - Suvga sezgirlik, suv resurslarini aniqlash</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <strong className="text-gray-900">NDRE</strong>
                    <span className="text-gray-600 text-sm"> - Red-Edge, kasallik va stressni erta aniqlash</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <strong className="text-gray-900">SWIR</strong>
                    <span className="text-gray-600 text-sm"> - Tuproq namligi va sho'rlanishni aniqlash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}