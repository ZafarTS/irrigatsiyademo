import React from 'react';
import { Github, Linkedin, Users } from 'lucide-react';

const teamMembers = [
  {
    name: "Jaloliddin Eshbobayev",
    role: "AI Engineer (Team Leader)",
    skills: "LLM, ANN, ANFIS, Python, Matlab, Suv tozalash texnologiyalari",
    description: "AI bo'yicha Xitoyda 1 yillik stajirovka, Ispaniyada suv tozalash bo'yicha 2 oylik stajirovka o'tgan. Scopus h-2, ResearchGate va Google Scholar h-3.",
    achievements: [
      "🇨🇳 Xitoyda 1 yillik AI stajirovka",
      "🇪🇸 Ispaniyada 2 oylik stajirovka",
      "📊 Scopus h-index: 2",
      "📚 Google Scholar h-index: 3"
    ],
    github: "https://github.com/Jaloliddin6565",
    linkedin: "https://www.linkedin.com/in/jaloliddin-eshbobayev-60b5851a8/",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Quvonchbek Abduraimov",
    role: "Full-Stack Developer",
    skills: "HTML, JS, CSS, Python, PHP, SQL, Bash, Kiberxavfsizlik",
    description: "Web dasturlash, data science va kiberxavfsizlik bo'yicha tajribali mutaxassis. Backend va frontend development.",
    achievements: [
      "💻 Full-stack web development",
      "🔐 Kiberxavfsizlik mutaxassisi",
      "🐍 Python va PHP expert",
      "🛠️ DevOps va Bash scripting"
    ],
    github: "https://github.com/neonman-dev",
    linkedin: "https://www.linkedin.com/in/neonman-dev",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Azizbek Kamolov",
    role: "Designer & PhD Environment Engineer",
    skills: "Web dasturlash, Figma, Environment Engineering, Suv tejash",
    description: "Ispaniyaning Cantabriya universitetida PhD darajasini olgan. Scopus h-6, WoS h-5. Atrof-muhit muhandisligi va suv tejash bo'yicha ilmiy izlanishlar.",
    achievements: [
      "🎓 PhD - Cantabriya universiteti (Ispaniya)",
      "📊 Scopus h-index: 6",
      "📚 Web of Science h-index: 5",
      "🌍 Atrof-muhit muhandisligi olimi"
    ],
    linkedin: "https://www.linkedin.com/in/azizbek-kamolov-b265a31a5/",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Abdullayeva Maftuna",
    role: "Backend Developer",
    skills: "Backend, Frontend, Python, HTML, JS, CSS, Data Science",
    description: "Web dasturlash va backend development bo'yicha keng tajribaga ega. Python va data science bo'yicha mutaxassis.",
    achievements: [
      "💾 Backend architecture expert",
      "🎨 Frontend development",
      "📊 Data Science bo'yicha tajriba",
      "🐍 Python specialist"
    ],
    github: "https://github.com/maftunashonazarovna07",
    gradient: "from-orange-500 to-red-500"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-5 py-3 rounded-full text-lg mb-6">
            <Users className="w-6 h-6" />
            <span>Bizning jamoa</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Professionallar jamoasi
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Xalqaro tajribaga ega AI mutaxassislari, tajribali dasturchilar va sohada PhD darajasiga ega olimlar
          </p>
          <div className="mt-8 inline-flex items-center gap-3 bg-blue-50 text-blue-900 px-8 py-4 rounded-xl border-2 border-blue-200 shadow-md">
            <span className="text-3xl">✓</span>
            <span className="text-lg">Barcha jamoa a'zolari AI500! Telegram boti orqali ro'yxatdan o'tgan</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 overflow-hidden group hover:scale-[1.02] duration-300"
            >
              <div className={`h-3 bg-gradient-to-r ${member.gradient}`} />
              <div className="p-10">
                <div className="mb-6">
                  <h3 className="text-gray-900 text-2xl mb-3">
                    {member.name}
                  </h3>
                  <div className={`inline-block bg-gradient-to-r ${member.gradient} text-white px-4 py-2 rounded-full text-base shadow-md`}>
                    {member.role}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {member.description}
                </p>
                
                {member.achievements && (
                  <div className="mb-6 space-y-3">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-base text-gray-700 flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 mb-6 border border-gray-200">
                  <p className="text-base text-gray-700">
                    <strong className="text-gray-900 text-lg">Ko'nikmalar:</strong> {member.skills}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  {member.github && (
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all text-base shadow-md hover:shadow-lg"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition-all text-base shadow-md hover:shadow-lg"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    </section>
  );
}