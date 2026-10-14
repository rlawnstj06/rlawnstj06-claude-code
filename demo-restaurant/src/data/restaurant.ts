// Single source of truth for everything the site and the AI assistant say.
// The chatbot answers ONLY from this file, so keep it accurate: under the
// Moffatt v. Air Canada decision a business is liable for what its chatbot says.
//
// This is a FICTIONAL demo restaurant. Replace every value for a real client.

export type Lang = "ko" | "en";

type Localized = Record<Lang, string>;

export interface MenuItem {
  id: string;
  name: Localized;
  description: Localized;
  priceCad: number;
  allergens: string[];
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface MenuSection {
  id: string;
  title: Localized;
  items: MenuItem[];
}

export const restaurant = {
  name: { ko: "소담 식당", en: "Sodam Kitchen" } as Localized,
  tagline: {
    ko: "밴쿠버에서 만나는 집밥 같은 한식",
    en: "Home-style Korean cooking in Vancouver",
  } as Localized,
  isDemo: true,
  address: {
    street: "123 Example Street",
    city: "Vancouver",
    province: "BC",
    postalCode: "V0V 0V0",
    country: "CA",
  },
  phone: "+1-604-555-0123",
  email: "hello@example.com",
  // 0 = Sunday ... 6 = Saturday. null means closed.
  hours: [
    { day: 0, open: "11:30", close: "20:00" },
    { day: 1, open: null, close: null },
    { day: 2, open: "11:30", close: "21:00" },
    { day: 3, open: "11:30", close: "21:00" },
    { day: 4, open: "11:30", close: "21:00" },
    { day: 5, open: "11:30", close: "22:00" },
    { day: 6, open: "11:30", close: "22:00" },
  ] as { day: number; open: string | null; close: string | null }[],
  policies: {
    reservations: {
      ko: "4인 이상은 예약을 권장합니다. 온라인 예약 요청은 매장에서 전화나 문자로 확정해야 완료됩니다. 최대 10인까지 온라인 요청 가능하며, 그 이상은 전화로 문의해 주세요.",
      en: "Reservations are recommended for parties of 4 or more. Online requests are confirmed by phone or text from the restaurant. Online requests accept up to 10 guests; call for larger groups.",
    } as Localized,
    takeout: {
      ko: "전화로 포장 주문이 가능합니다. 배달은 하지 않습니다.",
      en: "Takeout orders are available by phone. We do not offer delivery.",
    } as Localized,
    allergies: {
      ko: "알레르기 정보는 참고용입니다. 주방에서 여러 재료를 함께 다루므로 교차 오염이 있을 수 있습니다. 알레르기가 있으시면 주문 전 반드시 직원에게 말씀해 주세요.",
      en: "Allergen information is for reference only. Our kitchen handles many ingredients and cross-contact is possible. Please tell our staff about any allergy before ordering.",
    } as Localized,
    parking: {
      ko: "건물 뒤편 공용 주차장(유료)을 이용하실 수 있습니다.",
      en: "Paid public parking is available behind the building.",
    } as Localized,
    payment: {
      ko: "현금, 데빗, 신용카드(Visa, Mastercard)를 받습니다.",
      en: "We accept cash, debit, Visa, and Mastercard.",
    } as Localized,
  },
  menu: [
    {
      id: "mains",
      title: { ko: "식사", en: "Mains" },
      items: [
        {
          id: "bibimbap",
          name: { ko: "돌솥비빔밥", en: "Stone Pot Bibimbap" },
          description: {
            ko: "뜨거운 돌솥에 제철 나물, 소고기, 계란을 올린 비빔밥",
            en: "Seasonal vegetables, beef, and egg over rice in a sizzling stone pot",
          },
          priceCad: 18.95,
          allergens: ["egg", "soy", "sesame", "wheat"],
        },
        {
          id: "kimchi-jjigae",
          name: { ko: "김치찌개", en: "Kimchi Jjigae" },
          description: {
            ko: "묵은지와 돼지고기, 두부를 넣고 끓인 찌개 (공기밥 포함)",
            en: "Aged kimchi stew with pork and tofu, served with rice",
          },
          priceCad: 17.5,
          allergens: ["soy", "fish", "shellfish"],
          spicy: true,
        },
        {
          id: "bulgogi",
          name: { ko: "소불고기 정식", en: "Beef Bulgogi Set" },
          description: {
            ko: "간장 양념 소불고기와 반찬 3종, 공기밥",
            en: "Soy-marinated beef bulgogi with three side dishes and rice",
          },
          priceCad: 22.95,
          allergens: ["soy", "sesame", "wheat"],
        },
        {
          id: "japchae",
          name: { ko: "야채 잡채", en: "Vegetable Japchae" },
          description: {
            ko: "고기 없이 채소만 넣은 당면 잡채",
            en: "Glass noodles stir-fried with vegetables, no meat",
          },
          priceCad: 16.5,
          allergens: ["soy", "sesame"],
          vegetarian: true,
        },
      ],
    },
    {
      id: "sides",
      title: { ko: "곁들임", en: "Sides" },
      items: [
        {
          id: "pajeon",
          name: { ko: "해물파전", en: "Seafood Pancake" },
          description: {
            ko: "오징어와 새우를 넣은 바삭한 파전",
            en: "Crispy scallion pancake with squid and shrimp",
          },
          priceCad: 19.5,
          allergens: ["wheat", "egg", "shellfish", "soy"],
        },
        {
          id: "tteokbokki",
          name: { ko: "떡볶이", en: "Tteokbokki" },
          description: {
            ko: "매콤달콤한 고추장 소스 떡볶이",
            en: "Rice cakes in a sweet and spicy gochujang sauce",
          },
          priceCad: 14.95,
          allergens: ["wheat", "soy", "fish"],
          spicy: true,
        },
      ],
    },
  ] as MenuSection[],
};

export const allergenLabels: Record<string, Localized> = {
  egg: { ko: "계란", en: "Egg" },
  soy: { ko: "대두", en: "Soy" },
  sesame: { ko: "참깨", en: "Sesame" },
  wheat: { ko: "밀", en: "Wheat" },
  fish: { ko: "생선", en: "Fish" },
  shellfish: { ko: "갑각류·조개류", en: "Shellfish" },
};

export const dayNames: Record<Lang, string[]> = {
  ko: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
};

export function formatPrice(priceCad: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === "ko" ? "ko-CA" : "en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(priceCad);
}
