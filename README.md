# AI 웹사이트 사업 작업 공간

밴쿠버 소상공인 대상 "웹사이트 + AI 자동화" 사업을 위한 리서치와 데모를 모아둔 저장소입니다.

| 경로 | 내용 |
|---|---|
| [`docs/01-research.md`](docs/01-research.md) | 고객이 돈을 내는 기능, BC주 법·보안 가이드라인, 필요한 도구 정리 |
| [`docs/02-launch-checklist.md`](docs/02-launch-checklist.md) | 실제 고객 사이트를 공개하기 전 확인 목록 |
| [`demo-restaurant/`](demo-restaurant/) | 데모 1번: 가상의 한식당 "소담 식당" 웹사이트 (한/영, AI 안내원, 예약 요청) |

## 데모 실행

```bash
cd demo-restaurant
npm install
cp .env.example .env.local   # ANTHROPIC_API_KEY 입력
npm run dev                  # http://localhost:3000 → /ko
```

API 키가 없어도 사이트는 동작합니다. 이 경우 AI 안내원은 "전화로 문의해 주세요"라고 답합니다.

## 데모에 들어간 것

- **한/영 페이지**: `/ko`, `/en`, 개인정보처리방침 `/ko/privacy`, `/en/privacy`
- **AI 안내원** (`src/app/api/chat/route.ts`): `src/data/restaurant.ts`의 정보로만 답하고, 할인·예약 확정 같은 약속은 하지 않으며, 모르면 전화로 안내합니다. 요청 횟수 제한과 입력 검증이 들어 있습니다.
- **예약 요청 폼** (`src/app/api/reservation/route.ts`): 서버 검증, 허니팟, 요청 횟수 제한, CASL 기준의 마케팅 동의(기본 체크 해제)를 갖췄습니다. 데모라 실제로 저장하거나 보내지는 않습니다.
- **보안 헤더** (`next.config.ts`): CSP, HSTS, X-Frame-Options 등
- **SEO**: schema.org 식당 정보(JSON-LD), 데모라서 검색엔진 노출은 차단

## 고객용으로 바꿀 때

1. `src/data/restaurant.ts`를 실제 가게 정보로 바꾸고 `isDemo: false`로 설정
2. 예약 API에 이메일 발송 연결 (예: Resend)
3. `docs/02-launch-checklist.md`를 따라 확인 후 배포 (Vercel 등)
