import React, { useState, useEffect } from 'react';
import { SectionId } from './types';
import Hero from './components/Hero';
import CharacterDetail from './components/CharacterDetail';
import WorldInfo from './components/WorldInfo';
import StoryMode from './components/StoryMode';
import { Menu, X, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Auto-update active section based on scroll position
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionId.HOME, label: '메인' },
    { id: SectionId.PROFILE, label: '선즈옌' },
    { id: SectionId.WORLD, label: '세계관' },
    { id: SectionId.STORY, label: '스토리' },
    { id: SectionId.SECRET, label: '시크릿' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-panda-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
              <span className="font-serif font-bold text-xl tracking-tighter text-panda-black">沈知衍</span>
              <span className="ml-2 text-xs text-slate-500 uppercase tracking-widest hidden sm:block">AI Business Division</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-panda-accent border-b-2 border-panda-accent' 
                      : 'text-slate-500 hover:text-panda-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id 
                      ? 'bg-slate-100 text-panda-accent' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-panda-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <div id={SectionId.HOME}>
          <Hero onStart={() => scrollToSection(SectionId.PROFILE)} />
        </div>
        
        <div id={SectionId.PROFILE} className="pt-20">
          <CharacterDetail />
        </div>

        <div id={SectionId.WORLD} className="pt-20">
          <WorldInfo />
        </div>

        <div id={SectionId.STORY} className="pt-20">
          <StoryMode />
        </div>
        
        <div id={SectionId.SECRET} className="pt-20">
          {/* SecretMode is included inside StoryMode component actually, but let's separate for navigation structure or keep it. 
              Wait, the layout suggests keeping it sequential. I will render it separately. */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-serif text-lg mb-2 text-slate-200">이 판다는 무성애자에 욕구도 없다고요!</p>
          <p className="text-sm opacity-60">© 2026 ZHIHEUNG GROUP AI Division. All rights reserved.</p>
          <p className="text-xs mt-4 opacity-40">Designed for RP Scenario Guide</p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-panda-black text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;