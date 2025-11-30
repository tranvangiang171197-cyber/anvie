import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Quy Trình Thiết Kế Kiến Trúc | Anvie Home",
  description:
    "Quy trình thiết kế kiến trúc tại Anvie Home gồm 13 bước đơn giản, rõ ràng, minh bạch và tối ưu.",
};

const processSteps = [
  {
    step: 1,
    title: "Tiếp nhận yêu cầu và trao đổi",
    description:
      "Khi bạn liên hệ, chúng tôi sẽ lắng nghe kỹ yêu cầu: mục đích sử dụng, phong cách mong muốn, ngân sách và các ưu tiên (ví dụ: ánh sáng, công năng, vật liệu,...).",
    output: "Đầu ra: tóm tắt yêu cầu khách hàng, phạm vi thiết kế dự kiến.",
    image: "/design/step_1.png",
    imagePosition: "right",
  },
  {
    step: 2,
    title: "Gửi mặt bằng & diện tích",
    description:
      "Khách hàng cung cấp mặt bằng hiện trạng (bản vẽ hoặc ảnh), kích thước các phòng, vị trí cửa, hành lang, đường điện nước cơ bản và các ràng buộc pháp lý nếu có. Nếu chưa có bản vẽ chuẩn, Anvie Home hỗ trợ đo vẽ khảo sát (theo thỏa thuận).",
    output: "Đầu ra: file mặt bằng cơ sở hoặc báo cáo khảo sát.",
    image: "/design/step_2.png",
    imagePosition: "left",
  },
  {
    step: 3,
    title: "Báo giá thiết kế",
    description:
      "Dựa trên phạm vi công việc và mặt bằng, chúng tôi lập báo giá chi tiết cho phần thiết kế. Báo giá nêu rõ các khoản đã bao gồm và điều kiện áp dụng.",
    output: "Đầu ra: tư liệu báo giá bằng văn bản (PDF/Email).",
    image: "/design/step_3.png",
    imagePosition: "right",
  },
  {
    step: 4,
    title: "Ký hợp đồng & thanh toán 50%",
    description:
      "Sau khi đồng ý báo giá, hai bên ký hợp đồng dịch vụ thiết kế để cam kết tiến độ, phạm vi và bản quyền sử dụng hồ sơ. Khách hàng thanh toán trước 50% giá trị hợp đồng để bắt đầu triển khai.",
    output: "Đầu ra: hợp đồng đã ký, biên nhận thanh toán.",
    image: "/design/step_4.png",
    imagePosition: "left",
  },
  {
    step: 5,
    title: "Lên bản vẽ kiến trúc sơ bộ",
    description:
      "Đội ngũ thiết kế phát triển phương án sơ bộ: bố trí công năng, khối tích công trình, sơ đồ cảnh quan cơ bản, ghi chú vật liệu chính. Mục tiêu là hình dung tổng thể và đảm bảo phù hợp công năng.",
    output: "Đầu ra: bản vẽ sơ bộ (mặt bằng, một vài phối cảnh/3D minh họa, ý tưởng vật liệu).",
    image: "/design/step_5.png",
    imagePosition: "right",
  },
  {
    step: 6,
    title: "Khách hàng phản hồi",
    description:
      "Khách hàng xem xét bản vẽ sơ bộ và phản hồi về công năng, thẩm mỹ, ghi chú kỹ thuật hoặc yêu cầu chỉnh sửa. Phản hồi càng chi tiết, việc tối ưu sẽ càng nhanh và chính xác.",
    output: "Đầu ra: danh sách phản hồi/ghi chú chỉnh sửa từ khách hàng.",
    image: "/design/step_6.png",
    imagePosition: "left",
  },
  {
    step: 7,
    title: "Chỉnh sửa và hoàn thiện bản vẽ sơ bộ",
    description:
      "Dựa trên phản hồi, kiến trúc sư điều chỉnh phương án sơ bộ, tối ưu mặt bằng, tỉ lệ không gian và hoàn thiện phối cảnh để đạt được phương án chốt.",
    output: "Đầu ra: bản vẽ sơ bộ hoàn chỉnh và phê duyệt bằng văn bản/Email.",
    image: "/design/step_7.png",
    imagePosition: "right",
  },
  {
    step: 8,
    title: "Thanh toán 30%",
    description:
      "Sau khi phương án sơ bộ được duyệt, khách hàng thanh toán 30% tiếp theo theo hợp đồng để Anvie Home triển khai bản vẽ kiến trúc chi tiết.",
    output: "Đầu ra: biên nhận thanh toán.",
    image: "/design/step_8.png",
    imagePosition: "left",
  },
  {
    step: 9,
    title: "Triển khai bản vẽ kiến trúc chi tiết",
    description:
      "Kiến trúc sư và kỹ sư lập hồ sơ thiết kế chi tiết: mặt bằng thi công, mặt cắt, mặt đứng, chi tiết cửa, cầu thang, vị trí điện nước, chi tiết hoàn thiện, bảng vật liệu, hướng dẫn kỹ thuật thi công.",
    output: "Đầu ra: hồ sơ thiết kế chi tiết đủ để nhà thầu thi công trực tiếp.",
    image: "/design/step_9.png",
    imagePosition: "right",
  },
  {
    step: 10,
    title: "Khách hàng phản hồi",
    description:
      "Khách hàng xem xét hồ sơ chi tiết, kiểm tra các chi tiết kỹ thuật, vật liệu và yêu cầu bổ sung. Nếu có điểm chưa rõ, đội ngũ sẽ giải thích và ghi nhận để điều chỉnh.",
    output: "Đầu ra: danh sách phản hồi chi tiết từ khách hàng.",
    image: "/design/step_10.png",
    imagePosition: "left",
  },
  {
    step: 11,
    title: "Chỉnh sửa & hoàn thiện thiết kế",
    description:
      "Anvie Home thực hiện chỉnh sửa cuối cùng theo phản hồi, cập nhật các chi tiết cần thiết và chuẩn bị hồ sơ bản in/bản điện tử hoàn chỉnh để bàn giao.",
    output: "Đầu ra: hồ sơ thiết kế hoàn thiện.",
    image: "/design/step_11.png",
    imagePosition: "right",
  },
  {
    step: 12,
    title: "Thanh toán 20%",
    description:
      "Khách hàng thanh toán phần còn lại (20%) sau khi hồ sơ thiết kế hoàn chỉnh và tất cả điều khoản hợp đồng được thực hiện.",
    output: "Đầu ra: biên nhận thanh toán cuối cùng.",
    image: "/design/step_12.png",
    imagePosition: "left",
  },
  {
    step: 13,
    title: "Bàn giao hồ sơ thiết kế",
    description:
      "Chúng tôi bàn giao toàn bộ hồ sơ (bản in, file mềm, thư mục vật liệu, hướng dẫn thi công, bản vẽ cấu kiện nếu có) và hướng dẫn sơ bộ cho nhà thầu/khách hàng về cách dùng hồ sơ. Anvie Home sẵn sàng hỗ trợ tư vấn trong giai đoạn thi công nếu có yêu cầu bảo hành thiết kế theo hợp đồng.",
    output: "Đầu ra: bộ hồ sơ bàn giao + biên bản nghiệm thu hồ sơ.",
    image: "/design/step_13.png",
    imagePosition: "right",
  },
];

