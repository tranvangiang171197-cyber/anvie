import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/button-link";

const contactChannels = [
  { label: "Email", value: "hello@anvie.vn" },
  { label: "Hotline", value: "+84 901 234 567" },
  { label: "Studio", value: "12 Mai Chi Tho, Thủ Đức, TP.HCM" },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-[40px] bg-stone-900 text-white shadow-[0_40px_120px_rgba(17,12,10,0.45)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-stone-950/70" />
        <div className="relative z-10 space-y-4 px-10 py-16 text-center md:px-20">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-200">
            Liên hệ
          </p>
          <h1 className="font-sans text-5xl">Quy trình trọn gói thiết kế & thi công nội thất</h1>
          <p className="text-base text-stone-100">
            Bạn chỉ việc chờ chìa khóa. Anvie sẽ liên hệ lại trong vòng 30 phút đến 1 giờ để gửi gói thông tin.
          </p>
          <div className="flex justify-center">
            <ButtonLink href="/thi-cong-noi-that" label="Xem quy trình" />
          </div>
        </div>
      </section>

      <section className="grid gap-10 rounded-[40px] bg-stone-950 px-6 py-10 text-white md:grid-cols-[1.1fr_0.9fr] md:px-12">
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-8">
            <p className="font-sans text-3xl">Liên hệ tư vấn khách hàng</p>
            <p className="text-sm text-stone-200">
              Anvie Home sẽ liên hệ lại trong vòng 30 phút đến 1 giờ kể từ khi gửi thông tin.
            </p>
          </div>
        </div>
        <div className="rounded-[32px] bg-[#f3e2cd] p-8 text-stone-900">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Họ và tên của bạn</label>
              <input
                type="text"
                className="mt-2 w-full rounded-2xl border border-stone-300/60 bg-white px-4 py-3 text-sm focus:border-terracotta-500 focus:outline-none"
                placeholder="Nguyễn An"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Số điện thoại</label>
              <input
                type="tel"
                className="mt-2 w-full rounded-2xl border border-stone-300/60 bg-white px-4 py-3 text-sm focus:border-terracotta-500 focus:outline-none"
                placeholder="+84"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-stone-300/60 bg-white px-4 py-3 text-sm focus:border-terracotta-500 focus:outline-none"
                placeholder="ban@congty.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lời nhắn</label>
              <textarea
                className="mt-2 w-full rounded-2xl border border-stone-300/60 bg-white px-4 py-3 text-sm focus:border-terracotta-500 focus:outline-none"
                rows={4}
                placeholder="Chia sẻ nhu cầu, phong cách mong muốn..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#b37743] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(179,119,67,0.4)]"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="rounded-[32px] border border-stone-200/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div
            className="h-72 rounded-t-[32px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80)",
            }}
          />
          <div className="space-y-6 px-8 py-8">
            <SectionHeading
              title="Thông tin chuyển khoản"
              description="Ngân hàng VietinBank • Số tài khoản 100880484281 • Người nhận: Nguyễn Thị Mai Hương"
            />
            <div>
              <p className="text-sm font-semibold text-stone-800">Thời gian làm việc</p>
              <p className="text-sm text-stone-600">
                Phục vụ 24/7 cả Thứ 7 – Chủ nhật <br />
                Hotline/Zalo: 0345 954 988
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] border border-stone-200/80 bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <SectionHeading
            title="Thông tin liên lạc"
            description="Chúng tôi nhận lịch hẹn trực tiếp tại studio hoặc online."
          />
          <ul className="space-y-4 text-sm text-stone-700">
            {contactChannels.map((channel) => (
              <li key={channel.label} className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  {channel.label}
                </span>
                <span>{channel.value}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-dashed border-stone-300/80 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
              Workshop tại gia
            </p>
            <p className="mt-2 text-sm text-stone-600">
              Chúng tôi có thể tổ chức workshop mini tại nhà bạn để cùng chọn vật
              liệu và layout – phù hợp với gia chủ bận rộn.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

