"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Anh Hùng",
    quote:
      "Diện tích nhà mình không lớn, nhưng nhờ Anvie Home mà mọi thứ bố trí rất hợp lý. Phòng khách, bếp, phòng ngủ đều vừa tiện vừa đẹp. Đội ngũ thi công làm việc cẩn thận, nhanh chóng, không phát sinh gì bất ngờ. Mình đặc biệt ưng phần tủ bếp và kệ tivi, rất tiện sử dụng. Cảm giác sống trong nhà mới thoải mái hơn hẳn.",
    avatar: "/home/anh_hung.png",
  },
  {
    name: "Chị Hoa",
    quote:
      "Ban đầu cũng hơi lo nhưng làm xong thấy khá ổn. Nội thất đẹp, tiện dụng, gia đình ai cũng thích. Mình thấy đội ngũ làm việc nhiệt tình và có trách nhiệm.",
    avatar: "/home/chi_hoa.png",
  },
  {
    name: "Anh Long",
    quote:
      "Lúc đầu cũng hơi lo vì chưa từng thuê thiết kế trọn gói, nhưng Anvie làm việc chuyên nghiệp đấy. Khi thi công xong thì đúng như cam kết và bản vẽ 3D trước đấy. Các chi tiết nhỏ  chăm chút kỹ, màu sắc hài hòa, ánh sáng tự nhiên vừa đủ. Giá cả không phát sinh lặt vặt. Nhìn tổng thể thì mình cảm thấy rất vừa ý.",
    avatar: "/home/anh_long.png",
  },
  {
    name: "Chị Ngọc",
    quote:
      "Mình có nghe một chị đồng nghiệp giới thiệu Anvie, nói làm kiểu nhà phố và nội thất đẹp lắm, Liên hệ thứ thì thấy các bạn tư vấn tận tình, giải thích rõ từng chi tiết. Nhà mình sau khi hoàn thiện nơi ấm cúng và tiện nghi, mọi phòng đều hợp lý. Bố mẹ mình thích lắm, đặc biệt là phòng khách và bếp.",
    avatar: "/home/chi_ngoc.png",
  },
  {
    name: "Anh Quý",
    quote:
      "Xong nhà mà không nhậu thử ngay trong bếp thì phí haha. Phòng khách rộng, bếp tiện, tha hồ tụ tập. Nhân viên làm việc cũng vui tính, dễ chịu, hỏi gì là trả lời liền. Ai ghé chơi cũng trầm trồ. Thật ra trước kia mình còn nghi ngờ mấy dịch vụ này, giờ thấy khác hẳn.",
    avatar: "/home/anh_quy.png",
  },
  {
    name: "Chị Xoan",
    quote:
      "Nhà xong mà mình cứ thắc mắc sao trước kia sống chật quá vậy. Giờ mỗi lần vào bếp là thấy vui, phòng khách cũng rộng rãi, tha hồ bạn bè tụ tập. Nhân viên dễ thương, làm xong còn dặn dò kỹ, cảm giác được chăm sóc tận tình.",
    avatar: "/home/chi_xoan.png",
  },
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const innerContainer = innerContainerRef.current;
    if (!container || !innerContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame - tăng tốc độ để dễ thấy hơn
    let animationId: number;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      const halfWidth = innerContainer.scrollWidth / 2;
      
      // Reset to start when reaching half the width (since we duplicate the content)
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure DOM is ready
    const startAnimation = () => {
      animationId = requestAnimationFrame(animate);
    };

    // Small delay to ensure layout is calculated
    const timeoutId = setTimeout(startAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="bg-[#f7f4f1] px-6 py-8 md:py-16 min-h-[500px] md:min-h-[700px] flex items-center justify-center flex-col">
      <div className="max-w-[1170px] w-full text-left">
        <h3 className="text-left font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-black">
          Trăm Lời Quảng Cáo Không Bằng Một Feedback
        </h3>
        <p className="mt-2 text-left text-base md:text-[18px] text-[#515151] font-normal">
          Khách hàng nói gì về dịch vụ thiết kế nội thất & kiến trúc tại Anvie Home?
        </p>
      </div>
      
      {/* Auto-scrolling horizontal slider - All screen sizes */}
      <div 
        ref={scrollContainerRef}
        className="mt-6 md:mt-8 w-full overflow-x-hidden scrollbar-hide max-w-[1170px]"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div ref={innerContainerRef} className="flex gap-4 md:gap-6 w-max px-4 xl:px-0 pb-4">
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="bg-white rounded-[24px] px-6 py-6  relative flex-shrink-0 w-[280px] md:w-[360px]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base font-bold text-[#B38147]">
                  {testimonial.name}
                </p>
              </div>
              <div className="relative">
                <span className="text-[48px] leading-none text-[#E6BC8B] font-bold absolute -top-2 -left-2">
                  "
                </span>
                <p className="text-base text-black font-normal leading-relaxed pt-6 pl-4 py-6">
                  {testimonial.quote}
                </p>
                <span className="text-[48px] leading-none text-[#E6BC8B] font-bold absolute -bottom-6 -right-2">
                  "
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

