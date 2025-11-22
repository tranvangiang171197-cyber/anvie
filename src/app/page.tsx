import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";
import { IoArrowForwardSharp } from "react-icons/io5";

const hero = {
  title1: "Sống An Vi ",
  title2: "Ở An Yên",
  subtitle:
    "Chúng tôi kiến tạo những tổ ấm hài hòa giữa thẩm mỹ, công năng và sự bình yên, để mỗi ngôi nhà trở thành nơi bạn thật sự muốn trở về",
  image1:
    "/home/hero1.png", 
  image2:
    "/home/hero2.png",
};

const services = [
  {
    title: "Thiết kế kiến trúc",
    description:
      "Giải pháp không gian sống chuẩn thẩm mỹ & công năng.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80",
    showDescription: true,
    showArrow: true,
  },
  {
    title: "Thiết kế nội thất",
    description: "Ngôn ngữ nội thất đậm chất Anvie, phù hợp từng gia chủ.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    showDescription: false,
    showArrow: false,
  },
  {
    title: "Thi công nội thất trọn gói",
    description: "Đồng hành từ xưởng tới bàn giao chìa khóa.",
    image:
      "https://images.unsplash.com/photo-1493667588038-9401340f2d21?auto=format&fit=crop&w=1400&q=80",
    showDescription: false,
    showArrow: false,
  },
];

const spaceCriteria = [
  {
    key: "S",
    title: "Smart",
    description:
      "Tối ưu công năng hiệu năng. Không gian sống được thiết kế tiện nghi, hài hòa và bền vững.",
  },
  {
    key: "P",
    title: "Pure Aesthetic",
    description:
      "Thẩm mỹ tinh tế. Mỗi chi tiết đều được chăm chút để mang lại vẻ đẹp chuẩn gu.",
  },
  {
    key: "A",
    title: "Assured Price",
    description:
      "Giá minh bạch. Nói không với phát sinh – cam kết báo giá rõ ràng ngay từ đầu.",
  },
  {
    key: "C",
    title: "Craftsmanship",
    description:
      "Vật liệu tốt, tay nghề cao. Lựa chọn vật liệu bền đẹp, thi công bởi đội ngũ uy tín.",
  },
  {
    key: "E",
    title: "Enduring",
    description:
      "Đồng hành lâu dài. Bảo hành và chăm sóc để bạn luôn an tâm với không gian sống.",
  },
];

const scenarioCards = [
  {
    title: "Quy Trình Thiết Kế Tại Anvie",
    description:
      "Bạn sẽ bất ngờ với những gì Anvie Home có thể làm được từ khoản tiết kiệm của bạn. Chúng tôi giúp biến ngân sách thành giải pháp phù hợp.",
    button: "Chi tiết",
    image:
      "https://images.unsplash.com/photo-1505691722887-195b0c08a59d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Thiết Kế Nội Thất Theo Phong Cách Cá Nhân",
    description:
      "Chúng tôi đồng hành để tạo nên trải nghiệm sống chuẩn gu, giàu cảm xúc và bền vững.",
    button: "Đặt lịch",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
  },
];

const testimonials = [
  {
    name: "Anh Hưng",
    quote:
      "Diện tích nhà không lớn, nhưng nhờ Anvie mà mọi thứ bố trí rất hợp lý. Đội ngũ thi công chăm chút, không phát sinh chi phí bất ngờ.",
  },
  {
    name: "Chị Hoa",
    quote:
      "Ban đầu khá lo nhưng sau khi bàn giao thấy rất ổn. Nội thất đẹp, gia đình ai cũng thích. Đội ngũ nhiệt tình và trách nhiệm.",
  },
  {
    name: "Anh Long",
    quote:
      "Thi công đúng 3D đã duyệt, màu sắc hài hòa, ánh sáng tự nhiên vừa đủ. Giá cả minh bạch và không phát sinh.",
  },
];

const milestones = [
  {
    value: "2,500+",
    label: "m²",
    description:
      "Xưởng sản xuất rộng hơn 2.500 m² với máy móc hiện đại đáp ứng linh hoạt nhu cầu thiết kế & thi công.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    value: "95",
    label: "%",
    description:
      "Công trình bàn giao bám sát bản vẽ thiết kế 3D đến 95%, đảm bảo “ngôi nhà trên giấy” bước ra đời thực như mong đợi.",
    image:
      "https://images.unsplash.com/photo-1505691722887-195b0c08a59d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    value: "400+",
    label: "Công trình",
    description:
      "Hơn 400 công trình hoàn thiện từ căn hộ, nhà phố đến biệt thự, nhà hàng — mỗi nơi đều có câu chuyện riêng.",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
  },
];

const rules = [
  {
    title: "Không thợ khoán",
    description:
      "Tất cả hạng mục thi công đều do đội ngũ thợ chính thức của Anvie Home thực hiện.",
  },
  {
    title: "Không trung gian",
    description:
      "Khách hàng làm việc trực tiếp với Anvie Home, không qua bên thứ ba.",
  },
  {
    title: "Không chi phí phát sinh",
    description:
      "Cam kết báo giá minh bạch, trọn gói ngay từ đầu, không phát sinh thêm chi phí.",
  },
];

