import React from 'react';
import { Award, Globe, GraduationCap, Target, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const strengths = [
  {
    icon: Globe,
    title: "Xalqaro tajriba va ilmiy yutuqlar",
    description: "Jamoa rahbari Xitoyda 1 yillik AI stajirovka, Ispaniyada 2 oylik suv texnologiyalari stajirovkasini o'tgan. Kamolov Azizbek Ispaniyaning Cantabriya universitetida PhD olgan (Scopus h-6, WoS h-5)."
  },
  {
    icon: GraduationCap,
    title: "Kuchli ilmiy salohiyat",
    description: "Jamoa tarkibida Scopus va Web of Science bazalarida yuqori h-index ko'rsatkichlariga ega olimlar mavjud. Qishloq xo'jaligi va atrof-muhit muhandisligi bo'yicha chuqur bilim."
  },
  {
    icon: Zap,
    title: "Texnik ekspertiza va AI bilimi",
    description: "Random Forest, ANFIS, neyron tarmoqlari, sun'iy yo'ldosh ma'lumotlarini qayta ishlash, web dasturlash va kiberxavfsizlik bo'yicha professional ko'nikmalar."
  },
  {
    icon: Target,
    title: "Mahalliy muammolarni chuqur tushunish",
    description: "O'zbekiston qishloq xo'jaligi va suv resurslarini boshqarish muammolarini bevosita bilamiz. Mahalliy sharoitlarga moslashtirilgan yechimlar yaratamiz."
  }
];

export function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-5 py-3 rounded-full text-lg mb-6">
            <Award className="w-6 h-6" />
            <span>Bizning ustunliklarimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Nega aynan bizning jamoamiz?
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Xalqaro tajriba, ilmiy salohiyat va texnik ekspertiza birlashmasi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {strengths.map((strength, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:scale-[1.02] duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <strength.icon className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-4 text-2xl">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">
              Bizni ajratib turuvchi jihatlar
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5 bg-green-50 p-5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  ✓
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2 text-xl">Multidistsiplinar yondashuv</h4>
                  <p className="text-gray-600 text-lg">
                    AI mutaxassislari, dasturchilar va qishloq xo'jaligi olimlarining hamkorligi
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-blue-50 p-5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  ✓
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2 text-xl">Mahalliy bozorni bilish</h4>
                  <p className="text-gray-600 text-lg">
                    O'zbekiston fermerlari ehtiyojlari va muammolarini chuqur tushunish
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-purple-50 p-5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  ✓
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2 text-xl">Xalqaro standartlar</h4>
                  <p className="text-gray-600 text-lg">
                    Xorijda o'rganilgan eng so'nggi AI texnologiyalari va yondashuvlar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 bg-orange-50 p-5 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  ✓
                </div>
                <div>
                  <h4 className="text-gray-900 mb-2 text-xl">Kuchli motivatsiya</h4>
                  <p className="text-gray-600 text-lg">
                    O'zbekiston qishloq xo'jaligini rivojlantirishga hissa qo'shish ishtiyoqi
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjA1NDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-8 shadow-2xl max-w-sm">
              <p className="text-lg leading-relaxed">
                "Jamoa a'zolarimizning tajribasi va bilimi loyihaning muvaffaqiyatini kafolatlaydi"
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
    </section>
  );
}
