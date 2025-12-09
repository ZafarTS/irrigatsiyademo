import React, { useState } from 'react';
import { Play, Code, Rocket, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { Chatbot } from './Chatbot';
import { APIDemo } from './APIDemo';

export function DemoPage() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-6">
            <Rocket className="w-6 h-6" />
            <span>2-BOSQICH DEMO</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6">
            AI-Irrigatsiya Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sun'iy yo'ldosh ma'lumotlari va AI yordamida aqlli sug'orish tizimining to'liq demonstratsiyasi
          </p>
        </div>

        {/* Demo Video */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FjUvcO7fqDE"
                title="AI-Irrigatsiya Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex items-center gap-3 mb-3">
                <Play className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl text-gray-900">Demo Video - To&apos;liq Ishlash Jarayoni</h3>
              </div>
              <p className="text-gray-700 mb-4">
                5 daqiqalik videoda AI-Irrigatsiya platformasining barcha asosiy funksiyalari amalda ko&apos;rsatilgan.
                Dalani belgilashdan tortib, AI tahlil va tavsiyalar olishgacha bo&apos;lgan butun jarayon.
              </p>
              <a
                href="https://youtu.be/FjUvcO7fqDE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube&apos;da ochish
              </a>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="prose max-w-none">
              <h3 className="text-2xl text-gray-900 mb-4">Videoda ko&apos;rsatilgan</h3>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl text-gray-900 mb-3">Muammo va kontekst</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Videoda O&apos;zbekiston sharoitida yuzaga kelgan suv tanqisligi va ko&apos;r-ko&apos;rona sug&apos;orish muammosi 
                  qisqacha tushuntiriladi. Fermer misolida ko&apos;rsatilganidek, hozirda dalalar ko&apos;pincha "odat bo&apos;yicha" 
                  sug&apos;oriladi: kimdir 3 kunda, kimdir haftasiga bir marta suv beradi, lekin dalaning real namlik holati, 
                  o&apos;simlik stressi yoki kasallik darajasi aniq o&apos;lchanmaydi.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Natija:</strong> suvning 30–40% gacha qismi behuda ketadi, hosil esa potentsial darajasiga yetmaydi.
                </p>
              </div>

              <h4 className="text-xl text-gray-900 mb-4">AI-Irrigatsiya platformasining ish jarayoni</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-green-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">Bosh sahifa va kirish</h5>
                    <p className="text-gray-700">
                      Fermer brauzer orqali web-ilovani ochadi va bosh sahifada tizimning asosiy maqsadi – 
                      "sun&apos;iy yo&apos;ldosh va AI yordamida 30–40% gacha suv tejash, hosildorlikni oshirish" – tushuntiriladi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-blue-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">Dala chegarasini belgilash</h5>
                    <p className="text-gray-700">
                      "Dala chegarasini belgilang" bo&apos;limida fermer xaritada o&apos;z dala hududini topadi, 
                      polygon yordamida chegarasini chizadi. Tizim avtomatik ravishda maydon (gektar/ga), 
                      markaz koordinatalari va tahlil sanasini hisoblab beradi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-purple-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">AI tahlilini boshlash</h5>
                    <p className="text-gray-700">
                      Fermer "AI tahlilini boshlash" tugmasini bosadi. Backend Sentinel-2 sun&apos;iy yo&apos;ldosh 
                      rasmlarini yuklab, NDVI, NDMI, NDWI, NDRE, SWIR kabi spektral indekslarni hisoblaydi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-orange-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">Sug&apos;orish tahlili natijalari</h5>
                    <p className="text-gray-700 mb-2">
                      Natijalar sahifasida "Sug&apos;orish tahlili" blokida qancha suv kerakligi (litr va mm ko&apos;rinishida), 
                      keyingi sug&apos;orishgacha qolgan kunlar va model ishonchliligi (masalan, 91%) ko&apos;rsatiladi.
                    </p>
                    <p className="text-gray-700">
                      Pastda "Sug&apos;orish tavsiyasi" qismida <strong>Critical / Warning / Optimal</strong> holatlaridan 
                      biri chiqarilib, fermerga aniq amal qilinadigan tavsiyalar beriladi (2–3 kun ichida sug&apos;oring, 
                      suv miqdori 21.9 mm va hokazo).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-teal-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center">
                    5
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">Spektral indekslar va xaritalar</h5>
                    <p className="text-gray-700">
                      Spektral indekslar (NDVI, NDMI, NDWI, NDRE, SWIR1/2) raqamli qiymatlari, 
                      Sentinel-2 ning True Color va indeks xaritalari (NDVI, NDMI, SWIR kompozit) 
                      vizual ko&apos;rinishda beriladi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-lg p-5 border-l-4 border-pink-600 shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center">
                    6
                  </div>
                  <div>
                    <h5 className="text-lg text-gray-900 mb-2">Qo&apos;shimcha AI baholar</h5>
                    <p className="text-gray-700">
                      Yakuniy bloklarda tizim ekin turi, kasallik holati, tuproq tahlili va hosil prognozi 
                      bo&apos;yicha birlamchi AI baholarini ko&apos;rsatadi: suv talabi, sho&apos;rlanish darajasi, 
                      namlik, taxminiy hosil (t/ga va so&apos;mda) va monitoring bo&apos;yicha tavsiyalar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <h4 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  Xulosa
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Shu tariqa video muammodan boshlab, yechimning real ishlashiga qadar bo&apos;lgan butun zanjirni – 
                  dalani tanlash, AI tahlil, tavsiya va prognozlarni – aniq va vizual tarzda namoyish qiladi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Description */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl text-gray-900 mb-8">Texnik tavsif</h2>
            
            {/* Problem & Solution Connection */}
            <div className="mb-10">
              <h3 className="text-2xl text-gray-900 mb-4">Muammo va yechim bog&apos;liqiligi</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h4 className="text-xl text-red-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Muammo
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Qishloq xo&apos;jaligida suvning 30–40% gacha isrofi</li>
                    <li>• Hosildorlikning pastligi</li>
                    <li>• Dalaning real holati bo&apos;yicha ma&apos;lumot yetishmasligi</li>
                    <li>• Ko&apos;r-ko&apos;rona "odat bo&apos;yicha" sug&apos;orish</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h4 className="text-xl text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Yechim
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Har bir dala bo&apos;yicha sun&apos;iy yo&apos;ldosh ma&apos;lumotlari</li>
                    <li>• AI modellari asosida aniq tavsiyalar</li>
                    <li>• Raqamli va shaffof qaror qo&apos;llab-quvvatlash</li>
                    <li>• Kasallik/stress, sho&apos;rlanish va hosil prognozi</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                <h4 className="text-xl text-gray-900 mb-3">Demo orqali ko&apos;rsatilgan ta&apos;sir</h4>
                <p className="text-gray-700 leading-relaxed">
                  Demo nafaqat interfeysni, balki suv resurslarini tejash va hosildorlikni oshirishga qaratilgan 
                  real amaliy ta&apos;sirni ham ko&apos;rsatib beradi. Fermer suvni qachon va qancha berish kerakligini 
                  dalilga asoslangan ko&apos;rsatkichlar bilan ko&apos;radi va to&apos;g&apos;ri qaror qabul qiladi.
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-10">
              <h3 className="text-2xl text-gray-900 mb-4">Texnologiyalar, stack va AI yechimlar</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3">☁️ Sun&apos;iy yo&apos;ldosh ma&apos;lumotlari</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Sentinel-2 L2A</strong> (ESA, Copernicus)</li>
                    <li>• Sentinel Hub API orqali olinadi</li>
                    <li>• 10 metrli rezolyutsiya</li>
                    <li>• Har 5 kunda yangilanadi</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3">🗺️ Geo-vizualizatsiya</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Leaflet / Mapbox / Google Maps API</li>
                    <li>• Interaktiv xarita</li>
                    <li>• Polygon chizish va tahrirlash</li>
                    <li>• Real-time koordinata hisoblash</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3"> Backend va hisob-kitob</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Python</strong> (NumPy, Pandas)</li>
                    <li>• Spektral indekslar: NDVI, NDMI, NDWI, NDRE, SWIR1/2</li>
                    <li>• Sho&apos;rlanish indekslari</li>
                    <li>• FastAPI RESTful backend</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3">🤖 AI va Machine Learning</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Random Forest</strong> - sug&apos;orish tavsiyasi (Critical/Warning/Optimal)</li>
                    <li>• Ekin turi va kasallik stressini aniqlash</li>
                    <li>• NDVI/NDMI time-series regressiya - hosil prognozi</li>
                    <li>• Indekslar asosidagi ML modellari</li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3">💻 Frontend</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>React.js</strong> + JavaScript/TypeScript</li>
                    <li>• Tailwind CSS - zamonaviy dizayn</li>
                    <li>• Responsive web-dashboard</li>
                    <li>• Real-time ma&apos;lumotlar vizualizatsiyasi</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-xl text-gray-900 mb-3">📊 Ma&apos;lumotlar bazasi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• PostgreSQL + PostGIS</li>
                    <li>• Geospatial ma&apos;lumotlar saqlash</li>
                    <li>• Tarixiy ma&apos;lumotlar va time-series</li>
                    <li>• Redis - kesh va tez ishlash</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Status */}
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">Loyiha holati va keyingi qadamlar</h3>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl text-gray-900">Hozirgi holat: MVP (Minimum Viable Product)</h4>
                    <p className="text-gray-700">Ishlayotgan demo versiya</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 mt-4">
                  <h5 className="text-lg text-gray-900 mb-3">Tizim hozirda bajara oladigan vazifalar:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Real koordinatalar bo&apos;yicha dalani belgilash</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Sentinel-2 ma&apos;lumotlarini avtomatik yuklash va tozalash</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Asosiy spektral indekslarni hisoblash</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Random Forest asosida sug&apos;orish tavsiyasi</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Suv miqdorini aniq hisoblash (litr va mm)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">Tuproq, kasallik va hosil prognozini ko&apos;rsatish</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <h4 className="text-3xl text-gray-900">Kelajak rivojlanish yo&apos;nalishi</h4>
                  <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Mobile App */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h5 className="text-xl text-gray-900">Mobil ilova (iOS va Android)</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Native mobile app - har qanday joyda qulay foydalanish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Offline rejim - internet bo&apos;lmasa ham ishlaydi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Push bildirishnomalar - muhim ogohlantirishlar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>GPS integratsiya - aniq joylashuv aniqlash</span>
                      </li>
                    </ul>
                  </div>

                  {/* Personal Account */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <h5 className="text-xl text-gray-900">Shaxsiy akkaunt tizimi</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Har bir fermer/dehqon uchun shaxsiy profil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Dala koordinatalari akkauntga bog&apos;lanadi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Bir akkauntda bir nechta dalalarni boshqarish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Xavfsiz autentifikatsiya va ma&apos;lumotlar himoyasi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Daily AI Recommendations */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <h5 className="text-xl text-gray-900">Kunlik AI tavsiyalar</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Har kuni dala holati haqida avtomatik tahlil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>SMS/Telegram/Push orqali real-time xabarlar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Ob-havo prognozi bilan integratsiya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Shoshilinch vaziyatlarda tezkor ogohlantirish</span>
                      </li>
                    </ul>
                  </div>

                  {/* Predictive Analytics */}
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h5 className="text-xl text-gray-900">Prognozlash va tahlil</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>1-2 oylik tarixiy ma&apos;lumotlar asosida tahlil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Keyingi bajarilishi kerak bo&apos;lgan ishlar bashorati</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Hosil yig&apos;ish muddati va miqdori prognozi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span>Mavsumiy rejalashtirish va optimallashtirish</span>
                      </li>
                    </ul>
                  </div>

                  {/* Advanced Features */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🔬</span>
                      </div>
                      <h5 className="text-xl text-gray-900">Qo&apos;shimcha xususiyatlar</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>IoT sensorlar bilan integratsiya</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Dron monitoring ma&apos;lumotlari qo&apos;shish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Xarajatlar va daromadlarni boshqarish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Fermerlar jamoasi va tajriba almashish</span>
                      </li>
                    </ul>
                  </div>

                  {/* AI Model Enhancement */}
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-indigo-200 hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h5 className="text-xl text-gray-900">AI modellarini takomillashtirish</h5>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>LSTM va Deep Learning modellarini joriy qilish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>Ko&apos;proq ekin turlari uchun maxsus modellar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>Kasallik aniqlash aniqligini 95%+ ga oshirish</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>Real dala ma&apos;lumotlari bilan doimiy o&apos;qitish</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pilot Program */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border-2 border-white/30">
                    <span className="text-4xl">🌾</span>
                  </div>
                  <div>
                    <h5 className="text-3xl mb-2">Pilot sinovlar dasturi</h5>
                    <p className="text-green-100">2025-yil bahori boshlanadi</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                  <h6 className="text-xl mb-4">Pilot loyiha hududlari:</h6>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📍</span>
                        <span className="text-xl">Qashqadaryo viloyati</span>
                      </div>
                      <p className="text-sm text-green-100 ml-9">Paxta va bug&apos;doy yetishtiruvchi fermer xo&apos;jaliklari</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📍</span>
                        <span className="text-xl">Samarqand viloyati</span>
                      </div>
                      <p className="text-sm text-green-100 ml-9">Bog&apos; va uzumzorlar, sabzavot ekinlari</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📍</span>
                        <span className="text-xl">Farg&apos;ona viloyati</span>
                      </div>
                      <p className="text-sm text-green-100 ml-9">Intensiv qishloq xo&apos;jalik hududlari</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">📍</span>
                        <span className="text-xl">Navoiy viloyati</span>
                      </div>
                      <p className="text-sm text-green-100 ml-9">Qurg&apos;oqchilik zonasida sinov dasturlari</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-3xl mb-2">50+</div>
                    <div className="text-green-100">Fermer xo&apos;jaliklari</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-3xl mb-2">500+ ha</div>
                    <div className="text-green-100">Umumiy maydon</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-3xl mb-2">6 oy</div>
                    <div className="text-green-100">Sinov davri</div>
                  </div>
                </div>

                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-lg">
                    <strong>Maqsad:</strong> Real sharoitlarda suv tejash samaradorligini o&apos;lchash, 
                    hosildorlik o&apos;sishini kuzatish va foydalanuvchi tajribasini yaxshilash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Access Link */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <ExternalLink className="w-10 h-10" />
              <h2 className="text-4xl">Ishlayotgan Demo Ilova</h2>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Bizning MVP prototipimizni bevosita sinab ko&apos;ring. Dala koordinatalarini kiriting va AI tavsiyalarini real vaqtda oling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://irrigatsiyamvp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all text-lg shadow-lg"
              >
                <ExternalLink className="w-6 h-6" />
                <span>Demo platformani ochish</span>
              </a>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/30">
                <p className="text-sm text-white mb-2">💡 Demo uchun test ma&apos;lumotlari:</p>
                <p className="text-sm text-blue-100">Koordinatalar: 41.2995°N, 69.2401°E</p>
                <p className="text-sm text-blue-100">Maydon: 11.2 gektar | Ekin: Paxta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Qo&apos;shimcha funksionallik va API demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI chatbot va RESTful API orqali tizim imkoniyatlarini to&apos;liq sinab ko&apos;ring
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chatbot Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl text-gray-900">AI Chatbot</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Loyiha haqida savollaringizga javob beruvchi AI chatbot. Pastki o&apos;ng burchakdagi tugmani bosing. 
              </p> 
  <button
                onClick={() => setShowChatbot(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all text-lg"
              >
                Chatbotni ochish
              </button>
            </div>

            {/* API Demo Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl text-gray-900">API Demo</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                AI tavsiyalar API ni sinab ko&apos;ring. Real vaqtda sug&apos;orish tavsiyalarini oling.
              </p>
              <a
                href="#api-demo"
                className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all text-lg"
              >
                API ni sinash
              </a>
            </div>
          </div>
        </section>

        {/* API Demo Section */}
        <div id="api-demo" className="mt-20">
          <APIDemo />
        </div>
      </div>

      {/* Chatbot Component */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
}
