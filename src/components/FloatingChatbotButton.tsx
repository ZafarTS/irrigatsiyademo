import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Chatbot } from './Chatbot';

export function FloatingChatbotButton() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
     

      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </>
  );
}
