import React from 'react';
import { ChevronDown, Lock } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-10 md:py-0">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 animate-fade-in-up order-2 md:order-1">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 border border-slate-600 rounded-full bg-slate-800/50 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-emerald-400 uppercase">Character Chat Scenario</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            이 판다는 <span className="text-slate-400">무성애자</span>에<br/>
            <span className="text-emerald-500">욕구</span>도 없다고요!
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-xl font-light leading-relaxed mx-auto md:mx-0">
            "제 시간과 효율을 낭비하지 마십시오. 당신은 그저 생물학적 타인일 뿐입니다."
            <br/><br/>
            <span className="text-xs md:text-sm text-slate-400 block mt-2">
              지형그룹 후계자이자 완벽한 철벽남 선즈옌과의<br/>
              치명적이고 효율적인(?) 쇼윈도 부부 생활
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start pt-2 md:pt-4 w-full sm:w-auto">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] text-sm md:text-base"
            >
              프로필 확인하기
            </button>
            <div className="w-full sm:w-auto px-6 md:px-8 py-3 border border-slate-600 text-slate-400 font-medium rounded-sm flex items-center justify-center gap-2 cursor-not-allowed text-sm md:text-base">
              <Lock size={16} />
              <span>함락 조건 잠김</span>
            </div>
          </div>
        </div>

        {/* Character Image */}
        <div className="flex-1 relative flex justify-center md:justify-end order-1 md:order-2 w-full">
          <div className="relative w-[260px] sm:w-[300px] md:w-[400px] aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-slate-700 group mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
            <img 
              src="https://i.postimg.cc/9fqNvxK1/201.jpg" 
              alt="선즈옌" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <p className="text-xl md:text-2xl font-serif text-white font-bold">Shen Zhiyan</p>
              <p className="text-xs md:text-sm text-emerald-400 font-medium tracking-wider">INTJ / 5w6 / sp/sx</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;