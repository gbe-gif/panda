import React, { useState } from 'react';
import { Globe, Users, ChevronDown, ChevronUp } from 'lucide-react';

const FamilyCard = ({ name, role, tags, desc }: { name: string, role: string, tags: string[], desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 md:p-5 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-wider">{role}</p>
          <h4 className="text-base md:text-lg font-bold text-slate-800">{name}</h4>
        </div>
        {isOpen ? <ChevronUp className="text-slate-400" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
      </button>
      
      <div className={`px-4 md:px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 md:py-5 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex gap-1.5 md:gap-2 mb-3 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] md:text-xs px-2 py-1 bg-slate-200 text-slate-700 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
          {desc}
        </p>
      </div>
    </div>
  );
};

const WorldInfo: React.FC = () => {
  return (
    <section className="bg-slate-100 py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Worldview */}
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
              <Globe className="text-emerald-600" size={24} />
              세계관: 2026년 수인 사회
            </h2>
            <div className="prose prose-slate text-slate-600 text-sm md:text-base">
              <p className="mb-4">
                인간과 수인이 공존하는 현대 사회입니다. 동물과 수인은 명확히 구별되며,
                다른 종 사이에서 자녀가 태어나면 50% 확률로 한쪽 부모의 종을 따릅니다.
              </p>
              <div className="bg-white p-4 md:p-5 rounded-lg border-l-4 border-emerald-500 shadow-sm my-6">
                <h4 className="font-bold text-slate-800 mb-2">형질 시스템</h4>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
                  <li><strong>여성:</strong> 전원 1형질 (임신 가능)</li>
                  <li><strong>남성:</strong> 90%가 2형질 (임신 불가능, 잉태 시키기만 가능), 10%가 1형질 (잉태 가능)</li>
                  <li>1형질은 수인 종류에 따라 발정기가 존재합니다.</li>
                </ul>
              </div>
              <p>
                선즈옌이 속한 <strong>지형그룹(知衡集团)</strong>은 전통적으로 판다 수인이 가업을 잇는 최상위 재벌가입니다.
                금융, 에너지, 물류를 넘어 최근 AI 사업을 통해 글로벌 영향력을 확장하고 있습니다.
              </p>
            </div>
          </div>

          {/* Family */}
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
              <Users className="text-emerald-600" size={24} />
              선즈옌의 가족
            </h2>
            <div className="space-y-3 md:space-y-4">
              <FamilyCard 
                role="아버지 / 지형그룹 회장"
                name="선지밍 (沈既明)"
                tags={["판다 수인", "62세", "엄격", "자수성가"]}
                desc={`산신령 같은 수염을 고집하는 지형그룹의 총수.
                판다 수인답지 않게 매우 부지런하며 자수성가했습니다.
                엄격하고 깐깐한 성격이지만 가족에게는 의외로 약한 면모를 보입니다.`}
              />
              <FamilyCard 
                role="어머니 / 안주인"
                name="장쯔한 (张梓涵)"
                tags={["불곰 수인", "55세", "다정", "오지랖", "푼수"]}
                desc={`고위 당간부의 외동딸 출신으로, 20살에 선지밍에게 반해 적극적으로 구애하여 결혼했습니다.
                다정하고 오지랖이 넓으며 약간의 푼수기가 있습니다.
                며느리인 당신(User)에게 자주 '허당 훈수 문자'를 보냅니다.`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorldInfo;