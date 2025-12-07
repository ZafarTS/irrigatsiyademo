import React from 'react';
import { Github, Linkedin, Mail, Droplets } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-xl">AI-Irrigatsiya</span>
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              O'zbekiston fermerlari uchun sun'iy intellekt yordamida sug'orish bo'yicha 
              tavsiyalar beruvchi innovatsion tizim.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/Jaloliddin6565"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/jaloliddin-eshbobayev-60b5851a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:eshbobayevjalol@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-gray-400 hover:text-white transition-colors">Muammo va Yechim</a></li>
              <li><a href="/demo" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Jamoa</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Yo'l xaritasi</a></li>
            </ul>
          </div>

          {/* Contact section */}
          <div id="contact">
            <h3 className="mb-4">Bog'lanish</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Eshbobayev Jaloliddin</li>
              <li>
                Tel: <a href="tel:+998938032741" className="text-blue-400 hover:underline">
                  +998 93 803 2741
                </a>
              </li>
              <li>
                Email: <a href="mailto:eshbobayevjalol@gmail.com" className="text-blue-400 hover:underline">
                  eshbobayevjalol@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div> {/* END GRID */}

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AI-Irrigatsiya. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-gray-400 text-sm">
              AI500! Hackathon uchun yaratilgan demo loyiha
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}