export default async function HomePage() {
  const news = await getCollectionSummaries("news", 3);

  return (
    <>
      <section className="relative overflow-hidden   text-white ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image1})` }}
        />
        <div className="relative z-10 flex min-h-[720px] flex-col items-center justify-center gap-6 text-center px-6 py-20">
          <h1 className="font-bold text-4xl leading-tight md:text-[56px] ">
            {hero.title1} <br />   {hero.title2} <br />
          </h1>
          <p className="max-w-3xl text-base text-white md:text-xl font-normal">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/du-an" label="Khám phá ngay" />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-1 w-8  bg-white" />
            <span className="h-1 w-4  bg-white/40" />
          </div>
        </div>
      </section>

      <section className="space-y-6 max-w-[1170px] mx-auto px-6">
        <div className="space-y-6">
          <h2 className="font-sans text-[32px] font-bold text-black">Dịch Vụ Của Chúng Tôi</h2>
          <p className="text-base text-secondary mt-2 font-normal max-w-3xl">
            Anvie Home đồng hành cùng bạn qua từng bước — từ thiết kế kiến trúc,
            thiết kế nội thất đến thi công hoàn thiện — để tạo nên một tổ ấm tinh tế,
            tiện nghi và quan trọng nhất: thật sự bình an.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-500 ${
                index === 0 ? "md:col-span-2" : "md:col-span-1"
              } md:hover:col-span-2`}
            >
              <div
                className="h-[420px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
                    <p className={`text-sm text-white/90 transition-opacity duration-300 ${
                      index === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-opacity duration-300 ${
                    index === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>
                    <IoArrowForwardSharp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "https://images.unsplash.com/photo-1505691722887-195b0c08a59d?auto=format&fit=crop&w=1600&q=80",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Vì sao chọn Anvie Home?
          </p>
          <h3 className="mt-3 font-sans text-3xl">
            5 tiêu chí S.P.A.C.E là kim chỉ nam để Anvie kiến tạo không gian sống an
            yên
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {spaceCriteria.map((item) => (
              <div
                key={item.key}
                className=" bg-white/10 p-5 text-left backdrop-blur"
              >
                <p className="text-3xl font-semibold text-[#d7924c]">{item.key}</p>
                <p className="mt-2 text-sm font-medium uppercase">{item.title}</p>
                <p className="mt-2 text-xs text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-sans text-3xl text-stone-900">
            Nếu có số tiết kiệm 100 triệu, bạn có thể làm gì với không gian sống của
            mình?
          </h3>
          <p className="text-sm text-stone-600">
            Bạn sẽ bất ngờ với những gì Anvie Home có thể làm được. Chúng tôi sẽ giúp
            biến khoản tiết kiệm đó thành giải pháp thiết kế và thi công phù hợp riêng
            cho bạn.
          </p>
        </div>
        <div className="grid gap-4">
          {scenarioCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden  border border-stone-200/80 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="flex flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-sans text-2xl text-stone-900">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm text-stone-600">
                    {card.description}
                  </p>
                </div>
                <ButtonLink href="/lien-he" label={card.button} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "https://images.unsplash.com/photo-1505692989980-7f381962d7d8?auto=format&fit=crop&w=1600&q=80",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-20 text-center">
          <h3 className="font-sans text-3xl">
            Những Không Gian Anvie Đã Hoàn Thiện
          </h3>
          <p className="max-w-3xl text-sm text-white/85">
            Chúng tôi kiến tạo những tổ ấm hài hòa giữa thẩm mỹ, công năng và sự bình
            yên, để mỗi ngôi nhà trở thành nơi bạn thật sự muốn trở về.
          </p>
          <ButtonLink href="/du-an" label="Xem thêm" variant="ghostLight" />
        </div>
      </section>

      <section className=" bg-[#f7f4f1] px-6 py-12">
        <h3 className="text-center font-sans text-3xl text-stone-900">
          Trăm Lời Quảng Cáo Không Bằng Một Feedback
        </h3>
        <p className="mt-2 text-center text-sm text-stone-500">
          Khách hàng nói gì về dịch vụ thiết kế nội thất & kiến trúc tại Anvie Home?
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="x bg-white px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7924c]">
                {testimonial.name}
              </p>
              <p className="mt-4 text-sm text-stone-600">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="font-sans text-3xl text-stone-900">
          Những Cột Mốc Đáng “Khoe” Của Anvie
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.label}
              className="relative overflow-hidden "
            >
              <div
                className="h-[360px] bg-cover bg-center"
                style={{ backgroundImage: `url(${milestone.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 px-6 pb-8 text-white">
                <p className="text-4xl font-bold">
                  {milestone.value}
                  <span className="ml-1 text-xl">{milestone.label}</span>
                </p>
                <p className="text-xs text-white/80">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-12">
          <h3 className="text-center font-sans text-3xl">Quy Tắc 3 Không</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className=" bg-white/08 p-6 text-left backdrop-blur"
              >
                <p className="text-xl font-semibold text-white">{rule.title}</p>
                <p className="mt-2 text-sm text-white/80">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          title="Tin tức nổi bật"
          description="Những câu chuyện vật liệu, công nghệ và phong cách sống mới nhất."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((article) => (
            <ArticleCard
              key={article.slug}
              href={`/tin-tuc/${article.slug}`}
              title={article.title}
              summary={article.summary}
              date={article.date}
              category={article.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}
