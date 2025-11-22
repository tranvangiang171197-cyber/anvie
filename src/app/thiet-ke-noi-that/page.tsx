import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";

const services = [
  {
    title: "Thiết kế kiến trúc",
    description:
      "Quy hoạch tổng thể, tối ưu công năng – ánh sáng – thông gió ngay từ mặt bằng.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Thiết kế nội thất",
    description:
      "Nội thất đặt riêng, vật liệu được chọn lọc để chạm đến cảm xúc tinh tế.",
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Thi công trọn gói",
    description:
      "Từ xưởng mộc, cơ khí đến hoàn thiện, đảm bảo đúng tiến độ và ngân sách.",
    image:
      "https://images.unsplash.com/photo-1505691722887-195b0c08a59d?auto=format&fit=crop&w=800&q=80",
  },
];

const spacePrinciples = [
  {
    key: "S",
    title: "Smart",
    description: "Giải pháp thông minh cho từng trải nghiệm sống hàng ngày.",
  },
  {
    key: "P",
    title: "Pure Aesthetic",
    description: "Thẩm mỹ tinh tế dựa trên ngôn ngữ tối giản và vật liệu quý.",
  },
  {
    key: "A",
    title: "Assured Price",
    description: "Báo giá minh bạch, chia nhỏ từng hạng mục theo tiến độ.",
  },
  {
    key: "C",
    title: "Craftsmanship",
    description: "Đội ngũ thi công tay nghề cao, kiểm soát chất lượng từng bước.",
  },
  {
    key: "E",
    title: "Enduring",
    description: "Hệ thống vận hành bền vững, dễ bảo trì và nâng cấp.",
  },
];

const scenarioCards = [
  {
    title: "Quy trình thiết kế tại Anvie",
    description:
      "Tư vấn concept, lên phối cảnh, lập hồ sơ kỹ thuật và bàn giao ngay tại nhà.",
    cta: "Xem quy trình",
  },
  {
    title: "Thiết kế nội thất theo phong cách cá nhân",
    description:
      "Chọn layout, moodboard và playlist cảm hứng cho từng thành viên trong gia đình.",
    cta: "Đặt lịch tư vấn",
  },
];

const completedSpaces = [
  {
    title: "Không gian Anvie đã hoàn thiện",
    description:
      "Hơn 2.500 m² nhà phố, căn hộ và biệt thự đã bàn giao trong 3 năm gần đây.",
  },
  {
    title: "Các mốc đáng nhớ",
    description:
      "95% khách hàng quay lại cho hạng mục mới; 400+ đối tác cung ứng vật liệu.",
  },
];

const testimonials = [
  {
    author: "Anh Hưng – Vinhomes",
    quote:
      "Anvie giúp gia đình tôi nhìn rõ hành trình hoàn thiện tổ ấm, mọi thông tin luôn cập nhật kịp lúc.",
  },
  {
    author: "Chị Hoa – Thảo Điền",
    quote:
      "Mình trân trọng cách đội ngũ lắng nghe và chuyển hóa gu thẩm mỹ cá nhân thành không gian sống thực tế.",
  },
  {
    author: "Anh Long – Đà Nẵng",
    quote:
      "Thi công chuẩn xác, bàn giao đúng tiến độ, không phát sinh chi phí so với hợp đồng.",
  },
];

const metrics = [
  { value: "2.500+ m²", label: "Không gian đã hoàn thiện" },
  { value: "95%", label: "Khách hàng quay lại" },
  { value: "400+", label: "Đối tác vật liệu" },
];

const rules = [
  {
    title: "Không thỏa hiệp",
    description: "Với chất lượng vật liệu và tay nghề thợ trong từng dự án.",
  },
  {
    title: "Không trung gian",
    description: "Làm việc trực tiếp giữa Anvie và gia chủ, tiết kiệm thời gian.",
  },
  {
    title: "Không chi phí phát sinh",
    description: "Mọi hạng mục đều minh bạch ngay từ hợp đồng ban đầu.",
  },
];

export default function InteriorPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-[40px] bg-stone-900 text-white shadow-[0_40px_120px_rgba(17,12,10,0.45)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505692761622-9336a73ea0b7?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/20" />
        <div className="relative z-10 grid gap-8 px-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-300">
              Thiết kế nội thất
            </p>
            <h1 className="font-sans text-5xl leading-tight">
              Sống An Vi Ở An Yên
            </h1>
            <p className="text-base text-stone-100">
              Chúng tôi tạo nên không gian ở cân bằng giữa cảm xúc thẩm mỹ và
              công năng vận hành, từ căn hộ hiện đại đến biệt thự nghỉ dưỡng.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/du-an" label="Xem portfolio" />
              <ButtonLink
                href="/lien-he"
                label="Đặt lịch gặp gỡ"
                variant="ghostLight"
              />
            </div>
          </div>
          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-200">
              Dịch vụ của chúng tôi
            </p>
            <p className="mt-4 text-sm text-stone-100">
              Anvie đồng hành từ khảo sát hiện trạng, thiết kế concept, phát hành
              hồ sơ kỹ thuật đến thi công và styling bàn giao.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          title="Dịch vụ của chúng tôi"
          description="Mỗi hạng mục đều có đội ngũ chuyên biệt, giúp kiểm soát tiến độ và chất lượng."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden
              />
              <div className="space-y-3 px-6 py-6">
                <h3 className="font-sans text-2xl text-stone-900">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[40px] border border-stone-200/60 bg-stone-900 px-10 py-12 text-white shadow-[0_40px_120px_rgba(17,12,10,0.4)]">
        <SectionHeading
          align="center"
          kicker="5 tiêu chí S.P.A.C.E"
          title="Kim chỉ nam để Anvie kiến tạo không gian sống an yên"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {spacePrinciples.map((item) => (
            <div
              key={item.key}
              className="rounded-3xl border border-white/20 bg-white/5 p-4 text-center"
            >
              <p className="text-3xl font-semibold text-terracotta-300">
                {item.key}
              </p>
              <h4 className="mt-2 font-sans text-xl">{item.title}</h4>
              <p className="mt-2 text-xs text-stone-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {scenarioCards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-stone-200/80 bg-white px-6 py-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)]"
          >
            <h3 className="font-sans text-2xl text-stone-900">{card.title}</h3>
            <p className="mt-3 text-sm text-stone-600">{card.description}</p>
            <ButtonLink
              href="/lien-he"
              label={card.cta}
              variant="ghost"
            />
          </div>
        ))}
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <SectionHeading
          title="Những không gian Anvie đã hoàn thiện"
          description="Ghi dấu bằng sự chỉn chu trong từng đường nét nội thất."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {completedSpaces.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200/80 px-6 py-6"
            >
              <h4 className="font-sans text-2xl text-stone-900">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Trăm lời quảng cáo không bằng feedback"
          description="Khách hàng là người kể câu chuyện đáng tin nhất."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((quote) => (
            <div
              key={quote.author}
              className="rounded-3xl border border-stone-200/80 bg-white px-6 py-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm text-stone-600">“{quote.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                {quote.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="font-sans text-4xl text-terracotta-600">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-stone-600">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <SectionHeading
          title="Quy tắc 3 không"
          description="Cam kết giúp Anvie giữ trọn niềm tin của khách hàng."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {rules.map((rule) => (
            <div key={rule.title} className="rounded-3xl border border-stone-200/80 px-6 py-6">
              <h4 className="font-sans text-2xl text-stone-900">{rule.title}</h4>
              <p className="mt-2 text-sm text-stone-600">{rule.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

