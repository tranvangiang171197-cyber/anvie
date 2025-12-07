import type { Metadata } from "next";
import { ContactPageClient } from "./contact-page-client";

export const metadata: Metadata = {
  title: "Liên hệ | Anvie Home",
  description:
    "Liên hệ với Anvie Home để được tư vấn về thiết kế và thi công nội thất trọn gói.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
