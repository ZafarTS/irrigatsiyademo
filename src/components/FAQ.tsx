import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "AI-Irrigatsiya tizimi qanday ishlaydi?",
    answer: "Tizim foydalanuvchidan ekin dalasining koordinatalarini so'raydi, keyin Sun'iy yo'ldoshidan real vaqt rejimida ma'lumotlarni oladi. NDVI, NDWI, NDMI, NDRE va SWIR kabi indekslar hisoblanadi va AI algoritmlari orqali tahlil qilinadi. Natijada fermer dalaning qaysi qismini qachon sug'orish kerakligi, ekin salomatligi va hosil prognozi haqida tavsiyalar oladi."
  },
  {
    question: "Qanday ekinlar uchun ishlatish mumkin?",
    answer: "Tizim deyarli barcha ekin turlari uchun ishlaydi: g'alla, paxta, poliz, sabzavotlar, mevalar va boshqalar. AI modeli turli ekin turlarini aniqlash va har biriga mos tavsiyalar berish uchun o'qitilgan."
  },
  {
    question: "Tizimdan foydalanish uchun nima kerak?",
    answer: "Sizga faqat internet ulanishi va dalangizning koordinatalari kerak bo'ladi. Agar koordinatalarni bilmasangiz, xaritadan dalangizni belgilashingiz mumkin. Maxsus qurilmalar yoki sensorlar o'rnatish shart emas, ammo IoT sensorlar mavjud bo'lsa, yanada aniqroq natijalar olasiz."
  },
  {
    question: "Ma'lumotlar qanchalik aniq?",
    answer: "Sun'iy yo'ldosh 10-20 metr rezolyutsiyada tasvir oladi va har 5 kunda yangilanadi. AI model'larimiz minglab dalalar ma'lumotlari asosida o'qitilgan va 85-90% aniqlikka ega. Mahalliy ob-havo va tuproq ma'lumotlari qo'shilganda aniqlik yanada oshadi."
  },
  {
    question: "Xizmat narxi qancha?",
    answer: "Hozirda MVP bosqichida biz pilot foydalanuvchilar bilan bepul sinov o'tkazamiz. Kelajakda narxlar dalaning hajmiga, talab qilinadigan xizmatlar turiga va foydalanish chastotasiga bog'liq bo'ladi. Maqsadimiz - kichik fermerlar uchun ham qulay narxlar taklif qilish."
  },
  {
    question: "Mobil ilovangiz bormi?",
    answer: "Ha, biz React Native yordamida Android va iOS uchun mobil dastur ishlab chiqmoqdamiz. Bu fermerlar dalaда bo'lganlarida ham tizimdan foydalanishlari mumkin bo'lishini ta'minlaydi."
  },
  {
    question: "Qanday qilib pilot testda ishtirok etishim mumkin?",
    answer: "Agar siz O'zbekistonda fermer bo'lsangiz va tizimimizni sinab ko'rishni istasangiz, bizning jamoa bilan bog'laning. Biz sizning dalangizda bepul pilot test o'tkazib, tizimni sozlashda yordam beramiz va sizning fikr-mulohazalaringizni eshitamiz."
  },
  {
    question: "Tizim internet aloqasi bo'lmasa ham ishlaydi mi?",
    answer: "Asosiy tahlil va yangilanishlar uchun internet kerak. Biroq, kelajakda offline rejimni qo'shamiz - oldindan yuklab olingan ma'lumotlar va tavsiyalar bilan ishlash imkoniyati bo'ladi."
  },
  {
    question: "Ma'lumotlarim xavfsizmi?",
    answer: "Ha, barcha ma'lumotlar shifrlangan va xavfsiz serverлarda saqlanadi. Sizning dalangiz haqidagi ma'lumotlar faqat sizga ko'rinadi va uchinchi shaxslarga berilmaydi. Biz xalqaro ma'lumotlar xavfsizligi standartlariga rioya qilamiz."
  },
  {
    question: "Davlat dasturlari bilan integratsiya bormi?",
    answer: "Biz O'zbekiston Qishloq xo'jaligi vazirligi va boshqa tegishli tashkilotlar bilan hamkorlik qilishga ochiqmiz. Maqsadimiz - tizimni davlat dasturlariga integratsiya qilish va fermerlar uchun yanada qulayroq qilish."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5" />
            <span>Savol-javoblar</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4">
            Ko'p so'raladigan savollar
          </h2>
          <p className="text-gray-600 text-lg">
            Tizim haqida eng muhim savollar va javoblar
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl mb-3">
            Boshqa savollaringiz bormi?
          </h3>
          <p className="text-green-50 mb-6">
            Biz bilan bog'laning, mamnuniyat bilan javob beramiz!
          </p>
          <a href='#contact'>
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-all">
            Bog'lanish
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}