import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { AnimatedSpaceCriteriaCard, AnimatedScenarioCard, AnimatedMilestoneCard, AnimatedRuleCard } from "@/components/animated-sections";
import Image from "next/image";
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
    description_title__1: "Tối ưu công năng .",
    description_title__2: " hiệu năng.",
    description:
      "Không gian sống được thiết kế tiện nghi, hài hòa và bền vững",
  },
  {
    key: "P",
    title: "Pure Aesthetic",
    description_title__1: "Thẩm mỹ ",
    description_title__2: "tinh tế",
    description:
      "Mỗi chi tiết đều được chăm chút để mang lại vẻ đẹp chuẩn gu, giàu cảm xúc",
  },
  {
    key: "A",
    title: "Assured Price",
    description_title__1: "Giá ",
    description_title__2: "minh bạch",
    description:
      "Nói không với phát sinh - Cam kết báo giá rõ ràng ngay từ đầu",
  },
  {
    key: "C",
    title: "Craftsmanship",
    description_title__1: "Vật liệu tốt ",
    description_title__2: "Tay nghề cao",
    description:
      "Lựa chọn vật liệu bền đẹp, thi công bởi đội ngũ uy tín",
  },
  {
    key: "E",
    title: "Enduring",
    description_title__1: "Đồng hành ",
    description_title__2: "lâu dài",
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


const milestones = [
  {
    value: "2,500+",
    label: "m²",
    description:
      "Xưởng sản xuất rộng hơn 2.500m², trang bị máy móc hiện đại đạt chuẩn châu Âu – đáp ứng linh hoạt mọi nhu cầu thiết kế và thi công",
    image:
      "/home/mile_1.png",
  },
  {
    value: "95",
    label: "%",
    description:
      "Công trình bàn giao bám sát bản vẽ thiết kế 3D đến 95%, đảm bảo “ngôi nhà trên giấy” bước ra đời thực như bạn mong đợi",
      image:
      "/home/mile_2.png",
  },
  {
    value: "400+",
    label: "Công trình",
    description:
      "Hơn 400 công trình hoàn thiện – từ căn hộ, nhà phố, biệt thự đến nhà hàng, quán cà phê – đều mang dấu ấn riêng của gia chủ",
      image:
      "/home/mile_3.png",
  },
];

const rules = [
  {
    title: "Không thợ khoán",
    image:
      "/home/icon_1.png",
    description:
      "Tất cả hạng mục thi công đều do đội ngũ thợ chính thức của Anvie Home thực hiện.",
  },
  {
    title: "Không trung gian", image:
    "/home/icon_2.png",
    description:
      "Khách hàng làm việc trực tiếp với Anvie Home, không qua bên thứ ba.",
  },
  {
    title: "Không chi phí phát sinh", image:
    "/home/icon_3.png",
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
        <div className="relative z-10 flex min-h-[400px] md:min-h-[720px] flex-col items-center justify-center gap-4 md:gap-6 text-center px-6 py-16 md:py-20">
          <h1 className="font-bold text-[32px] mt-8 md:mt-0   leading-tight md:text-[56px]">
            {hero.title1} <br />   {hero.title2} <br />
          </h1>
          <p className="max-w-3xl text-base text-white lg:text-xl font-normal px-4">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-0">
            <ButtonLink href="/du-an" label="Khám phá ngay" />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="h-2 w-8  bg-[#B38147] rounded-[12px]" />
            <span className="h-2 w-2  bg-white rounded-full" />
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="relative overflow-hidden min-h-[600px] md:min-h-[768px] text-white ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:`url('/home/space_bg.png')` ,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10 px-6 py-8 md:py-14 text-center">
          <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.6}>
            <p className="text-sm md:text-[18px] text-center font-normal text-white">
            Vì sao chọn Anvie Home cho thiết kế & thi công nội thất?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInDown" delay={0.1} duration={0.6}>
            <h3 className="mt-3 text-center text-[18px] md:text-[32px] font-semibold text-white px-4">
            5 tiêu chí S.P.A.C.E (không gian sống) là kim chỉ nam để <br className="hidden md:block" />
            Anvie kiến tạo không gian sống an yên
            </h3>
          </AnimateOnScroll>
          <div className="mt-6 md:mt-10 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 md:px-0">
            {spaceCriteria.map((item, index) => (
              <AnimatedSpaceCriteriaCard key={item.key} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1170px] mx-auto py-8 md:py-16 w-full  px-4 md:px-0">
        <AnimateOnScroll animation="fadeInUp" delay={0} duration={0.6}>
          <div className="space-y-3">
            <h3 className=" text-[24px] md:text-[32px] font-semibold text-black">
              Nếu có số tiết kiệm 100 triệu, <br className="hidden md:block" /> bạn có thể làm gì với không gian sống của
              mình?
            </h3>
            <p className="text-base md:text-[18px] text-[#515151] font-normal max-w-[520px]">
              Bạn sẽ bất ngờ với những gì Anvie Home có thể làm được. Chúng tôi sẽ giúp
              biến khoản tiết kiệm đó thành giải pháp thiết kế và thi công phù hợp riêng
              cho bạn.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 mt-6">
          {scenarioCards.map((card, index) => (
            <AnimatedScenarioCard key={card.title_1} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden text-white min-h-[400px] md:min-h-[600px] flex items-center justify-center"
       style={{
        backgroundImage:
          `url('/home/da_hoan_thien.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
       
        <div className="relative flex flex-col items-center gap-3 md:gap-4 px-6 py-16 md:py-20 text-center">
          <h3 className="font-sans text-[24px] md:text-[32px] font-semibold text-white px-4">
          Những Không Gian Anvie Đã Hoàn Thiện
          </h3>
          <p className="max-w-[650px] text-base md:text-[20px] text-white font-[300] px-4 mb-4 md:mb-0">
          Chúng tôi kiến tạo những tổ ấm hài hòa giữa thẩm mỹ, công năng và
          sự bình yên, để mỗi ngôi nhà trở thành nơi bạn thật sự muốn trở về
          </p>
          <ButtonLink href="/du-an" label="Xem thêm" />
        </div>
      </section>

      <TestimonialsSection />

      <section className="space-y-4 md:space-y-6 max-w-[1170px] mx-auto px-4 md:px-0 py-8 md:py-16 w-full">
        <AnimateOnScroll animation="fadeInUp" delay={0} duration={0.6}>
          <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-black text-left">
          Những Cột Mốc <br className="hidden md:block" />
          Đáng "Khoe" Của Anvie
          </h3>
        </AnimateOnScroll>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone, index) => (
            <AnimatedMilestoneCard key={milestone.label} milestone={milestone} index={index} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden min-h-[500px] md:min-h-[720px] text-white flex items-center justify-center flex-col px-6 py-8 md:py-16"
        style={{
          backgroundImage:
            "url('/home/quy_tac.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      
        <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.6}>
          <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-white text-center">
          Quy Tắc 3 Không
          </h3>
        </AnimateOnScroll>
        <div className="mt-6 md:mt-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1170px] mx-auto w-full">
          {rules.map((item, index) => (
            <AnimatedRuleCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

    
    </>
  );
}
