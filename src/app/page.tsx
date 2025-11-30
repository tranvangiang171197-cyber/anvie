import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";
import { ArticleCard } from "@/components/content-card";
import { getCollectionSummaries } from "@/lib/content";
import { ServicesSection } from "@/components/services-section";
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

const testimonials = [
  {
    name: "Anh Hùng",
    quote:
      "Diện tích nhà mình không lớn, nhưng nhờ Anvie Home mà mọi thứ bố trí rất hợp lý. Phòng khách, bếp, phòng ngủ đều vừa tiện vừa đẹp. Đội ngũ thi công làm việc cẩn thận, nhanh chóng, không phát sinh gì bất ngờ. Mình đặc biệt ưng phần tủ bếp và kệ tivi, rất tiện sử dụng. Cảm giác sống trong nhà mới thoải mái hơn hẳn.",
    avatar: "/home/anh_hung.png", // Thay bằng đường dẫn avatar thực tế
  },
  {
    name: "Chị Hoa",
    quote:
      "Ban đầu cũng hơi lo nhưng làm xong thấy khá ổn. Nội thất đẹp, tiện dụng, gia đình ai cũng thích. Mình thấy đội ngũ làm việc nhiệt tình và có trách nhiệm.",
    avatar: "/home/chi_hoa.png", // Thay bằng đường dẫn avatar thực tế
  },
  {
    name: "Anh Long",
    quote:
      "Lúc đầu cũng hơi lo vì chưa từng thuê thiết kế trọn gói, nhưng Anvie làm việc chuyên nghiệp đấy. Khi thi công xong thì đúng như cam kết và bản vẽ 3D trước đấy. Các chi tiết nhỏ  chăm chút kỹ, màu sắc hài hòa, ánh sáng tự nhiên vừa đủ. Giá cả không phát sinh lặt vặt. Nhìn tổng thể thì mình cảm thấy rất vừa ý.",
    avatar: "/home/anh_long.png", // Thay bằng đường dẫn avatar thực tế
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
          <p className="text-sm md:text-[18px] text-center font-normal text-white">
          Vì sao chọn Anvie Home cho thiết kế & thi công nội thất?
          </p>
          <h3 className="mt-3 text-center text-[18px] md:text-[32px] font-semibold text-white px-4">
          5 tiêu chí S.P.A.C.E (không gian sống) là kim chỉ nam để <br className="hidden md:block" />
          Anvie kiến tạo không gian sống an yên
          </h3>
          <div className="mt-6 md:mt-10 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 md:px-0">
            {spaceCriteria.map((item) => (
              <div
                key={item.key}
                className="bg-black/32 p-4 md:p-5 text-left backdrop-blur flex flex-col justify-between min-h-[238px] md:min-h-[433px]"
              >
                <div>
                <p className="text-4xl md:text-[64px] font-semibold text-[#B38147]">{item.key}</p>
                <p className="mt-1 text-lg md:text-[24px] font-medium text-[#B38147] uppercase">{item.title}</p>
                </div>
              
                <div>
                <p className="mt-2 text-base md:text-[18px] text-white font-bold">{item.description_title__1} <br /> {item.description_title__2}</p>
                <p className="mt-2 text-sm md:text-base text-white font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1170px] mx-auto py-8 md:py-16 w-full  px-4 md:px-0">
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
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 mt-6">
          {scenarioCards.map((card) => (
            <div
              key={card.title_1}
              className="overflow-hidden  "
            >
              <div
                className="md:min-h-[400px] min-h-[238px] bg-cover bg-center flex flex-col justify-between"
                style={{ backgroundImage: `url(${card.image})` }}
              ><div></div>
              <div className="flex flex-row gap-3 px-4 md:px-6 py-4 md:py-6 items-center justify-between md:min-h-[106px] min-h-[64px] bg-black/32 backdrop-blur">
                <div className="">
                  <h4 className="text-base md:text-[24px] font-semibold text-white">
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

      <section className="bg-[#f7f4f1] px-6 py-8 md:py-16 min-h-[500px] md:min-h-[700px] flex items-center justify-center flex-col">
        <div className="max-w-[1170px] w-full text-left">
        <h3 className="text-left font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-black">
          Trăm Lời Quảng Cáo Không Bằng Một Feedback
        </h3>
        <p className="mt-2 text-left text-base md:text-[18px] text-[#515151] font-normal">
          Khách hàng nói gì về dịch vụ thiết kế nội thất & kiến trúc tại Anvie Home?
        </p>  </div>
        <div className="mt-6 md:mt-8 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1170px] mx-auto w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-[24px] px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.1)] relative"
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
                “
                </span>
                <p className="text-base text-black font-normal leading-relaxed pt-6 pl-4 py-6">
                  {testimonial.quote}
                </p>
                <span className="text-[48px] leading-none text-[#E6BC8B] font-bold absolute -bottom-6 -right-2">
                ”
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 md:space-y-6 max-w-[1170px] mx-auto px-4 md:px-0 py-8 md:py-16 w-full">
        <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-black text-left">
        Những Cột Mốc <br className="hidden md:block" />
        Đáng "Khoe" Của Anvie
        </h3>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.label}
              className="h-[480px] bg-cover bg-center"
              style={{ backgroundImage: `url(${milestone.image})` }}
            >
             
              <div className="flex flex-col justify-between p-4 md:p-6 text-white w-full h-full">
                <div>
                <p className="text-4xl md:text-5xl lg:text-[64px] font-bold">
                  {milestone.value}
                </p>
                <span className="ml-1 text-xl md:text-2xl lg:text-[32px] font-semibold">{milestone.label}</span>

                </div>
               
                <div>
                <p className="text-sm md:text-base text-white">{milestone.description}</p>

                </div>
              </div>
            </div>
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
      
         <h3 className="font-sans text-xl md:text-2xl lg:text-[32px] font-semibold text-white text-center">
         Quy Tắc 3 Không
        </h3>
        <div className="mt-6 md:mt-10 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1170px] mx-auto w-full">
            {rules.map((item) => (
              <div
                key={item.title}
                className="bg-black/60 p-4 md:p-6 text-left flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
              >
                <div>
                <p className="font-semibold text-[#B38147]">
                  <Image src={item.image} alt={item.title} width={50} height={50} className="md:w-[60px] md:h-[60px]" />
                </p>
                </div>
              
                <div>
                <p className="mt-2 text-xl md:text-2xl lg:text-[32px] text-white font-bold">{item.title}</p>
                <p className="mt-2 text-sm md:text-base text-white font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
      </section>

    
    </>
  );
}
