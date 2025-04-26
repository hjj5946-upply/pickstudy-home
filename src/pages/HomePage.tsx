import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiNaver } from "react-icons/si";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import appStoreBadge from "../assets/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg";
import googlePlayBadge from "../assets/google-play-badge.png";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px 넘으면 스크롤 감지
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isSearchOpen, setIsSearchOpen] = useState(false); // PC용 인라인 검색창 열림 여부
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false); // 모바일용 풀스크린 검색창 열림 여부

  const handleSearchClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobileSearchOpen(true); // 모바일: 풀스크린 검색 오픈
    } else {
      setIsSearchOpen((prev) => !prev); // PC: 인라인 검색창 토글
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 고정 헤더 */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-pickstudyPink">
            PickStudy
          </div>
          <div className="flex items-center gap-4">
            
            <div className="relative hidden md:block ml-4">
              <div className={`origin-right transform transition-transform duration-300 ease-in-out ${isSearchOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} w-64`}>
                <input
                  type="text"
                  placeholder="학원명을 검색해 보세요"
                  className="px-4 py-1.5 h-9 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pickstudyPink w-full"
                />
              </div>
            </div>
            <IoSearchOutline className="text-2xl text-gray-700 cursor-pointer" onClick={handleSearchClick} />
            {isMobileSearchOpen && (
              <div className="fixed inset-0 bg-white z-50 flex flex-col">
                {/* 상단 바 */}
                <div className="flex items-center p-4 border-b border-gray-200">
                  <button
                    onClick={() => setIsMobileSearchOpen(false)}
                    className="text-2xl text-gray-700"
                  >
                    <MdKeyboardDoubleArrowLeft />
                  </button>
                  <input
                    type="text"
                    autoFocus
                    placeholder="학원명을 검색해 보세요"
                    className="ml-4 flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickstudyPink"
                  />
                </div>
                {/* 여기에 나중에 검색 결과 리스트 들어갈 자리 */}
                <div className="flex-1 p-4">
                  {/* "검색 결과가 여기에 표시됩니다" 등 추가 가능 */}
                </div>
              </div>
            )}
            <button className="px-4 py-2 bg-pickstudyPink text-white rounded-lg text-sm hover:opacity-80 transition">앱 다운로드</button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-100 p-6 pt-32">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight"
        >
          아이를 위한 최고의 선택, <br className="hidden md:block" /> PickStudy
        </motion.h2>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-gray-600 mb-8"
        >
          AI 기술을 통한 우리 아이의 최적화 된<br />
          믿을 수 있는 학원, 쉽게 찾고 등록하세요
        </motion.p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6, type: "spring", stiffness: 60 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <div className="flex gap-4 mt-6">
                <a href="https://apps.apple.com/kr/app/your-app-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black rounded-lg px-6 py-3 hover:opacity-90 transition gap-3"
                >
                  <img
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    className="h-6 object-contain"
                  />
                  <span className="text-white text-base font-semibold">App Store</span>
                </a>
                <a href="https://play.google.com/store/apps/details?id=your.app.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-black rounded-lg px-6 py-3 hover:opacity-90 transition gap-3"
                >
                  <img src={googlePlayBadge}
                    alt="Get it on Google Play"
                    className="h-6 object-contain"
                  />
                  <span className="text-white text-base font-semibold">Google Play</span>
                </a>
              </div>
        </motion.div>
      </section>
      {/* Service Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* 타이틀 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            PickStudy 서비스 소개
          </h2>
          {/* 서브타이틀 */}
          <p className="text-gray-600 mb-12">
            PickStudy에서 이런 것들을 쉽게 이용할 수 있어요
          </p>
          {/* 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 카드 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">학원 찾기</h3>
              <p className="text-gray-600">주변 학원을 검색하고, 원하는 학원을 쉽게 찾을 수 있어요.</p>
            </div>
            {/* 카드 2 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">차량 운행 관리</h3>
              <p className="text-gray-600">통학 차량의 위치를 실시간으로 확인하고 관리할 수 있어요.</p>
            </div>
            {/* 카드 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">수업 일정 관리</h3>
              <p className="text-gray-600">내 자녀의 수업 일정을 한 눈에 확인할 수 있어요.</p>
            </div>
            {/* 카드 4 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">결제 및 등록</h3>
              <p className="text-gray-600">앱에서 간편하게 학원 등록과 결제를 완료할 수 있어요.</p>
            </div>
          </div>
        </div>
      </section>
      {/* PickStudy 특징 Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* 타이틀 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            PickStudy만의 특별한 이유
          </h2>
          {/* 서브타이틀 */}
          <p className="text-gray-600 mb-12">
            우리가 다른 이유
          </p>

          {/* 특징 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 카드 1 */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">정확한 학원 정보 제공</h3>
              <p className="text-gray-600">믿을 수 있는 최신 학원 데이터를 제공합니다.</p>
            </div>

            {/* 카드 2 */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">차량 운행 실시간 확인</h3>
              <p className="text-gray-600">자녀의 통학 걱정을 해결하세요.</p>
            </div>

            {/* 카드 3 */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50">
              <div className="text-4xl mb-4">🧑‍🏫</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">전문 강사진 매칭</h3>
              <p className="text-gray-600">검증된 강사진 정보를 제공합니다.</p>
            </div>

            {/* 카드 4 */}
            <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-gray-50">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">간편 결제 시스템</h3>
              <p className="text-gray-600">빠르고 안전한 온라인 결제를 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>
      {/* PickStudy 사용 방법 안내 Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* 타이틀 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            PickStudy 시작하기
          </h2>
          <p className="text-gray-600 mb-12">
            간편하게 시작하는 방법
          </p>

          {/* Step 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-xl shadow-md bg-white hover:shadow-lg transition flex flex-col items-center">
              <div className="text-pickstudyPink text-5xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">학원 찾기</h3>
              <p className="text-gray-600">주변 학원과 원하는 수업을 검색해요.</p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-xl shadow-md bg-white hover:shadow-lg transition flex flex-col items-center">
              <div className="text-pickstudyPink text-5xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">자녀 정보 등록</h3>
              <p className="text-gray-600">내 자녀 정보를 등록하고, 학원과 연결해요.</p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-xl shadow-md bg-white hover:shadow-lg transition flex flex-col items-center">
              <div className="text-pickstudyPink text-5xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">학원 등록 및 결제</h3>
              <p className="text-gray-600">원하는 수업에 등록하고 간편하게 결제해요.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 빈 공간용 상단 배너 섹션 */}
      <section className="w-full bg-gray-100 flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
            Coming Soon...
          </h2>
          <p className="mt-4 text-gray-500">
            이 공간은 추후 배너 또는 이미지를 추가할 예정입니다.
          </p>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-gray-900 py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          {/* 왼쪽 회사 정보 */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left gap-1">
            <div>(주)유플리어</div>
            <div>대표 하찬희 | 사업자정보 1111111111</div>
            <div>주소: 주소지 등</div>
            <div className="mt-2">© 2025 PickStudy. All rights reserved.</div>
          </div>

          {/* 오른쪽 링크 + 소셜 아이콘 */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-right">
            {/* 링크들 */}
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition">회사소개</a>
              <a href="#" className="hover:text-white transition">이용약관</a>
              <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            </div>

            {/* 소셜 아이콘 */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-pickstudyPink transition text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-pickstudyPink transition text-2xl">
                <SiNaver />
              </a>
              <a href="#" className="hover:text-pickstudyPink transition text-2xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;