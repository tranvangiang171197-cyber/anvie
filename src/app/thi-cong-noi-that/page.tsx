import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";

const processSteps = [
  {
    title: "Tiếp nhận yêu cầu & trao đổi",
    description:
      "Ấn định buổi gặp trực tiếp hoặc online để hiểu mục tiêu dự án, ngân sách, tiến độ.",
  },
  {
    title: "Gửi mặt bằng & diện tích",
    description:
      "Thu thập bản vẽ hiện trạng hoặc khảo sát nhanh để nắm kích thước chuẩn xác.",
  },
  {
    title: "Báo giá thiết kế",
    description:
      "Đề xuất gói dịch vụ, phạm vi công việc và kế hoạch nhân sự tham gia.",
  },
  {
    title: "Ký hợp đồng & thanh toán 50%",
    description:
      "Khởi động dự án ngay sau khi ký kết, up dữ liệu lên hệ thống quản lý riêng.",
  },
  {
    title: "Lên bản vẽ kiến trúc sơ bộ",
    description:
      "Bố trí không gian, định hướng phong cách và bảng vật liệu chủ đạo.",
  },
  {
    title: "Khách hàng phản hồi",
    description:
      "Workshop mini để ghi nhận ý kiến và tinh chỉnh ngay trên bản vẽ.",
  },
  {
    title: "Chỉnh sửa & hoàn thiện bản vẽ sơ bộ",
    description:
      "Khoá layout, duyệt concept, chuẩn bị bước triển khai kỹ thuật.",
  },
  {
    title: "Thanh toán 30%",
    description:
      "Đảm bảo tiến độ thi công sau khi hồ sơ được phê duyệt.",
  },
  {
    title: "Triển khai bản vẽ chi tiết",
    description:
      "Phát hành bản vẽ thi công, phối cảnh 3D, bảng khối lượng.",
  },
  {
    title: "Khách hàng phản hồi",
    description:
      "Rà soát kỹ thuật, điều chỉnh lần cuối trước khi in hồ sơ.",
  },
  {
    title: "Chỉnh sửa & hoàn thiện thiết kế",
    description:
      "Tối ưu hệ thống điện nước, ánh sáng, nội thất rời và built-in.",
  },
  {
    title: "Gửi mặt bằng & diện tích thi công",
    description:
      "Bàn giao cho đội thi công Anvie hoặc đối tác do khách hàng lựa chọn.",
  },
  {
    title: "Bàn giao hồ sơ thiết kế",
    description:
      "Kèm checklist vật liệu, bảng dự toán, timeline thi công gợi ý.",
  },
];

const benefits = [
  {
    title: "Hệ thống quản lý dự án riêng",
    description:
      "Khách hàng theo dõi tiến độ, bình luận và phê duyệt từng hạng mục online.",
  },
  {
    title: "Đội ngũ thi công chuyên môn",
    description:
      "Mộc, cơ khí, hoàn thiện – mỗi đội có trưởng nhóm và checklist nghiệm thu.",
  },
  {
    title: "Cam kết bảo hành",
    description:
      "Anvie đồng hành kể cả sau khi bàn giao, xử lý phát sinh trong 24h làm việc.",
  },
];

export default function ExecutionPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-[40px] bg-stone-900 text-white shadow-[0_40px_120px_rgba(17,12,10,0.45)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/65 to-stone-900/25" />
        <div className="relative z-10 space-y-6 px-10 py-16 md:px-16">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-300">
            Thi công nội thất
          </p>
          <h1 className="font-sans text-5xl leading-tight">
            Quy trình thiết kế & thi công tại Anvie Home
          </h1>
          <p className="max-w-3xl text-base text-stone-200">
            Quy trình gồm 13 bước rõ ràng, minh bạch và dễ theo dõi. Khách hàng
            luôn chủ động trong từng quyết định nhưng không cần lo lắng về vận hành.
          </p>
          <ButtonLink href="/lien-he" label="Nhận tư vấn ngay" />
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="13 bước đơn giản, rõ ràng"
          description="Được thiết kế như một hành trình cảm xúc, từ ý tưởng đến bàn giao hồ sơ."
        />
        <div className="grid gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-6 rounded-3xl border border-stone-200/80 bg-white px-6 py-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:grid-cols-[0.2fr_1fr]"
            >
              <div className="text-center md:text-left">
                <p className="text-2xl font-sans text-terracotta-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="font-sans text-2xl text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <SectionHeading
          title="Tài liệu bàn giao gồm những gì?"
          description="Bộ hồ sơ đầy đủ giúp bất kỳ đội thi công nào cũng hiểu và triển khai chính xác."
        />
        <ul className="grid gap-4 text-sm text-stone-700 md:grid-cols-2">
          <li className="rounded-2xl border border-stone-200/80 px-5 py-4">
            Bản vẽ kiến trúc & nội thất chi tiết (PDF + CAD)
          </li>
          <li className="rounded-2xl border border-stone-200/80 px-5 py-4">
            Phối cảnh 3D độ phân giải cao
          </li>
          <li className="rounded-2xl border border-stone-200/80 px-5 py-4">
            Bảng vật liệu – hoàn thiện – mã màu
          </li>
          <li className="rounded-2xl border border-stone-200/80 px-5 py-4">
            Dự toán chi tiết & timeline thi công
          </li>
        </ul>
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <SectionHeading
          title="Lợi ích khi thi công cùng Anvie"
          description="Chúng tôi không chỉ thiết kế đẹp mà còn đảm bảo hiện thực hóa đúng như bản vẽ."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-stone-200/80 px-6 py-6">
              <h4 className="font-sans text-2xl text-stone-900">{benefit.title}</h4>
              <p className="mt-2 text-sm text-stone-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

