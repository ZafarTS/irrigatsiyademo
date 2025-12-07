import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  onClose: () => void;
}

export function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Assalomu alaykum! Men AI-Irrigatsiya loyihasi bo\'yicha yordam beruvchi chatbotman. Sizga qanday yordam bera olaman?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Rule-based responses
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Check if message is related to the project topic
    const projectKeywords = [
      'loyiha', 'ai', 'irrigatsiya', 'sug\'orish', 'suv', 'fermer', 'dala', 'ekin',
      'o\'simlik', 'tuproq', 'yo\'ldosh', 'sentinel', 'ndvi', 'ndwi', 'ndmi', 'texnologiya',
      'narx', 'qancha', 'bog\'lanish', 'demo', 'jamoa', 'kim', 'qachon', 'qayerda',
      'afzallik', 'foyda', 'hosil', 'dastur', 'mobil', 'app', 'api', 'internet',
      'qanday', 'nima', 'nega', 'ishlaydimi', 'ishlatish', 'boshlash', 'o\'rnatish',
      'yuklab', 'download', 'bepul', 'to\'lov', 'obuna', 'tarif', 'plan',
      'sensor', 'iot', 'ma\'lumot', 'tahlil', 'prognoz', 'bashorat', 'kasal',
      'stress', 'monitoring', 'real-time', 'xarita', 'koordinata', 'gps',
      'help', 'yordam', 'qo\'llab', 'support', 'muammo', 'problem', 'yechim',
      'irrigat', 'qishloq', 'xo\'jalik', 'hackathon', 'startup', 'biznes',
      'integratsiya', 'sinov', 'test', 'pilot', 'dasturchi', 'developer'
    ];

    const isProjectRelated = projectKeywords.some(keyword => message.includes(keyword));

    if (!isProjectRelated && message.length > 3) {
      return 'Kechirasiz, men faqat AI-Irrigatsiya loyihasi doirasida savollarga javob bera olaman. 🙏\n\nIltimos, loyihamiz, texnologiyalar, xususiyatlar yoki qanday foydalanish haqida savol bering. Sizga yordam berishdan xursand bo\'laman!';
    }

    // Salomlashish
    if (message.includes('salom') || message.includes('assalom') || message.includes('hello') || message.includes('hi')) {
      return 'Assalomu alaykum! 👋\n\nQanday yordam bera olaman? Loyiha haqida savol bering.';
    }

    // Rahmat
    if (message.includes('rahmat') || message.includes('tashakkur') || message.includes('thanks') || message.includes('thank you')) {
      return 'Arzimaydi! 😊 Boshqa savolingiz bo\'lsa, bemalol so\'rang.';
    }

    // Xayr
    if (message.includes('xayr') || message.includes('hayr') || message.includes('bye') || message.includes('ko\'rishguncha')) {
      return 'Xayr! Muvaffaqiyatlar tilaymiz! 🌱';
    }

    // Loyiha haqida
    if (message.includes('loyiha') || message.includes('nima qiladi') || message.includes('qanday ishlaydi') || message.includes('bu nima')) {
      return 'AI-Irrigatsiya - bu O\'zbekiston fermerlari uchun maxsus ishlab chiqilgan aqlli sug\'orish tizimi! 🌾💧\n\nTizim Sentinel-2 sun\'iy yo\'ldoshidan olingan ma\'lumotlar asosida dalangizni tahlil qiladi va quyidagilarni ta\'minlaydi:\n\n✅ NDVI, NDWI, NDMI, NDRE, SWIR indekslarini hisoblash\n✅ Dalaning qaysi qismini qachon sug\'orish kerakligini aniqlash\n✅ Kerakli suv miqdorini aniq ko\'rsatish\n✅ Ekin kasalliklari va stressini erta aniqlash\n✅ Hosil prognozi va tavsiyalar\n✅ 24/7 real-time monitoring';
    }

    // Kimlar uchun
    if (message.includes('kimlar uchun') || message.includes('auditoriya') || message.includes('foydalanuvchi') || message.includes('kim ishlatadi')) {
      return 'AI-Irrigatsiya tizimi quyidagilar uchun mo\'ljallangan: 👥\n\n🌾 **Fermerlar** - kichik va o\'rta fermer xo\'jaliklari\n🏢 **Agrofirmalar** - yirik qishloq xo\'jalik kompaniyalari\n🎓 **Tadqiqotchilar** - qishloq xo\'jalik ilmiy markazlari\n📊 **Davlat tashkilotlari** - sug\'orish va suv resurslari boshqarmalari\n\nHozirda O\'zbekistonda 1 million ga yaqin potensial foydalanuvchi mavjud. Xususan, Farg\'ona, Andijon, Samarqand, Qashqadaryo va Surxondaryo viloyatlaridagi fermerlar uchun juda foydali!';
    }

    // Texnologiyalar - batafsil
    if (message.includes('texnologiya') || message.includes('stack') || message.includes('qanday yaratilgan') || message.includes('ishlab chiqilgan')) {
      return 'Bizning texnologiya stack va arxitektura: 💻\n\n**Frontend:**\n• React.js + TypeScript - zamonaviy UI\n• Tailwind CSS - responsive dizayn\n• Leaflet/Mapbox - interaktiv xaritalar\n• Recharts - ma\'lumotlar vizualizatsiyasi\n\n**Backend:**\n• Python + FastAPI - yuqori tezlikdagi API\n• PostgreSQL + PostGIS - geospatial ma\'lumotlar\n• Redis - kesh va tez ishlash\n\n**AI/ML:**\n• TensorFlow - neural network modellari\n• PyTorch - deep learning\n• Scikit-learn - klassik ML algoritmlar\n• OpenCV - rasm qayta ishlash\n\n**Sun\'iy yo\'ldosh:**\n• Sentinel-2 (ESA) - 10m rezolyutsiya\n• Google Earth Engine API\n• GDAL/Rasterio - geospatial qayta ishlash';
    }

    // NDVI va indekslar
    if (message.includes('ndvi') || message.includes('ndwi') || message.includes('ndmi') || message.includes('ndre') || message.includes('swir') || message.includes('indeks')) {
      return 'Biz quyidagi vegetatsiya indekslaridan foydalanamiz: 📊\n\n🌿 **NDVI (Normalized Difference Vegetation Index)**\n- O\'simliklarning "yashil" darajasi va biomassasini aniqlaydi\n- 0.2-0.4: zaif vegetatsiya, 0.4-0.6: o\'rtacha, 0.6-0.9: yaxshi\n\n💧 **NDWI (Normalized Difference Water Index)**\n- O\'simlik va tuproqdagi suv miqdorini ko\'rsatadi\n- Sug\'orish zarurligini aniqlash uchun\n\n🌡️ **NDMI (Normalized Difference Moisture Index)**\n- Tuproq namligi va suv stressi indikatori\n\n🍃 **NDRE (Normalized Difference Red Edge)**\n- Azot miqdori va o\'simlik sog\'lig\'i\n\n🏜️ **SWIR (Short Wave Infrared)**\n- Tuproq namligi va mineral tarkibi';
    }

    // Sentinel-2
    if (message.includes('sentinel') || message.includes('yo\'ldosh') || message.includes('satellite') || message.includes('sun\'iy yo\'ldosh')) {
      return 'Biz Sentinel-2 sun\'iy yo\'ldoshidan foydalanamiz: 🛰️\n\n**Nima uchun Sentinel-2?**\n• Bepul va ochiq ma\'lumotlar (ESA tomonidan)\n• Har 5 kunda yangi tasvir\n• 10 metrli rezolyutsiya\n• 13 ta spektral diapazon\n• Bulut filtratsiyasi\n\n**Qanday ishlaydi?**\n1. Dala koordinatalarini kiritasiz\n2. Oxirgi 30 kun ichidagi eng sifatli tasvirni yuklaymiz\n3. Atmosfera korreksiyasini qo\'llaymiz\n4. NDVI, NDWI va boshqa indekslarni hisoblaymiz\n5. AI model tahlil qiladi va tavsiya beradi';
    }

    // Afzalliklar va natijalar
    if (message.includes('afzallik') || message.includes('foyda') || message.includes('natija') || message.includes('nima beradi') || message.includes('nega foydali')) {
      return 'AI-Irrigatsiya tizimi quyidagi natijalarni beradi: 🎯\n\n💧 **Suv tejash: 20-30%**\n- Yiliga 10 mlrd m³ ga yaqin suv tejash potentsiali\n- Faqat kerakli joylarga, kerakli miqdorda suv\n\n📈 **Hosildorlik oshishi: 15-25%**\n- Optimal sug\'orish orqali\n- Stress va kasalliklarni oldini olish\n\n💰 **Xarajatlarni kamaytirish:**\n- Elektr energiya tejash (nasos ishlash vaqti)\n- Ishchi kuchi samaradorligi\n- O\'g\'it va kimyoviy moddalar optimizatsiyasi\n\n🌱 **Ekologik foyda:**\n- Tuproq sho\'rlanishini kamaytirish\n- Suv havzalarini himoya qilish\n- Barqaror qishloq xo\'jalik\n\n⏰ **Vaqt tejash:**\n- Avtomatik monitoring\n- Real-time ogohlantirishlar\n- Mobil ilovada boshqarish';
    }

    // Jarayon va bosqichlar
    if (message.includes('jarayon') || message.includes('qadamlar') || message.includes('bosqich') || message.includes('qanday ishlaydi')) {
      return 'Tizim 6 bosqichda ishlaydi: 🔄\n\n**1️⃣ Dala ro\'yxatdan o\'tkazish**\nKoordinatalar yoki xaritadan dala chegaralarini belgilash\n\n**2️⃣ Ma\'lumot yig\'ish**\nSentinel-2 dan oxirgi tasvirlarni yuklash (har 5 kunda yangilanadi)\n\n**3️⃣ Qayta ishlash**\nAtmosfera korreksiyasi, bulutlarni filtrlash, indekslarni hisoblash\n\n**4️⃣ AI tahlil**\nNeural network yordamida dalani zonalarga ajratish: Critical, Warning, Optimal\n\n**5️⃣ Tavsiyalar**\nQaysi zona, qachon, qancha suv kerakligini aniqlash\n\n**6️⃣ Monitoring**\nReal-time kuzatuv, tarixiy ma\'lumotlar, prognozlar\n\n✅ Hamma jarayon 100% avtomatik!';
    }

    // Narx va to'lov
    if (message.includes('narx') || message.includes('qancha') || message.includes('to\'lov') || message.includes('bepul') || message.includes('obuna') || message.includes('tarif')) {
      return 'Narxlar va tarif rejalar: 💳\n\n**Hozirgi holat:**\nLoyiha Prototype bosqichida. Pilot dastur davomida 5-10 fermer xo\'jaligi bilan **BEPUL** test qilamiz!\n\n**Kelajakdagi tarif rejalar (rejalashtirilmoqda):**\n\n🌱 **Basic - 200,000 so\'m/oy**\n- 50 gacha gektar\n- Asosiy indekslar\n- Haftalik yangilanish\n\n🌾 **Professional - 500,000 so\'m/oy**\n- 200 gacha gektar\n- Barcha indekslar\n- Kunlik yangilanish\n- Kasallik bashorati\n- SMS ogohlantirishlar\n\n🏢 **Enterprise - shaxsiy taklif**\n- Cheksiz maydon\n- API kirish\n- IoT sensor integratsiya\n- Maxsus tahlillar\n- 24/7 texnik yordam\n\n📞 Batafsil: eshbobayevjalol@gmail.com';
    }

    // Bog'lanish
    if (message.includes('bog\'lanish') || message.includes('aloqa') || message.includes('kontakt') || message.includes('telefon') || message.includes('email')) {
      return 'Biz bilan bog\'lanish uchun: 📞\n\n👤 **Jaloliddin Eshbobayev**\nLoyiha rahbari va AI muhandis\n\n📧 Email: eshbobayevjalol@gmail.com\n📱 Telefon: +998 93 803 2741\n💼 LinkedIn: linkedin.com/in/jaloliddin-eshbobayev\n💻 GitHub: github.com/Jaloliddin6565\n🌐 Website: ai-irrigation.uz\n\nIsh vaqti: Dushanba-Shanba, 9:00-18:00\nJavob berish vaqti: 24 soat ichida\n\nSavollaringiz, takliflaringiz yoki hamkorlik bo\'yicha bemalol murojaat qiling! 🤝';
    }

    // Demo va sinov
    if (message.includes('demo') || message.includes('sinab ko\'rish') || message.includes('test') || message.includes('sinov') || message.includes('ko\'rish')) {
      return 'Demo va sinov imkoniyatlari: 🎮\n\n**🎥 Demo Video**\nTo\'liq funksionallikni ko\'rsatuvchi 5 daqiqalik video\n\n**💻 Online Demo**\nLink: https://ai-irrigation-demo.vercel.app\n\nTest hisobi:\n📧 Login: demo@ai-irrigation.uz\n🔑 Parol: demo2024\n\n**📍 Demo dala:**\nToshkent viloyati, Qibray tumani\nKoordinata: 41.2995°N, 69.2401°E\nMaydon: 11.2 gektar, Ekin: Paxta\n\n**🔧 Sinab ko\'rishingiz mumkin:**\n- Real Sentinel-2 ma\'lumotlari\n- Indekslarni hisoblash\n- AI tavsiyalarini olish\n- Xaritada ko\'rish\n- Tarixiy ma\'lumotlar\n\n**📋 Pilot dastur**\nO\'z dalangizda bepul sinash uchun murojaat qiling!';
    }

    // Jamoa haqida
    if (message.includes('jamoa') || message.includes('kim yaratgan') || message.includes('dasturchilar') || message.includes('muhandislar') || message.includes('team')) {
      return 'Bizning jamoa: 👥\n\n**Jaloliddin Eshbobayev**\n🎓 AI va Machine Learning mutaxassisi\n💼 Full-stack developer\n🏆 Hackathon g\'olibi\n📊 3+ yillik tajriba AI loyihalarida\n\n**Texnik ko\'nikmalar:**\n• Python, JavaScript/TypeScript, React\n• TensorFlow, PyTorch, Scikit-learn\n• Geospatial data processing\n• Remote sensing va satellite imagery\n• RESTful API dizayn\n\nBiz yosh, g\'ayratli va innovatsion yechimlar yaratishga qodir jamoamiz. Maqsadimiz - O\'zbekiston qishloq xo\'jaligini raqamlashtirish va samaradorligini oshirish! 🚀';
    }

    // Mobile app
    if (message.includes('mobil') || message.includes('ilova') || message.includes('app') || message.includes('android') || message.includes('ios') || message.includes('telefon')) {
      return 'Mobil ilova haqida: 📱\n\n**Hozirgi holat:**\nWeb versiya mavjud (responsive dizayn, telefondan foydalanish mumkin)\n\n**Kelajakdagi rejalar:**\n\n📲 **iOS va Android ilovasi**\n- Native mobile app (React Native)\n- Offline rejim\n- Push bildirishnomalar\n- GPS integratsiya\n- Kamera orqali kasallik aniqlash\n\n**Chiqish sanasi:**\n2025 yil 2-chorak (Aprel-Iyun)\n\n**Mobil ilovada qo\'shimcha imkoniyatlar:**\n• Ovozli buyruqlar (o\'zbek tilida)\n• Oflayn xarita\n• QR kod orqali dala qo\'shish\n• Fermerlar jamoasi (chat)\n• Narx monitoring\n\nYangiliklar uchun kuzatib boring!';
    }

    // IoT va sensorlar
    if (message.includes('sensor') || message.includes('iot') || message.includes('qurilma') || message.includes('device') || message.includes('monitoring')) {
      return 'IoT va sensor integratsiya: 🔧\n\n**Qo\'llab-quvvatlanadigan sensorlar:**\n\n💧 **Tuproq namligi sensori**\n- 0-100% namlik\n- 10-30-60 cm chuqurlikda\n- Real-time ma\'lumot\n\n🌡️ **Havo harorati va namlik**\n- Mikroklimat monitoring\n- Shudring nuqtasi hisoblash\n\n🌧️ **Yog\'ingarchilik sensori**\n- Yomg\'ir miqdori\n- Intensivlik o\'lchash\n\n📡 **Ma\'lumot uzatish:**\n- LoRaWAN (10 km radiusda)\n- 4G/LTE\n- Wi-Fi\n\n**Afzalliklari:**\n✅ Sun\'iy yo\'ldosh + sensor = aniqlik 95%+\n✅ Avtomatik sug\'orish tizimi boshqaruvi\n✅ Real-time ogohlantirishlar\n\n💰 Sensor to\'plami: 2,500,000 so\'m (10 ta dala uchun)\n\nBatafsil: eshbobayevjalol@gmail.com';
    }

    // Integratsiya
    if (message.includes('integratsiya') || message.includes('api') || message.includes('ulash') || message.includes('bog\'lash') || message.includes('connect')) {
      return 'Integratsiya imkoniyatlari: 🔌\n\n**API Access**\n\n📊 **Ma\'lumotlar API**\n- REST API (JSON format)\n- GraphQL\n- WebSocket (real-time)\n\n**Asosiy endpointlar:**\n```\nPOST /api/v1/irrigation/recommendation\nPOST /api/v1/crop/classify\nGET /api/v1/field/{id}/history\nPOST /api/v1/crop/health\nGET /api/v1/indices/calculate\n```\n\n🔗 **Integratsiya qilish mumkin:**\n\n• ERP tizimlari (1C, SAP)\n• Qishloq xo\'jalik platformalari\n• Avtomatik sug\'orish tizimlari\n• Dron monitoring tizimlari\n• Moliya tizimlari (xarajat hisoblash)\n• IoT platformalar\n\n📚 **Dokumentatsiya:**\nhttps://docs.ai-irrigation.uz/api\n\n🔑 **API kalit olish:**\nEnterprise tarif rejasida\n\nDemo API key: demo_test_key_2024';
    }

    // Qanday boshlash
    if (message.includes('boshlash') || message.includes('qanday boshlayman') || message.includes('start') || message.includes('ro\'yxat') || message.includes('registratsiya')) {
      return 'Boshlash juda oson! 5 qadam: 🚀\n\n**1️⃣ Ro\'yxatdan o\'ting**\nWebsayt: ai-irrigation.uz/register\nYoki email: eshbobayevjalol@gmail.com\n\n**2️⃣ Dalangizni qo\'shing**\n- Xaritada belgilang yoki\n- Koordinatalarni kiriting yoki\n- Shapefile yuklang\n\n**3️⃣ Ekin turini tanlang**\nPaxta, bug\'doy, sholi, makkajo\'xori va boshqalar\n\n**4️⃣ Boshlang\'ich ma\'lumot**\nEkish sanasi, navlar, sug\'orish tarixi (ixtiyoriy)\n\n**5️⃣ Monitoring boshlandi! ✅**\n\n**Kerakli hujjatlar:**\n• Dala hujjatlari (ixtiyoriy)\n• Telefon raqam\n• Email\n\n**Qo\'shimcha yordam:**\n- Video qo\'llanma\n- Onlayn webinar (har Juma 15:00)\n- Telefon qo\'llab-quvvatlash\n\n💡 Pilot dastur: BEPUL 3 oy!';
    }

    // Xavfsizlik va ma'lumotlar
    if (message.includes('xavfsiz') || message.includes('ma\'lumot') || message.includes('himoya') || message.includes('privacy') || message.includes('security')) {
      return 'Ma\'lumotlar xavfsizligi: 🔒\n\n**Ma\'lumotlaringiz 100% himoyalangan:**\n\n🛡️ **Texnik xavfsizlik:**\n• SSL/TLS shifrlash\n• AES-256 ma\'lumotlar bazasi shifrlash\n• 2-faktorli autentifikatsiya\n• GDPR va ISO 27001 standartlariga muvofiq\n• Muntazam backup (kunlik)\n\n📊 **Sizning ma\'lumotlaringiz:**\n• Faqat siz ko\'rasiz\n• Uchinchi tomonlarga berilmaydi\n• Reklama maqsadida ishlatilmaydi\n• Istalgan vaqt o\'chirishingiz mumkin\n\n🇺🇿 **Serverlar:**\nO\'zbekiston hududi yoki yaqin mintaqada\n\n📜 **Shartnoma:**\nRasmiy maxfiylik siyosati va foydalanish shartlari\n\n✅ **Sertifikatlangan:**\nO\'zbekiston MITIM tomonidan tasdiqlangan\n\nSavollaringiz bo\'lsa: legal@ai-irrigation.uz';
    }

    // Qo'llab-quvvatlash
    if (message.includes('yordam') || message.includes('qo\'llab') || message.includes('support') || message.includes('muammo') || message.includes('xato') || message.includes('ishlamayapti')) {
      return 'Texnik yordam va qo\'llab-quvvatlash: 🆘\n\n**Yordam olish usullari:**\n\n📞 **Telefon:**\n+998 93 803 2741\nIsh vaqti: 9:00-18:00 (Dush-Shan)\n\n📧 **Email:**\nsupport@ai-irrigation.uz\nJavob: 24 soat ichida\n\n💬 **Online chat:**\nWebsaytda jonli chat (9:00-18:00)\n\n📱 **Telegram:**\n@ai_irrigation_support\n\n📚 **O\'z-o\'ziga yordam:**\n• Video qo\'llanmalar\n• FAQ bo\'limi\n• Bilimlar bazasi\n• Hamjamiyat forum\n\n**Muammo bo\'lsa:**\n1. Skrinshot oling\n2. Muammo tavsifini yozing\n3. Yuqoridagi kanallardan biri orqali yuboring\n\n⏱️ O\'rtacha javob vaqti: 2 soat\n🎯 Hal qilish: 24 soat ichida\n\n💼 Enterprise mijozlar: 24/7 yordam';
    }

    // Hackathon va startup
    if (message.includes('hackathon') || message.includes('startup') || message.includes('g\'olib') || message.includes('tanlov') || message.includes('musobaqa')) {
      return 'Yutuqlarimiz va rejalarimiz: 🏆\n\n**🎉 Hackathon:**\n• 2-bosqichga chiqdik!\n• 1000+ ariza ichidan top-100\n• Innovatsiya bo\'yicha maxsus mukofot\n\n**🚀 Startup holati:**\n• Bosqich: Prototype/MVP\n• Maqsad: Pilot loyiha → Scale-up\n• Rejalashtirilyapti: Seed investitsiya\n\n**📈 Kelajak rejalari (2025):**\n\n**Q1 (Yanvar-Mart):**\n• Pilot dastur: 10 fermer xo\'jaligi\n• Mobile app beta versiya\n• API ochiq launch\n\n**Q2 (Aprel-Iyun):**\n• 100+ aktiv foydalanuvchi\n• IoT sensor integratsiya\n• Investitsiya jalbi\n\n**Q3 (Iyul-Sentabr):**\n• 500+ fermer\n• Markaziy Osiyo kengayish\n• Enterprise yechimlar\n\n**Q4 (Oktabr-Dekabr):**\n• 1000+ foydalanuvchi\n• To\'liq monetizatsiya\n• Yangi xususiyatlar\n\n🎯 Maqsad: O\'zbekiston №1 AgriTech platformasi!';
    }

    // Ekin turlari
    if (message.includes('ekin') || message.includes('paxta') || message.includes('bug\'doy') || message.includes('sholi') || message.includes('makkajo\'xori') || message.includes('sabzavot')) {
      return 'Qo\'llab-quvvatlanadigan ekinlar: 🌾\n\n**Asosiy ekinlar:**\n\n🤍 **Paxta** - AI model 95% aniqlik\n• Optimal sug\'orish jadvali\n• Verticillium kasalligini aniqlash\n• Hosil prognozi\n\n🌾 **Bug\'doy** - kuz va bahor navlari\n• Azot miqdorini aniqlash\n• Yotish xavfini baholash\n\n🌾 **Sholi** - maxsus suv rejimi\n• Suv balandligini monitoring\n• Optimal drenaj vaqti\n\n🌽 **Makkajo\'xori** - don va silaj\n• Gullab-yashnash bosqichi monitoring\n• Qurg\'oqchilik stressi\n\n🍅 **Sabzavotlar** (pomidor, bodring, qalampir)\n• Drip irrigation optimizatsiya\n• Kasallik erta aniqlash\n\n🍇 **Uzumzor va bog\'lar**\n• Suv stress balansi\n• Maxsus fenologik bosqichlar\n\n🌿 **Yonca va beda** - chorva uchun\n\nJami 20+ ekin turi qo\'llab-quvvatlanadi!';
    }

    // Kasallik va stress
    if (message.includes('kasal') || message.includes('stress') || message.includes('zararkunanda') || message.includes('bashorat') || message.includes('aniqlash')) {
      return 'Kasallik va stress aniqlash: 🔬\n\n**AI aniqlashi mumkin:**\n\n🦠 **Kasalliklar:**\n• Verticillium (paxta)\n• Septoriya (bug\'doy)\n• Blast (sholi)\n• Fusarium (makkajo\'xori)\n• Aniqlik: 85-90%\n\n⚠️ **Stress turlari:**\n• Suv stressi (qurg\'oqchilik)\n• Azot tanqisligi\n• Fosfor/Kaliy kamomadi\n• Temperatura stressi\n• Aniqlik: 90-95%\n\n🔍 **Qanday ishlaydi:**\n1. NDVI/NDRE/SWIR indekslarni tahlil\n2. Spektral "sog\'lom" ekin bilan taqqoslash\n3. AI model orqali klassifikatsiya\n4. Xavf darajasini baholash\n\n⏰ **Erta ogohlantirish:**\n• Vizual belgilardan 7-10 kun oldin\n• SMS/push bildirishnoma\n• Tavsiya choralari\n\n📊 **Kasallik xaritasi:**\n• Zararlangan hudud (ha)\n• Xavf darajasi (past/o\'rta/yuqori)\n• Tarqalish yo\'nalishi\n\n💊 **Tavsiyalar:**\n• Kimyoviy ishlov\n• Agrotexnik choralar\n• Profilaktika';
    }

    // Hosil prognozi
    if (message.includes('hosil') || message.includes('prognoz') || message.includes('bashorat') || message.includes('yig\'im') || message.includes('daromad')) {
      return 'Hosil prognozi va tahlil: 📊\n\n**AI hosil prognozi beradi:**\n\n🎯 **Aniqlik: 85-92%**\n• Tarixiy ma\'lumotlar (3+ yil)\n• Ob-havo prognozi\n• Joriy o\'sish dinamikasi\n• Sug\'orish tarixi\n\n📈 **Prognoz ko\'rsatkichlari:**\n\n**Miqdoriy:**\n• kg/ha yoki tonna/ha\n• Umumiy hosil (tonna)\n• Sifat ko\'rsatkichlari\n\n**Moliyaviy:**\n• Taxminiy daromad\n• Xarajatlar tahlili\n• Sof foyda prognozi\n• ROI (investitsiya qaytimi)\n\n**Vaqt:**\n• Yetilish sanasi\n• Optimal yig\'ib olish oralig\'i\n• Logistika rejalashtirish\n\n📅 **Prognoz vaqti:**\n• 30 kun oldin: ±20% xatolik\n• 14 kun oldin: ±10% xatolik\n• 7 kun oldin: ±5% xatolik\n\n💡 **Optimizatsiya tavsiyalari:**\n• Hosil oshirish uchun qadamlar\n• Xarajatlarni kamaytirish\n• Sifatni yaxshilash\n\n🎁 Professional va Enterprise rejalarda!';
    }

    // O'zbekiston va mintaqa
    if (message.includes('o\'zbekiston') || message.includes('mintaqa') || message.includes('viloyat') || message.includes('hudud') || message.includes('qayerda')) {
      return 'O\'zbekiston bo\'ylab qamrov: 🇺🇿\n\n**Pilot loyiha hududlari:**\n\n🌾 **Farg\'ona vodiysi:**\n• Farg\'ona, Andijon, Namangan\n• Intensiv qishloq xo\'jalik\n• Suv tanqisligi yuqori\n\n🏜️ **Janubiy hududlar:**\n• Qashqadaryo, Surxondaryo\n• Issiq iqlim ekinlari\n• Tomchilatib sug\'orish\n\n🌊 **Sirdaryo havzasi:**\n• Toshkent, Sirdaryo\n• Sholi va sabzavot\n• Suv resurslari cheklangan\n\n📊 **Statistika:**\n• Qamrov: 12 viloyat\n• 1 million+ potensial foydalanuvchi\n• 4.2 million ha qishloq xo\'jalik yerlari\n\n🎯 **Kelajak rejalar:**\n2025 yil: Markaziy Osiyo kengayish\n• Qozog\'iston\n• Qirg\'iziston\n• Tojikiston\n\n🌍 **Xalqaro hamkorlik:**\n• FAO (BMT)\n• Jahon banki\n• CAREC (Markaziy Osiyo mintaqaviy iqtisodiy hamkorlik)';
    }

    // Default - mavzuga tegishli umumiy javob
    if (isProjectRelated) {
      return 'Qiziqarli savol! Men sizga ko\'proq yordam bera olishim uchun quyidagi mavzulardan birini tanlang: 🤔\n\n📌 **Asosiy mavzular:**\n• Loyiha haqida umumiy\n• Texnik tafsilotlar va AI\n• Xususiyatlar va afzalliklar\n• Narxlar va tariflar\n• Demo va sinov\n• Jamoa va bog\'lanish\n• Qanday boshlash\n• Mobile ilova\n• IoT va sensorlar\n• API integratsiya\n• Kasallik aniqlash\n• Hosil prognozi\n\nYoki aniqroq savol yozing, sizga batafsil javob beraman! 😊';
    }

    // Default - off topic
    return 'Kechirasiz, men faqat AI-Irrigatsiya loyihasi doirasida savollarga javob bera olaman. 🙏\n\nIltimos, loyihamiz, texnologiyalar, xususiyatlar yoki qanday foydalanish haqida savol bering. Sizga yordam berishdan xursandman!';
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-white">AI Assistant</h3>
              <p className="text-purple-100 text-sm">Onlayn</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white text-gray-900 shadow-sm'
                }`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString('uz-UZ', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Savolingizni yozing..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}