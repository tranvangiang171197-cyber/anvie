import type { Metadata } from "next";
import Image from "next/image";

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
              "url('/contact/hero.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex min-h-[460px] flex-col items-center justify-center gap-6 text-center px-6 py-20">
          <h1 className="font-bold text-4xl leading-tight md:text-[56px]">
            Liên hệ
          </h1>
          <p className="max-w-3xl text-lg text-white md:text-xl font-normal">
            Quy trình trọn gói thiết kế & thi công nội thất bạn chỉ việc chờ chìa khóa
          </p>
        </div>
      </section>

      {/* Main Content Section - 2 Columns */}
      <section className="max-w-[1170px] mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-base text-secondary leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất cho từng nhu cầu, để mỗi khách hàng đều nhận được không gian đúng như mong đợi.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              Với xưởng sản xuất riêng, nguồn cung ổn định cùng đội ngũ thi công chuyên nghiệp, Anvie có thể phục vụ xuyên suốt cả ngày thường, lễ tết hay cao điểm.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              Nếu trong quá trình sử dụng có vấn đề phát sinh, Anvie sẵn sàng bảo hành và hỗ trợ kịp thời, để bạn thật sự an tâm khi lựa chọn chúng tôi.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#f7f4f1] rounded-lg p-8">
            <h2 className="font-sans text-[24px] font-semibold text-black mb-6">
              Liên hệ tư vấn khách hàng
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên của bạn"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Lời nhắn"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-secondary focus:border-primary focus:outline-none resize-none"
                />
              </div>
              <p className="text-sm text-secondary">
                Anvie Home sẽ liên hệ lại trong vòng 30 phút đến 1 giờ từ khi gửi thông tin
              </p>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-terracotta-600 transition"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Section - Transfer Info & Working Hours */}
      <section className="max-w-[1170px] mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left - Image with Transfer Info */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/contact/transfer_info.png"
              alt="Thông tin chuyển khoản"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <h3 className="font-sans text-[24px] font-semibold mb-4">
                Thông tin chuyển khoản
              </h3>
              <div className="space-y-2 text-base">
                <p>Ngân hàng VietinBank</p>
                <p>Số tài khoản: 100880484281</p>
                <p>Người nhận: Nguyễn Thị Mai Hương</p>
              </div>
            </div>
          </div>

          {/* Right - Working Hours */}
          <div className="space-y-6">
            <h3 className="font-sans text-[24px] font-semibold text-black">
              Thời gian làm việc
            </h3>
            <div className="space-y-4 text-base text-secondary">
              <p>Phục vụ 24/7 cả Thứ 7-CN</p>
              <p>Hotline/Zalo: 0345954988</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
