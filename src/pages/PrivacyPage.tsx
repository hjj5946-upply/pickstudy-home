import React from "react";

function PrivacyPage() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">
        
        {/* 타이틀 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          개인정보처리방침
        </h2>

        {/* 내용 */}
        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            본 개인정보처리방침은 PickStudy 서비스 이용자의 개인정보를 보호하기 위해 회사가 수행하는 조치 및 이용자의 권리에 대해 설명합니다.
          </p>

          <p>
            제1조 (개인정보 수집 항목 및 방법) <br />
            회사는 회원가입, 상담, 서비스 제공 등을 위해 아래와 같은 개인정보를 수집할 수 있습니다. <br />
            - 필수항목: 이름, 휴대전화번호, 이메일 주소 등
          </p>

          <p>
            제2조 (개인정보의 이용 목적) <br />
            수집한 개인정보는 다음의 목적을 위해 활용합니다. <br />
            - 서비스 제공 및 회원관리 <br />
            - 고객 문의 대응 <br />
            - 마케팅 및 광고에 활용 (이용자 동의 시)
          </p>

          <p>
            (이하 개인정보처리방침 상세 내용은 추후 업데이트 예정입니다.)
          </p>
        </div>

      </div>
    </section>
  );
}

export default PrivacyPage;