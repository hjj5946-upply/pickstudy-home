import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const academyData = {
      id: id,
      name: "해피영어학원",
      description: "영어 전문 학원, 실력 향상을 위한 맞춤 커리큘럼",
      address: "서울특별시 강남구 테헤란로 123",
      phone: "02-123-4567",
      imageUrl: "https://via.placeholder.com/1200x600",
    };
  
    return (
      <section className="w-full min-h-screen bg-gray-50">
        {/* 상단: 가운데 정렬된 대표 이미지 */}
        <div className="w-full flex justify-center bg-gray-50">
          <div className="w-full max-w-[960px] md:max-w-[1080px] lg:max-w-[1280px] relative h-60 md:h-96 bg-gray-300 overflow-hidden rounded-b-2xl">
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
  
        {/* 기본 정보 */}
        <div className="max-w-[960px] md:max-w-[1080px] lg:max-w-[1280px] mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {academyData.name}
          </h1>
          <p className="text-gray-600">{academyData.address}</p>
          <p className="text-gray-600 mt-1">{academyData.phone}</p>
        </div>
      </section>
    );
  }
  
  export default DetailPage;