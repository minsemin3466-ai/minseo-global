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

        {/* About */}
        <div className="rounded-2xl shadow bg-white p-6">
          <h2 className="text-xl font-semibold mb-2">소개</h2>
          <p>
            상하이 화동사범대학 한어언 전공 재학 중이며,
            다국어 능력을 기반으로 글로벌 커뮤니케이션과
            콘텐츠 제작 경험을 보유하고 있습니다.
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
