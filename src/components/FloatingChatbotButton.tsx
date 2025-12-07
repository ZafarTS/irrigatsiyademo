import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Chatbot } from './Chatbot';

export function FloatingChatbotButton() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all z-40 flex items-center justify-center group hover:scale-110"
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  );
}
