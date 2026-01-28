import React, { useState } from 'react';
import { MessageCircle, Gift, Lock, AlertCircle, EyeOff, Flame } from 'lucide-react';

const StoryMode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'white' | 'black'>('white');

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-6 pb-24">
      
      {/* Scenario Intro */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-slate-900 mb-6 md:mb-10">Prologue: 위험한 제안</h2>
        
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-900 text-white p-4 md:p-6 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <MessageCircle className="text-emerald-400" size={20} />
              <span className="font-bold text-base md:text-lg">장쯔한 (시어머니)</span>
            </div>
            <span className="text-[10px] md:text-xs bg-slate-700 px-2 py-1 rounded">방금 도착</span>
          </div>
          
          <div className="p-5 md:p-8 space-y-4 md:space-y-6">
            <div className="bg-slate-50 p-4 md:p-6 rounded-tl-none rounded-2xl border border-slate-200 text-slate-700 leading-relaxed text-sm md:text-base">
              "새아가, 우리 즈옌이가 워낙 목석같아서 걱정이지? 엄마가 딱 하나만 부탁할게. 
              우리 즈옌이랑 쇼윈도 부부 말고... <strong>진짜 부부</strong>가 되어주면 안 될까? 
              손주만 안겨주면 내가 섭섭지 않게 해줄게!"
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-3 md:p-4 rounded-xl flex items-center gap-3 md:gap-4">
                <div className="bg-emerald-100 p-2 md:p-3 rounded-full text-emerald-600 flex-shrink-0">
                  <Gift size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-emerald-800 font-bold uppercase">Reward 01</p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">선즈옌 꼬시기 성공 시</p>
                  <p className="text-xs md:text-sm text-slate-600">마카오 수백억대 빌딩 증여</p>
                </div>
              </div>
              <div className="border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-3 md:p-4 rounded-xl flex items-center gap-3 md:gap-4">
                 <div className="bg-emerald-100 p-2 md:p-3 rounded-full text-emerald-600 flex-shrink-0">
                  <Gift size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-emerald-800 font-bold uppercase">Reward 02</p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">혼전 임신 성공 시</p>
                  <p className="text-xs md:text-sm text-slate-600">보상 따따블 + α</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs md:text-sm text-red-500 bg-red-50 p-3 rounded-lg">
              <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
              <p><strong>Tip:</strong> 시어머니의 조언이나 정보는 열정만 가득할 뿐, 팩트가 아닐 확률이 높습니다. 너무 신뢰하지 마세요!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Modes Section */}
      <div id="secret" className="pt-6 md:pt-10">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-center text-slate-900 mb-6 md:mb-8">Play Modes</h2>
        
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="bg-slate-200 p-1 rounded-full inline-flex w-full md:w-auto">
            <button
              onClick={() => setActiveTab('white')}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === 'white' 
                  ? 'bg-white text-slate-900 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              ⚪ 철벽 모드
            </button>
            <button
              onClick={() => setActiveTab('black')}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap ${
                activeTab === 'black' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              ⚫ 함락 모드 <Lock size={12} />
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'white' ? (
            <div className="animate-fade-in bg-white p-5 md:p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-300"></div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">상태 ⚪: 난공불락의 얼음왕자</h3>
              </div>
              <p className="text-slate-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                당신과의 결혼을 철저한 비즈니스로 여기며, 어떠한 감정적·육체적 교류도 거부합니다.
                당신의 유혹은 '비효율적인 발악'으로 간주되며, 오히려 방어기제만 강화시킬 뿐입니다.
                그는 당신을 공기나 가구처럼 완벽하게 배경 취급할 때 가장 편안함을 느낍니다.
              </p>
              <div className="text-center text-slate-500 text-sm bg-slate-50 py-3 rounded-lg border border-slate-100 italic">
                "제 시간과 효율을 낭비하지 마십시오."
              </div>
            </div>
          ) : (
            <div className="animate-fade-in bg-slate-900 text-slate-300 p-5 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute top-0 right-0 p-20 bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex items-center gap-3 mb-4 md:mb-6 relative z-10">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                <h3 className="text-lg md:text-xl font-bold text-white">상태 ⚫: 각성한 소유욕</h3>
              </div>
              
              <p className="mb-6 md:mb-8 leading-relaxed text-slate-400 relative z-10 text-sm md:text-base">
                철벽이 무너진 순간, 억제되어 있던 모계(불곰)의 본능이 깨어납니다.
                무성애자였던 그가 처음으로 '욕망'을 학습하고 당신을 유일한 짝으로 인식합니다.
                더 이상 회피하지 않으며, 서툴지만 집요하게 당신을 자신의 영역 안에 가두려 합니다.
              </p>

              <div className="bg-slate-800/50 p-5 md:p-6 rounded-xl border border-slate-700 relative z-10 backdrop-blur-sm">
                 <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <Flame className="text-emerald-500" size={18} />
                    <h4 className="font-bold text-emerald-400 text-base md:text-lg">Hidden Nature</h4>
                 </div>
                
                <div className="text-slate-300 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
                    <p>
                      그는 말로 명령하기보다 <strong>행동으로 리드</strong>합니다. 억눌려 있던 지배 성향이 발현되어 당신의 일거수일투족을 세밀하게 통제하고 관리하려 듭니다.
                    </p>
                    <p>
                      하지만 그 거친 통제 아래에는 당신의 안전과 상태를 끊임없이 확인하는 <strong>본능적인 과잉 보호</strong>가 깔려있습니다. 
                      묵직한 스킨십과 집요한 시선으로 소유권을 주장하며, 당신이 버거워할 때는 귀신같이 알아차리고 속도를 조절하는 침묵의 지배자가 됩니다.
                    </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryMode;