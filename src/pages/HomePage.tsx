import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoSearchOutline } from "react-icons/io5";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiNaver } from "react-icons/si";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import appStoreBadge from "../assets/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg";
import googlePlayBadge from "../assets/google-play-badge.png";
import bannerImg from "../assets/main_top_banner.jpg";

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

  const faqData = [
    {
      question: "PickStudy는 무료인가요?",
      answer: "기본 학원 검색, 차량 확인 기능은 무료로 제공됩니다.",
    },
    {
      question: "자녀 등록은 어떻게 하나요?",
      answer: "간단한 인증 절차 후 자녀 정보를 입력하면 바로 등록할 수 있습니다.",
    },
    {
      question: "학원 정보는 최신 정보인가요?",
      answer: "PickStudy는 매월 학원 정보를 최신화하고 있습니다.",
    },
    {
      question: "차량 위치는 어떻게 확인하나요?",
      answer: "등록한 학원의 차량 서비스가 연동되어 실시간 위치를 제공합니다.",
    },
    {
      question: "결제는 안전한가요?",
      answer: "카드, 간편결제 등 다양한 안전한 결제 수단을 제공합니다.",
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 고정 헤더 */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-pickstudyPink">PickStudy</div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block ml-4">
              <div className={`origin-right transform transition-transform duration-300 ease-in-out ${isSearchOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} w-64`}>
                <input type="text" placeholder="학원명을 검색해 보세요"
                  className="px-4 py-1.5 h-9 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pickstudyPink w-full"
                />
              </div>
            </div>
            <IoSearchOutline className="text-2xl text-gray-700 cursor-pointer" onClick={handleSearchClick} />
            {isMobileSearchOpen && (
              <div className="fixed inset-0 bg-white z-50 flex flex-col">
                {/* 상단 바 */}
                <div className="flex items-center p-4 border-b border-gray-200">
                  <button onClick={() => setIsMobileSearchOpen(false)} className="text-2xl text-gray-700"><MdKeyboardDoubleArrowLeft /></button>
                  <input type="text" autoFocus placeholder="학원명을 검색해 보세요"
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
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-pink-100 p-6 pt-32 overflow-hidden">
        <motion.img
          src={bannerImg} // 나중에 실제 이미지 파일로 교체
          alt="배경 이미지"
          className="absolute bottom-0 right-0 w-80 opacity-70"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
        />
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
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* 타이틀 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            PickStudy 서비스 소개
          </h2>
          <p className="text-gray-600 mb-12">
            PickStudy에서 이런 것들을 쉽게 이용할 수 있어요
          </p>
          {/* 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 카드 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">학원 찾기</h3>
              <p className="text-gray-600">주변 학원을 검색하고, 원하는 학원을 쉽게 찾을 수 있어요.</p>
            </motion.div>
            {/* 카드 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">차량 운행 관리</h3>
              <p className="text-gray-600">통학 차량의 위치를 실시간으로 확인하고 관리할 수 있어요.</p>
            </motion.div>
            {/* 카드 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">🗓️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">수업 일정 관리</h3>
              <p className="text-gray-600">내 자녀의 수업 일정을 한 눈에 확인할 수 있어요.</p>
            </motion.div>
            {/* 카드 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">결제 및 등록</h3>
              <p className="text-gray-600">앱에서 간편하게 학원 등록과 결제를 완료할 수 있어요.</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* PickStudy 특징 Section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* 왼쪽 텍스트 + 애니메이션 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mb-12 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              정확한 학원 정보 제공<br />+<br />차량 운행 실시간 확인
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              믿을 수 있는 최신 학원 데이터와<br />실시간 차량 위치 확인 기능을 PickStudy에서 경험하세요.
            </p>
            <p className="text-gray-600 text-lg">
              자녀의 통학 걱정은 이제 끝! 실시간으로 확인하고 관리하세요.
            </p>
          </motion.div>
          {/* 오른쪽 앱 이미지 (임시) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
              {/* 나중에 여기에 앱 GIF 삽입 */}
              <span className="text-gray-400">App Screen Here</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* PickStudy 사용 방법 안내 Section */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* 왼쪽 텍스트 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="text-pickstudyPink text-5xl font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">학원 찾기</h3>
              <p className="text-gray-600 text-lg">
                주변 학원과 원하는 수업을 쉽게 검색할 수 있어요.
              </p>
            </motion.div>
            {/* 오른쪽 이미지 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                {/* 여기에 앱 스크린 이미지 예정 */}
                <span className="text-gray-400">App Screen 1</span>
              </div>
            </motion.div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* 오른쪽 텍스트 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="text-pickstudyPink text-5xl font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">자녀 정보 등록</h3>
              <p className="text-gray-600 text-lg">
                내 자녀 정보를 등록하고, 학원과 연결할 수 있어요.
              </p>
            </motion.div>

            {/* 왼쪽 이미지 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-gray-400">App Screen 2</span>
              </div>
            </motion.div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* 왼쪽 텍스트 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="text-pickstudyPink text-5xl font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">학원 등록 및 결제</h3>
              <p className="text-gray-600 text-lg">
                원하는 수업을 등록하고 간편하게 결제할 수 있어요.
              </p>
            </motion.div>
            {/* 오른쪽 이미지 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-gray-400">App Screen 3</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 후기 섹션 */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* 왼쪽 후기 소개 텍스트 */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              PickStudy로 만난 학부모님들의 찐 학원 후기
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              많은 학부모님들과 학생들이 PickStudy를 통해 찾은 학원에서 만족스러운 경험을 하고 있어요.
            </p>
            <p className="text-gray-600 text-lg">
              생생한 학원 이용 후기를 확인해보세요!
            </p>
          </div>
          {/* 오른쪽 스와이퍼 후기 이미지 */}
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={20}
            >
              {/* 각 후기 이미지들 */}
              <SwiperSlide>
                <img src={bannerImg} alt="후기 1" className="rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg} alt="후기 2" className="rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={bannerImg} alt="후기 3" className="rounded-xl shadow-md" />
              </SwiperSlide>
              {/* 추가 이미지 필요하면 더 넣을 수 있음 */}
            </Swiper>
          </div>
        </div>
      </section>
      {/* FAQ 섹션 */}
      <section className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* 타이틀 */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600 mb-12">
            PickStudy에 대해 궁금해하시는 점들을 정리했어요.
          </p>
          {/* FAQ 리스트 */}
          <div className="space-y-6 text-left">
            {faqData.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      {/* AI앱문의 섹션 */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* 왼쪽 문의 시스템 설명 */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              PickStudy만의 AI 문의 시스템
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              단순 매크로 답변이 아닙니다.
            </p>
            <p className="text-gray-600 text-lg">
              PickStudy는 학원별 정보와 수업 유형을 기반으로, AI가 정확하고 맞춤형 답변을 제공합니다.<br />
              문의에 대한 걱정 없이 믿고 사용할 수 있습니다.
            </p>
          </motion.div>
          {/* 오른쪽 앱 문의 스크린샷 (추후 이미지 교체) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-80 h-96 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
              {/* 여기에 나중에 채팅 문의 UI 캡쳐 혹은 모형 GIF 삽입 */}
              <span className="text-gray-400">AI 문의 화면</span>
            </div>
          </motion.div>

        </div>
      </section>
      {/* 콜투액션 섹션 */}
      <section className="w-full bg-cover bg-center py-40" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          {/* 타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            지금 PickStudy를 시작하세요
          </motion.h2>
          {/* 서브텍스트 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg mb-8"
          >
            믿을 수 있는 학원 선택, PickStudy에서 경험하세요.
          </motion.p>
          {/* 단일 버튼 */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-block bg-pickstudyPink text-white font-semibold py-3 px-8 rounded-full text-lg hover:opacity-90 transition"
          >
            PickStudy로 가기
          </motion.a>
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

// FAQItem 컴포넌트
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-lg font-semibold text-gray-800 hover:text-pickstudyPink transition"
      >
        {question}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 transition-all">
          {answer}
        </div>
      )}
    </div>
  );
}