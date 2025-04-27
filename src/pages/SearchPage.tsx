import React from "react";

function SearchPage() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-gray-800">

        {/* 타이틀 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          검색 결과
        </h2>

        {/* 검색 결과가 없을 때 */}
        <div className="text-center text-gray-500 mb-12">
          검색어에 대한 결과가 없습니다.
        </div>

        {/* 검색 결과 리스트 (임시 예시) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 예시 카드 */}
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">해피영어학원</h3>
            <p className="text-gray-600">서울특별시 강남구</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">수학의정석학원</h3>
            <p className="text-gray-600">서울특별시 송파구</p>
          </div>

          {/* ...추후 API 데이터로 카드 추가 */}
        </div>

      </div>
    </section>
  );
}

export default SearchPage;