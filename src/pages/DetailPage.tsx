import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const academyData = {
  name: "하늘영어학원",
  category: "서울 | 수학",
  rating: 4.5,
  reviews: 245,
  description: "OO커리큘럼으로 확실한 수학 마스터하기",
  distance: "250m",
  address: "서울 강남구 학동로 123",
  tags: ["픽업가능", "중등부", "고등부"],
  imageUrl: "https://via.placeholder.com/1200x600",
  intro:
    "하늘영어학원은 학생 개개인의 학습 수준과 성장을 고려한 맞춤형 교육을 제공합니다. 최고 수준의 강사진과 커리큘럼으로 수능 영역, 내신, 면접까지 완벽하게 대비할 수 있습니다.",
};

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"intro" | "review">("intro");

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* 대표 이미지 영역 */}
      <div className="w-full flex justify-center bg-gray-50">
        <div className="w-full max-w-[960px] md:max-w-[1080px] lg:max-w-[1280px] relative h-60 md:h-96 overflow-hidden rounded-b-2xl">
          <img
            src={academyData.imageUrl}
            alt={academyData.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md text-gray-800"
          >
            <IoChevronBack size={24} />
          </button>
        </div>
      </div>

      {/* 기본 정보 + 태그 */}
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <p className="text-sm text-gray-500">{academyData.category}</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
          {academyData.name}
        </h1>

        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="text-yellow-500 text-base">★</span>
          <span className="ml-1 font-medium">{academyData.rating}</span>
          <span className="ml-1">({academyData.reviews}개 리뷰)</span>
        </div>

        <p className="text-gray-600 mt-2 text-sm">{academyData.description}</p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
          <span>📍 현재 위치에서 {academyData.distance}</span>
          <span>·</span>
          <span>{academyData.address}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {academyData.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                tag === "픽업가능"
                  ? "bg-blue-100 text-blue-800"
                  : tag === "중등부"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="max-w-[1280px] mx-auto px-4 border-b border-gray-200">
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <button
            className={`py-3 ${
              activeTab === "intro"
                ? "text-pickstudyPink border-b-2 border-pickstudyPink"
                : "hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("intro")}
          >
            소개
          </button>
          <button
            className={`py-3 ${
              activeTab === "review"
                ? "text-pickstudyPink border-b-2 border-pickstudyPink"
                : "hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("review")}
          >
            리뷰
          </button>
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {activeTab === "intro" && (
          <div>
            <h2 className="text-lg font-bold mb-2">소개</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {academyData.intro}
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div>
            <h2 className="text-lg font-bold mb-2">리뷰</h2>
            <p className="text-gray-700">리뷰 영역은 곧 추가됩니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default DetailPage;