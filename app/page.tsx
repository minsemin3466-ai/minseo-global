export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-2">김민서 | Portfolio</h1>

        <p className="text-lg font-semibold text-gray-800">
          통역·콘텐츠·마케팅·네트워킹을 아우르는 글로벌 인재
        </p>

        <p className="text-gray-600 mt-2">
          글로벌 커뮤니케이션 · 통역 · 콘텐츠 · 마케팅 · 네트워킹
        </p>
      </header>

      {/* Main Sections */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {/* About (최신 업데이트 버전) */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">소개</h2>
          <p className="leading-relaxed text-gray-700">
            국제중국어교육학부 중국어 전공 예정이며,
            <span className="font-semibold text-black"> 상하이의 格致中学와 St. Paul American School를 복수 졸업</span>하여
            체득한 다국어 능력과 글로벌 감각을 보유하고 있습니다.
            <br /><br />
            단순한 언어 능력을 넘어, 미래 대한민국 외교부 장관을 꿈꾸며
            한국과 세계를 잇는 가교 역할을 수행하고자 합니다.
            다양한 실무 경험을 바탕으로 넓은 시야와 실행력을 갖춘 인재로 성장하고 있습니다.
          </p>
        </div>

        {/* Skills */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc ml-5">
            <li>한국어 / 중국어 / 영어 / 일본어</li>
            <li>영상 편집</li>
            <li>콘텐츠 기획</li>
            <li>글로벌 마케팅</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-2">경험</h2>
          <ul className="list-disc ml-5">
            <li>농심 상해 법인 글로벌 서포터즈</li>
            <li>차이나조이 통역</li>
            <li>국제 수입 박람회 진행요원</li>
            <li>SIAL Shanghai 오뚜기 전시관 통역</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>

          <p className="mb-3">Email: minseo3466@naver.com</p>

          <div className="space-y-2">
            {/* Line */}
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/ios-filled/50/ef8a1b/line-me.png"
                alt="Line"
                className="w-5 h-5"
              />
              <span>Line</span>
            </div>

            {/* WeChat */}
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/ios/50/ef8a1b/weixing.png"
                alt="WeChat"
                className="w-5 h-5"
              />
              <span>WeChat</span>
              <span className="ml-3">-</span>
              <span>kim71137113</span>
            </div>

            {/* KakaoTalk */}
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/ef8a1b/external-kakaotalk-or-katalk-is-a-free-mobile-instant-messaging-application-for-smartphones-logo-bold-tal-revivo.png"
                alt="KakaoTalk"
                className="w-5 h-5"
              />
              <span>KakaoTalk</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}