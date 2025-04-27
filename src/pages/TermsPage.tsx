import React from "react";

function TermsPage() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">
        
        {/* 타이틀 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          이용약관
        </h2>

        {/* 내용 */}
        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            본 이용약관은 PickStudy 서비스를 이용함에 있어 필요한 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <p>
            제1조 (목적) <br />
            이 약관은 회사(이하 "회사"라 함)가 제공하는 PickStudy 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <p>
            제2조 (정의) <br />
            1. "서비스"란 회사가 제공하는 PickStudy 관련 제반 서비스를 의미합니다. <br />
            2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.
          </p>

          <p>
            (이하 약관 상세 내용은 추후 업데이트 예정입니다.)
          </p>
        </div>

      </div>
    </section>
  );
}

export default TermsPage;