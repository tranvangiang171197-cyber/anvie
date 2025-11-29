import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";
import { ServicesSection } from "@/components/services-section";

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


const spaceCriteria = [
  {
    key: "S",
    title: "Smart",
    description_title: "Tối ưu công năng hiệu năng.",
    description:
      "Không gian sống được thiết kế tiện nghi, hài hòa và bền vững",
  },
  {
    key: "P",
    title: "Pure Aesthetic",
    description_title: "Thẩm mỹ tinh tế",
    description:
      "Mỗi chi tiết đều được chăm chút để mang lại vẻ đẹp chuẩn gu, giàu cảm xúc",
  },
  {
    key: "A",
    title: "Assured Price",
    description_title: "Giá minh bạch",
    description:
      "Nói không với phát sinh - Cam kết báo giá rõ ràng ngay từ đầu",
  },
  {
    key: "C",
    title: "Craftsmanship",
    description_title: "Vật liệu tốt Tay nghề cao",
    description:
      "Lựa chọn vật liệu bền đẹp, thi công bởi đội ngũ uy tín",
  },
  {
    key: "E",
    title: "Enduring",
    description_title: "Đồng hành lâu dài",
    description:
      "Bảo hành và hỗ trợ tận tâm để bạn luôn an tâm trong từng không gian sống",
  },
];

const scenarioCards = [
  {
    title_1: "Quy Trình Thiết Kế  ",
    title_2: " Tại Anvie",
    
    button: "Chi tiết",
    image:
      "/home/what_we_do_1.png",
  },
  {
    title_1: "Thiết Kế Nội Thất Theo",
    title_2: " Phong Cách Cá Nhân",
   
    button: "Đặt lịch",
    image:
    "/home/what_we_do_2.png",
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

      <ServicesSection />

      <section className="relative overflow-hidden min-h-[768px]  text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:`url('/home/space_bg.png')` ,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10 px-6 py-14 text-center">
          <p className="text-[18px] text-center font-normal text-white">
          Vì sao chọn Anvie Home cho thiết kế & thi công nội thất?
          </p>
          <h3 className="mt-3 text-center text-[32px] font-semibold text-white">
          5 tiêu chí S.P.A.C.E (không gian sống) là kim chỉ nam để <br />
          Anvie kiến tạo không gian sống an yên
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {spaceCriteria.map((item) => (
              <div
                key={item.key}
                className=" bg-black/32 p-5 text-left backdrop-blur flex flex-col justify-between min-h-[433px]"
              >
                <div>
                <p className="text-[64px] font-semibold text-[#B38147]">{item.key}</p>
                <p className="mt-1 text-[24px] font-medium text-[#B38147] uppercase">{item.title}</p>
                </div>
              
                <div>


                <p className="mt-2 text-[18px] text-white font-bold">{item.description_title}</p>
                <p className="mt-2 text-base text-white font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="space-y-3">
          <h3 className="font-sans text-[32px] font-semibold text-black">
            Nếu có số tiết kiệm 100 triệu, <br /> bạn có thể làm gì với không gian sống của
            mình?
          </h3>
          <p className="text-[18px] text-[#515151] font-normal max-w-[520px]">
            Bạn sẽ bất ngờ với những gì Anvie Home có thể làm được. Chúng tôi sẽ giúp
            biến khoản tiết kiệm đó thành giải pháp thiết kế và thi công phù hợp riêng
            cho bạn.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {scenarioCards.map((card) => (
            <div
              key={card.title_1}
              className="overflow-hidden  "
            >
              <div
                className="min-h-[400px] bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${card.image})` }}
              ><div></div>
              <div className="flex flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between h-[106px ] bg-black/32 backdrop-blur">
                <div className="">
                  <h4 className="text-[24px] font-semibold text-white">
                    {card.title_1}  <br /> {card.title_2}
                  </h4>
                  
                </div>
                <ButtonLink href="/lien-he" label={card.button} />
              </div>
            </div>
            </div>

          ))}
        </div>
      </section>

      <section className="relative overflow-hidden  text-white min-h-[600px] flex items-center justify-center"
       style={{
        backgroundImage:
          `url('/home/da_hoan_thien.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
       
        <div className="relative z-10 flex flex-col items-center gap-4 px-6 py-20 text-center">
          <h3 className="font-sans text-[32px] font-semibold text-white">
          Những Không Gian Anvie Đã Hoàn Thiện
          </h3>
          <p className="max-w-[650px] text-[20px] text-white font-[300]">
          Chúng tôi kiến tạo những tổ ấm hài hòa giữa thẩm mỹ, công năng và
          sự bình yên, để mỗi ngôi nhà trở thành nơi bạn thật sự muốn trở về
          </p>
          <ButtonLink href="/du-an" label="Xem thêm"  />
        </div>
      </section>

      <section className=" bg-[#f7f4f1] px-6 py-12">
        <h3 className="text-center font-sans text-[32px] font-semibold text-black">
        Trăm Lời Quảng Cáo Không Bằng Một Feedback
        </h3>
        <p className="mt-2 text-center text-[18px] text-[#515151] font-normal">
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
