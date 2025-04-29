import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // 처음 6개만 보여줌
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const academyList = [
    { id: 1, name: "해피영어학원", description: "영어 전문 학원", imageUrl: "https://via.placeholder.com/100" },
    { id: 2, name: "수학의정석학원", description: "기초부터 심화 수학", imageUrl: "https://via.placeholder.com/100" },
    { id: 3, name: "하이탑과학학원", description: "과학고 대비 전문", imageUrl: "https://via.placeholder.com/100" },
    { id: 4, name: "미래교육센터", description: "창의적 사고 수업", imageUrl: "https://via.placeholder.com/100" },
    { id: 5, name: "글로벌어학원", description: "영어/중국어 전문", imageUrl: "https://via.placeholder.com/100" },
    { id: 6, name: "에이스수학학원", description: "맞춤형 수학 수업", imageUrl: "https://via.placeholder.com/100" },
    { id: 7, name: "브레인스쿨", description: "창의력 증진 프로그램", imageUrl: "https://via.placeholder.com/100" },
    { id: 8, name: "탑클래스학원", description: "최상위권 학생 대상", imageUrl: "https://via.placeholder.com/100" },
    { id: 9, name: "해밀어학원", description: "입시대비 어학 수업", imageUrl: "https://via.placeholder.com/100" },
    { id: 10, name: "코딩키즈", description: "초등생 코딩 교육", imageUrl: "https://via.placeholder.com/100" },
    { id: 11, name: "드림아카데미", description: "다양한 진로 탐색 지원", imageUrl: "https://via.placeholder.com/100" },
    { id: 12, name: "챔피언스포츠센터", description: "운동과 공부 병행", imageUrl: "https://via.placeholder.com/100" },
  ];
  
  // 🔥 필터링 적용
  const filteredList = academyList.filter((academy) =>
    academy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 6); // 6개씩 추가
      }
    });

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }
  }, [filteredList, visibleCount]);

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* 검색바 */}
      <div className="sticky top-0 z-40 bg-gray-50">
        <div className="max-w-[960px] md:max-w-[1080px] lg:max-w-[1280px] mx-auto px-4 py-3 flex items-center gap-3 bg-white border-b border-gray-200">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-gray-700"
          >
            <IoChevronBack />
          </button>
          <input
            type="text"
            placeholder="학원명을 검색해 보세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pickstudyPink"
          />
        </div>
      </div>
      {/* 검색 결과 리스트 */}
      <div className="max-w-[960px] md:max-w-[1080px] lg:max-w-[1280px] mx-auto px-4 py-6">
        {filteredList.slice(0, visibleCount).map((academy, index) => (
          <div
            key={academy.id}
            ref={index === visibleCount - 1 ? lastItemRef : null} // 마지막 요소에 ref 연결
            className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 mb-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => navigate(`/academy/${academy.id}`)}
          >
            {/* 텍스트 */}
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-gray-800">{academy.name}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {academy.description}
              </p>
            </div>
            {/* 이미지 */}
            <img
              src={academy.imageUrl}
              alt={academy.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
          </div>
        ))}

        {/* 모든 데이터 로드 완료 메시지 */}
        {visibleCount >= filteredList.length && (
          <div className="text-center text-gray-400 py-10">
            모든 학원을 불러왔습니다.
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchPage;