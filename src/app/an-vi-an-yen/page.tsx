import type { Metadata } from "next";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export const metadata: Metadata = {
  title: "An Vi & An Yên | Anvie Home",
  description:
    "Sống An Vi, Ở An Yên - Anvie Home kiến tạo những tổ ấm hài hòa giữa thẩm mỹ, công năng và sự bình yên.",
};
const hero = {
  title: "Anvie - Sống An Vi, Ở An Yên",
  quote: "Một thiết kế tốt là thiết kế ai cũng có thể hiểu và cảm nhận nhưng không dễ dàng bị lãng quên",
  author: "Oscar Niemeyer",
  image: "/anvi/anvi_home.png",
};


const brandMessages = [
  {
    title: "Một",
    title_2: "ngôi nhà ",
    title_3: "đẹp",
    description:
      "Không chỉ nằm ở hình thức mà còn ở cách nó chạm đến trải nghiệm sống của gia chủ",
  },
  {
    title: "Một ",
    title_2: "không gian sống ",
    title_3: "chuẩn gu",
    description:
      "Là sự hòa quyện giữa công năng, thẩm mỹ và giá trị tinh thần",
  },
  {
    title: "Một",
    title_2: "tổ ấm ",
    title_3: "bền vững",
    description:
      "Phải được xây dựng từ vật liệu tốt, quy trình minh bạch và tình yêu với nghề",
  },
];

const scenarioCards = [
  {
    title_1: "SỨ MỆNH  ",
    desc:"Anvie mang đến giải pháp thiết kế kiến trúc và nội thất hài hòa giữa công năng - thẩm mỹ - sự tiện nghi, để mỗi ngôi nhà vừa đẹp vừa dễ sống. Chúng tôi mong muốn giúp khách hàng an tâm khi xây dựng tổ ấm, từ ý tưởng đến lúc nhận chìa khóa, để mỗi ngôi nhà trở thành điểm tựa bình an",
    image:
      "/anvi/su_menh.png",
  },
  {
    title_1: "TẦM NHÌN",
   desc:"Anvie hướng đến trở thành thương hiệu thiết kế & thi công nội thất – ngoại thất uy tín tại Việt Nam, được nhắc đến như người bạn đồng hành tin cậy trong hành trình kiến tạo những không gian sống hiện đại, bền vững và an yên",
    image:
    "/anvi/tam_nhin.png",
  },
];


const futureGoals = [
  {
    icon: "/anvi/anvi_icon_1.png",
    description:
      "Phục vụ hàng chục nghìn khách hàng trên khắp cả nước, từ căn hộ chung cư, nhà phố, biệt thự cho đến các công trình thương mại",
  },
  {
    icon: "/anvi/anvi_icon_2.png",
    description:
      "Mở rộng mạng lưới dịch vụ với hệ thống showroom, xưởng sản xuất hiện đại để đáp ứng đa dạng nhu cầu",
  },
  {
    icon: "/anvi/anvi_icon_3.png",
    description:
      "Tiên phong trong thiết kế bền vững, kết hợp công nghệ mới và vật liệu thân thiện môi trường để kiến tạo những không gian sống an toàn, lâu dài",
  },
];

export default async function AnViAnYenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
        />
        <div className="relative z-10 flex min-h-[300px] md:min-h-[460px] flex-col items-center justify-center gap-4 md:gap-6 text-center px-6 py-12 md:py-20">
          <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.8}>
            <h1 className="font-bold text-[32px] leading-tight md:text-[56px] px-4 mt-8 md:mt-0">
              {hero.title}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={0.2} duration={0.8}>
            <p className="max-w-3xl text-base text-white md:text-[20px] font-normal italic px-4">
              "{hero.quote}" - {hero.author}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Anvie Home giúp bạn nuôi dưỡng bình an */}
      <section className="max-w-[1170px] mx-auto px-6 py-8 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-start">
          <AnimateOnScroll animation="fadeInRight" delay={0} duration={0.7}>
            <div className="flex items-start gap-4 md:gap-6 justify-start flex-col">
              <h2 className="font-sans text-[24px] md:text-[32px] font-semibold text-black">
                Anvie Home giúp bạn <br className="hidden md:block" /> nuôi dưỡng bình an
              </h2>
              <div className="space-y-2 text-base text-[#515151] leading-normal">
                <p>
                Anvie ra đời với mong muốn mang đến cho khách hàng những giải pháp thiết kế nội thất và thi công nội thất trọn gói, kết hợp giữa thẩm mỹ tinh tế, công năng tiện nghi và sự bền vững lâu dài.              </p>
                <p>
                Chúng tôi tin rằng mỗi ngôi nhà không chỉ là nơi ở, mà còn là không gian sống - nơi bạn được nghỉ ngơi, cân bằng và tìm lại năng lượng sau những bộn bề công việc. Chính vì vậy, mọi dự án của Anvie đều được thực hiện với tinh thần: thiết kế vì con người, thi công vì sự an yên trong từng không gian.              </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInLeft" delay={0.2} duration={0.7}>
            <div className="relative h-[250px] md:h-[380px] overflow-hidden">
              <Image
                src="/anvi/about.png"
                alt="Anvie Home"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Thông điệp thương hiệu */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[854px] text-white flex flex-col items-center justify-center px-6 py-8 md:py-16" style={{ zIndex: 1 }}>
      <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/anvi/brand.png')` }}
        />
        <div className="relative z-10 max-w-[1170px] w-full h-full">
          <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.6}>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-[24px] md:text-[32px] font-semibold mb-2">
                Thông điệp thương hiệu
              </h2>
              <p className="text-base mdtext-[24px] text-white leading-normal font-normal">Tại Anvie, chúng tôi tin vào 3 điều:</p>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brandMessages.map((message, index) => (
              <AnimateOnScroll key={index} animation="fadeInUp" delay={index * 0.15} duration={0.7}>
                <div className="text-left space-y-4 min-h-[210px] md:min-h-[370px] flex flex-col items-center justify-between bg-black/24 backdrop-blur-[6px] p-4">
                  <h3 className="text-[20px] mdtext-[36px] w-full text-left font-semibold text-[#E6BC8B]">
                    {message.title} <br />
                    {message.title_2} <br />
                    {message.title_3} 
                  </h3>
                  <p className="text-base text-white leading-relaxed">
                    {message.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll animation="fadeInUp" delay={0.5} duration={0.6}>
            <p className="text-center mt-8 md:mt-12 text-base md:text-[24px] text-white leading-normal font-normal px-4">
              Ngôi nhà không chỉ đẹp trên bản vẽ, <br className="hidden md:block" /> Anvie biến nó thành tổ ấm trọn vẹn để bạn thật sự tận hưởng từng khoảnh khắc
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sứ mệnh & Tầm nhìn */}
      <section className="max-w-[1170px] mx-auto  py-8 md:py-12 w-full px-4 md:px-0">
        <AnimateOnScroll animation="fadeInUp" delay={0} duration={0.6}>
          <div className="space-y-3">
            <h3 className="text-center md:text-left text-[24px] md:text-[32px] font-semibold text-black">
            Sứ mệnh & Tầm nhìn
            </h3>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 my-6">
          {scenarioCards.map((card, index) => (
            <AnimateOnScroll key={card.title_1} animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} delay={index * 0.15} duration={0.7}>
              <div className="overflow-hidden">
                <div
                  className="min-h-[300px] md:min-h-[400px] bg-cover bg-center flex flex-col justify-between"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div></div>
                  <div className="flex flex-col gap-3 px-4 md:px-6 py-4 md:py-6 md:flex-row md:items-center md:justify-between min-h-[106px] bg-black/30 backdrop-blur">
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-[24px] font-semibold text-white">
                        {card.title_1}  
                      </h4>
                      <p className="text-sm md:text-base text-white leading-normal">
                      {card.desc}  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Trong 5 năm tới */}
      <section className="bg-[#F4F4F4] px-6 py-12 md:py-20">
        <div className="max-w-[1170px] mx-auto">
          <AnimateOnScroll animation="fadeInDown" delay={0} duration={0.6}>
            <h2 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-black text-center mb-6 px-4">
              Trong 5 năm tới, Anvie mong muốn
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {futureGoals.map((goal, index) => (
              <AnimateOnScroll key={index} animation="scaleIn" delay={index * 0.1} duration={0.6} >
                <div className="bg-white rounded-[24px] min-h-[220px] p-4 md:p-6 border border-[#B38147] shadow-sm">
                  <div className="mb-4">
                    <Image
                      src={goal.icon}
                      alt={`Goal ${index + 1}`}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base text-black leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