const ctaCards = [
  {
    title: "Hẹn làm nhà ngay hôm nay",
    button: "Đặt Lịch Tư Vấn",
    image: "/design/cta_1.png",
  },
  {
    title: "Báo giá chi tiết cân đối ngân sách của bạn",
    button: "Nhận Báo Giá Chi Tiết",
    image: "/design/cta_2.png",
  },
];

export default function InteriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/design/process_hero.png')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex min-h-[460px] flex-col items-center justify-center gap-6 text-center px-6 py-20">
          <h1 className="font-bold text-4xl leading-tight md:text-[56px]">
            Quy Trình Thiết Kế Kiến Trúc Tại
            <br />
            Anvie Home
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-[1170px] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-sans text-[32px] md:text-[40px] font-semibold text-black mb-4">
            Quy Trình Gồm 13 Bước Đơn Giản, Rõ Ràng
          </h2>
          <p className="text-base text-secondary max-w-3xl mx-auto leading-relaxed">
            Tại Anvie Home, quy trình thiết kế được tổ chức chặt chẽ, minh bạch và tối ưu. Mỗi bước đều có đầu ra rõ ràng và có sự tương tác giữa chủ nhà và đội ngũ thiết kế, đảm bảo sản phẩm cuối cùng phản ánh đúng nhu cầu, phong cách và ngân sách của bạn.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-[1170px] mx-auto  py-8">
        {processSteps.map((step, index) => (
          <div
            key={step.step}
            className={`grid gap-8 md:grid-cols-2 items-center mb-16 ${
              step.imagePosition === "left" ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* Text Content */}
            <div
              className={`space-y-4 ${
                step.imagePosition === "left" ? "md:col-start-2" : ""
              }`}
            >
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-[12px] h-[52px] w-[138px] text-[24px] font-semibold text-center  flex items-center justify-center">
                Bước {step.step}
              </div>
              <h3 className="font-sans text-[28px] md:text-[32px] font-semibold text-black leading-tight">
                {step.title}
              </h3>
              <p className="text-base text-secondary ">
                {step.description}
              </p>
              <p className="text-base text-secondary ">
                {step.output}
              </p>
            </div>

            {/* Image */}
            <div
              className={`relative h-[280px]  overflow-hidden ${
                step.imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-[1170px] mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {ctaCards.map((card, index) => (
            <div
              key={index}
              className="relative h-[300px] rounded-lg overflow-hidden group"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <h3 className="text-[24px] font-semibold text-white flex-1">
                  {card.title}
                </h3>
                <ButtonLink
                  href="/lien-he"
                  label={card.button}
                  variant="primary"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
