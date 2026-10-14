import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { restaurant } from "@/data/restaurant";
import { isLang } from "@/lib/i18n";

// TEMPLATE written to the BC PIPA / PIPEDA openness principle.
// Adapt it to each client's real practices and have it reviewed before launch.
const LAST_UPDATED = "2026-10-14";

const content = {
  ko: {
    title: "개인정보처리방침",
    updated: "최종 수정일",
    sections: [
      {
        h: "1. 수집하는 정보",
        p: "예약 요청 시 이름, 전화번호, 이메일(선택), 방문 날짜·시간·인원, 요청 사항을 받습니다. 마케팅 수신에 동의하신 경우에만 이메일을 소식 발송에 사용합니다. AI 안내원 대화 내용은 답변 생성을 위해 AI 서비스 제공업체(Anthropic, 미국 소재)로 전송되며, 저희는 대화 내용을 따로 저장하지 않습니다.",
      },
      {
        h: "2. 이용 목적",
        p: "예약 확인 연락, 문의 응답, 그리고 동의하신 경우에 한해 이벤트·할인 소식 발송에만 사용합니다. 정보를 판매하지 않습니다.",
      },
      {
        h: "3. 보관 및 삭제",
        p: "예약 정보는 방문일로부터 30일 후 삭제합니다. 마케팅 수신 동의 기록은 동의를 철회하실 때까지 보관합니다.",
      },
      {
        h: "4. 해외 이전",
        p: "웹사이트 호스팅과 AI 서비스 제공업체의 서버가 캐나다 밖(주로 미국)에 있을 수 있습니다. 이 경우 해당 국가의 법에 따라 정보가 접근될 수 있습니다.",
      },
      {
        h: "5. 보호 조치",
        p: "모든 통신은 HTTPS로 암호화되며, 정보 접근은 업무상 필요한 직원으로 제한합니다.",
      },
      {
        h: "6. 열람·정정·동의 철회",
        p: `본인 정보의 열람, 정정, 삭제를 요청하시거나 마케팅 수신 동의를 철회하시려면 개인정보 담당자에게 연락해 주세요: ${restaurant.email} / ${restaurant.phone}. 답변에 만족하지 못하시면 BC주 개인정보위원회(OIPC BC)에 문의하실 수 있습니다.`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated",
    sections: [
      {
        h: "1. What we collect",
        p: "When you request a reservation we collect your name, phone number, optional email, visit date, time, party size, and any notes. We use your email for news and offers only if you opt in. Messages you send to the AI assistant are sent to our AI provider (Anthropic, located in the United States) to generate a reply; we do not store chat conversations ourselves.",
      },
      {
        h: "2. Why we collect it",
        p: "To confirm reservations, answer questions, and, only with your consent, send news and offers. We never sell your information.",
      },
      {
        h: "3. Retention",
        p: "Reservation details are deleted 30 days after your visit. Records of marketing consent are kept until you withdraw consent.",
      },
      {
        h: "4. Storage outside Canada",
        p: "Our website host and AI provider may process information outside Canada, mainly in the United States, where it may be accessible under local law.",
      },
      {
        h: "5. Safeguards",
        p: "All traffic is encrypted with HTTPS, and only staff who need the information to do their job can access it.",
      },
      {
        h: "6. Access, correction, and withdrawing consent",
        p: `To access, correct, or delete your information, or to withdraw marketing consent, contact our privacy officer at ${restaurant.email} or ${restaurant.phone}. If you are not satisfied with our response, you may contact the Office of the Information and Privacy Commissioner for British Columbia (OIPC BC).`,
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  return isLang(lang) ? { title: `${content[lang].title} | ${restaurant.name[lang]}` } : {};
}

export default async function Privacy({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const c = content[lang];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">{c.title}</h1>
      <p className="mt-2 text-sm text-stone-600">
        {c.updated}: {LAST_UPDATED}
      </p>
      {c.sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="text-xl font-semibold">{s.h}</h2>
          <p className="mt-2 leading-relaxed text-stone-800">{s.p}</p>
        </section>
      ))}
    </article>
  );
}
