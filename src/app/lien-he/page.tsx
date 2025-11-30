import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export const metadata: Metadata = {
  title: "Liên hệ | Anvie Home",
  description:
    "Liên hệ với Anvie Home để được tư vấn về thiết kế và thi công nội thất trọn gói.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/contact/contact.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex min-h-[300px] md:min-h-[460px] flex-col items-center justify-center gap-4 md:gap-6 text-center px-6 py-12 md:py-20">
          <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.8}>
            <h1 className="font-bold text-2xl md:text-4xl leading-tight lg:text-[56px]">
              Liên hệ
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
            <p className="max-w-3xl text-sm md:text-base text-white lg:text-xl font-normal px-4">
              Quy trình trọn gói thiết kế & thi công nội thất bạn chỉ việc chờ chìa khóa
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content Section - 2 Columns */}
      <section className="max-w-[1170px] mx-auto px-6 py-8 md:py-16 mt-4 md:mt-8">
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-12">
          {/* Left Column - Text Content */}
          <AnimateOnScroll animation="fadeInRight" delay={0} duration={0.7}>
            <div className="space-y-4 md:space-y-6 md:col-span-6 flex flex-col justify-center">
              <p className="text-sm md:text-base text-secondary leading-relaxed">
                Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất cho từng nhu cầu, để mỗi khách hàng đều nhận được không gian đúng như mong đợi.
              </p>
              <p className="text-sm md:text-base text-secondary leading-relaxed">
                Với xưởng sản xuất riêng, nguồn cung ổn định cùng đội ngũ thi công chuyên nghiệp, Anvie có thể phục vụ xuyên suốt cả ngày thường, lễ tết hay cao điểm.
              </p>
              <p className="text-sm md:text-base text-secondary leading-relaxed">
                Nếu trong quá trình sử dụng có vấn đề phát sinh, Anvie sẵn sàng bảo hành và hỗ trợ kịp thời, để bạn thật sự an tâm khi lựa chọn chúng tôi.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right Column - Contact Form */}
          <AnimateOnScroll animation="fadeInLeft" delay={0.2} duration={0.7}>
            <div className="bg-[#FFF3E5] p-4 md:p-6 md:col-span-6">
            <h2 className="font-sans text-lg md:text-xl lg:text-[24px] font-semibold text-black mb-4 md:mb-6">
              Liên hệ tư vấn khách hàng
            </h2>
            <form className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  className="w-full border border-[#B38147] bg-transparent px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full border border-[#B38147] bg-transparent px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-[#B38147] bg-transparent px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Lời nhắn"
                  rows={4}
                  className="w-full border border-[#B38147] bg-transparent px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none resize-none"
                />
              </div>
              <p className="text-xs md:text-sm text-secondary">
                Anvie Home sẽ liên hệ lại trong vòng 30 phút đến 1 giờ từ khi gửi thông tin
              </p>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-2 md:py-3 text-base md:text-[18px] font-semibold hover:bg-terracotta-600 transition cursor-pointer"
              >
                Gửi thông tin
              </button>
            </form>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom Section - Transfer Info & Working Hours */}
      <section className="px-6 py-8 md:py-16 bg-[#F4F4F4] mt-4 md:mt-8">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid gap-8 md:gap-16 grid-cols-1 md:grid-cols-2">
            {/* Left - Image on desktop, below text on mobile */}
            <AnimateOnScroll animation="fadeInLeft" delay={0} duration={0.7}>
              <div className="relative h-[250px] md:h-[380px] w-full order-2 md:order-1">
                <Image
                  src="/contact/chuyen_khoan.png"
                  alt="Thông tin chuyển khoản"
                  width={570}
                  height={380}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimateOnScroll>

            {/* Right - Text Content in 2 columns on desktop, stacked on mobile */}
            <AnimateOnScroll animation="fadeInRight" delay={0.2} duration={0.7}>
              <div className="grid gap-4  grid-cols-1 md:grid-cols-1 order-1 md:order-2">
              {/* Transfer Info */}
              <div className="space-y-4 md:space-y-6 text-black">
                <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold mb-3 md:mb-4">
                  Thông tin chuyển khoản
                </h3>
                <div className="space-y-2 text-sm md:text-base text-secondary">
                  <p>Ngân hàng VietinBank</p>
                  <p>Số tài khoản: 100880484281</p>
                  <p>Người nhận: Nguyễn Thị Mai Hương</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-4 md:space-y-6 text-black">
                <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold mb-3 md:mb-4">
                  Thời gian làm việc
                </h3>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base text-secondary">
                  <p>Phục vụ 24/7 cả Thứ 7-CN</p>
                  <p>Hotline/Zalo: 0345954988</p>
                </div>
              </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
