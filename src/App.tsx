import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { SuccessMetrics } from "./components/SuccessMetrics";
import { Team } from "./components/Team";
import { WhyUs } from "./components/WhyUs";
import { Roadmap } from "./components/Roadmap";
import { Technology } from "./components/Technology";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";
import { BackToTop } from "./components/BackToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { LoadingScreen } from "./components/LoadingScreen";
import { DemoPage } from "./components/DemoPage";
//import { FloatingChatbotButton } from "./components/FloatingChatbotButton";

// Section divider component
function SectionDivider() {
  return (
    <div className="relative h-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      
      <SectionDivider />
      <ProblemSolution />
      
      <SuccessMetrics />
      
      <SectionDivider />
      <Team />
      
      <SectionDivider />
      <WhyUs />
      
      <SectionDivider />
      <Roadmap />
      
      <SectionDivider />
      <Technology />
      
      <SectionDivider />
      <FAQ />
      
      <Footer />
    </>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple client-side routing
  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo(0, 0);
  };

  // Make navigate available globally for Navigation component
  useEffect(() => {
    (window as any).navigate = navigate;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation currentRoute={currentRoute} />
      <div className="pt-16">
        {currentRoute === '/demo' ? <DemoPage /> : <HomePage />}
      </div>
      
      {/* Floating Contact Form - only on home page */}
      {currentRoute !== '/demo' && <ContactForm />}
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Floating Chatbot Button - on all pages */}
      <FloatingChatbotButton />
    </div>
  );
}
