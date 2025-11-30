"use client";

import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const services = [
  {
    title: "Thiết kế kiến trúc",
    description:
      "Giải pháp không gian sống chuẩn thẩm mỹ & công năng.",
    image: "/home/service_1.png",
  },
  {
    title: "Thiết kế nội thất",
    description: "Ngôn ngữ nội thất đậm chất Anvie, phù hợp từng gia chủ.",
    image: "/home/service_1.png",
  },
  {
    title: "Thi công nội thất trọn gói",
    description: "Đồng hành từ xưởng tới bàn giao chìa khóa.",
    image: "/home/service_1.png",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="space-y-6 xl:w-[1170px] mx-auto  px-4 md:px-0 py-16 ">
      <div className="space-y-6 w-full">
        <h2 className="font-sans md:text-[32px] text-[24px] font-bold text-black">Dịch Vụ Của Chúng Tôi</h2>
        <p className="text-base text-secondary mt-2 font-normal max-w-3xl">
          Anvie Home đồng hành cùng bạn qua từng bước — từ thiết kế kiến trúc,
          thiết kế nội thất đến thi công hoàn thiện — để tạo nên một tổ ấm tinh tế,
          tiện nghi và quan trọng nhất: thật sự bình an.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-4 w-full">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const isDefault = index === 0 && hoveredIndex === null;
          const shouldShowContent = isHovered || isDefault;
          const shouldShrink = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index === 0 ? 0 : null)}
              className={`relative z-0 transition-all duration-500 ease-in-out ${
                isHovered || isDefault
                  ? "md:col-span-2"
                  : "md:col-span-1"
              } ${shouldShrink ? "md:scale-95" : "md:scale-100"} ${isHovered ? "z-10" : ""}`}
            >
              <div className="relative overflow-hidden h-[420px] w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-white">
                  <div className="flex items-end justify-between gap-4 flex-row">
                    <div className="space-y-2 flex-1 text-left">
                      <h3 className="text-[24px] font-bold leading-tight">{service.title}</h3>
                      <p
                        className={`text-base font-normal text-white transition-opacity duration-300 ${
                          shouldShowContent ? "display" : "hidden"
                        }`}
                      >
                        {service.description}
                      </p>
                   
                    <div
                      className={` w-10 h-10 rounded-full bg-transparent  flex items-center justify-center border border-white transition-opacity duration-300 ${
                         shouldShowContent ? "display" : "hidden"
                      }`}
                    >
                      <IoArrowForwardSharp className="w-5 h-5 text-white" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

