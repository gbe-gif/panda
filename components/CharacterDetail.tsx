import React from 'react';
import { User, Brain, Activity, Coffee } from 'lucide-react';

const CharacterDetail: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3 md:mb-4">선즈옌 <span className="text-base md:text-lg text-slate-500 font-sans font-normal ml-2">沈知衍</span></h2>
        <div className="w-16 h-1 bg-panda-accent mx-auto"></div>
        <p className="mt-4 text-sm md:text-base text-slate-600">지형그룹(知衡集团) 후계자 · AI 사업부 본부장 · 수석 엔지니어</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column: Basic Info */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 text-slate-800">
              <User size={18} className="text-emerald-600" />
              신체 정보
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">종족</span>
                <span className="text-right">판다 수인 (남성, 2형질)</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">나이</span>
                <span>32세</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">신장</span>
                <span>188cm</span>
              </li>
              <li className="flex justify-between border-b border-slate-50 pb-2">
                <span className="font-medium text-slate-500">특징</span>
                <span className="text-right">은발 투블럭, 흑안, 귀/꼬리</span>
              </li>
              <li className="flex flex-col gap-1 pt-1">
                <span className="font-medium text-slate-500">체향</span>
                <span className="text-xs text-slate-700 bg-slate-50 p-2 rounded">다크 코코아 + 웜 밀크 + 앰버 머스크</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 text-slate-800">
              <Activity size={18} className="text-emerald-600" />
              능력 및 스펙
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-700">IQ 151</span>
                <span className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-700">3대 420kg</span>
              </div>
              <p>MIT 인공지능·머신러닝 학석사 졸업</p>
              <p>개인 자산 수백억 위안대 보유</p>
              <p className="border-t border-slate-50 pt-3 mt-2 leading-relaxed text-slate-500 text-xs bg-slate-50/50 p-2 rounded">
                미국 유학 시절, 동양인과 수인이라는 이중 차별을 극복하기 위해 피나는 노력으로 체격을 키웠습니다. 
                MIT 학부 시절 미식축구 팀의 주전 러닝백으로 활약하며 압도적인 피지컬을 완성했습니다.
              </p>
            </div>
          </div>
          
           <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 text-slate-800">
              <Coffee size={18} className="text-emerald-600" />
              기호 및 불호
            </h3>
             <div className="space-y-4 text-sm">
                <div>
                    <span className="font-bold text-emerald-700 block mb-1 text-xs tracking-wider">LIKE</span>
                    <p className="text-slate-600">익힌 죽순, 담백한 육류, 달달한 디저트(연유라떼), 효율적인 일처리, 새벽 수영</p>
                </div>
                <div>
                    <span className="font-bold text-red-700 block mb-1 text-xs tracking-wider">HATE</span>
                    <p className="text-slate-600">비효율, 진한 페로몬, 무례한 간섭, 사전 협의 없는 만남, 억지 스킨십, 귀/꼬리 터치</p>
                </div>
             </div>
          </div>
        </div>

        {/* Center/Right: Personality Only */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="bg-white p-5 md:p-8 rounded-xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-6 text-slate-800">
              <Brain size={22} className="text-emerald-600" />
              성격 분석 (INTJ / 5w6)
            </h3>
            
            <div className="space-y-4">
              {[
                "모든 상황을 데이터와 논리로 분석하며, 불필요한 감정 소모를 극도로 기피합니다.",
                "사회생활을 위해 학습된 예의를 갖추고 있으나, 내면은 완벽하게 무관심합니다.",
                "본인의 논리가 완벽하다고 믿으며, 타인의 비논리성을 참지 못하는 엘리트주의 성향이 깔려있습니다.",
                "겉으로는 공손한 존댓말을 쓰지만, 그 안에는 상대를 '통제 가능한 변수'로 보는 시선이 존재합니다."
              ].map((desc, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;