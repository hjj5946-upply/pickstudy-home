import React from "react";

function HomePage() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-100 p-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            아이를 위한 최고의 선택, <br className="hidden md:block" /> PickStudy
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-8">
            믿을 수 있는 학원, 쉽게 찾고 등록하세요
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-pickstudyPink text-white rounded-full text-lg hover:opacity-80 transition">
                앱 다운로드
            </button>
            <button className="px-6 py-3 bg-white text-pickstudyPink border border-pickstudyPink rounded-full text-lg hover:bg-pink-50 transition">
                서비스 알아보기
            </button>
          </div>
        </section>
  
        {/* 메인 콘텐츠 (아직 비워둠) */}
        <main className="flex-1 p-6 bg-gray-50">
          <section className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">홈페이지 메인 콘텐츠</h2>
            <p className="text-gray-600">여기에 메인 배너, 서비스 설명 등을 추가할 예정입니다.</p>
          </section>
        </main>
  
        {/* Footer */}
        <footer className="w-full py-6 px-6 bg-white border-t">
          <p className="text-center text-gray-500 text-sm">© 2025 PickStudy. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default HomePage;