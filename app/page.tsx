import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">김민서 | Portfolio</h1>
        <p className="text-lg font-semibold text-gray-800">
          통역·콘텐츠·마케팅·네트워킹을 아우르는 글로벌 인재
        </p>
        <p className="text-gray-600 mt-2">
          글로벌 커뮤니케이션 · 통역 · 콘텐츠 · 마케팅 · 네트워킹
        </p>
      </header>

      {/* Main Sections */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">

        {/* About (가독성 개선 완료) */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-3 text-black">소개</h2>
          <p className="leading-relaxed">
            국제중국어교육학부 중국어 전공 예정이며, <br />
            상하이의 <span className="font-semibold text-black">格致中学와 St. Paul American School를</span> <br />
            <span className="font-semibold text-black">복수 졸업</span>하여 체득한 다국어 능력과 글로벌 감각을 보유하고 있습니다.
            <br /><br />
            단순한 언어 능력을 넘어, 미래 대한민국 외교부 장관을 꿈꾸며 <br />
            한국과 세계를 잇는 가교 역할을 수행하고자 합니다. <br />
            다양한 실무 경험을 바탕으로 넓은 시야와 실행력을 갖춘 인재로 성장하고 있습니다.
          </p>
        </div>

        {/* Skills */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-2 text-black">Skills</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>한국어 / 중국어 / 영어 / 일본어</li>
            <li>영상 편집 / 콘텐츠 기획</li>
            <li>글로벌 마케팅</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-2 text-black">경험</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>농심 상해 법인 글로벌 서포터즈</li>
            <li>차이나조이 / SIAL Shanghai 통역</li>
            <li>국제 수입 박람회 진행요원</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-3 text-black">Contact</h2>
          <p className="mb-3">Email: minseo3466@naver.com</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-medium">Line</span>
              <span className="text-gray-400">|</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">WeChat</span>
              <span className="text-gray-400">-</span>
              <span>kim71137113</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium">KakaoTalk</span>
              <span className="text-gray-400">|</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
