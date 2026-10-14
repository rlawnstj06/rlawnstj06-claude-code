# 소상공인 웹사이트 사업 리서치 (밴쿠버 기준, 2026-10)

> 출처 대부분이 업체 블로그·홍보 자료라 숫자는 "대략적인 시장 감각"으로만 보세요. 법률 내용은 일반 정보이며 법률 자문이 아닙니다.

## 1. 사람들이 실제로 돈을 내는 웹사이트

**결론: 사장님은 "예쁜 웹사이트"가 아니라 "손님·매출·시간 절약"에 돈을 냅니다.**

| 사장님이 돈 내는 기능 | 근거 |
|---|---|
| 모바일에서 바로 보이는 메뉴·영업시간·위치 | 손님 65%가 예약할 때 식당 웹사이트로 바로 들어감 (Toast) |
| 예약·문의 받기 | 위와 같음. 최신 정보를 유지하는 모바일 예약 기능이 중요 |
| 포장·온라인 주문, 케이터링 (새로운 매출원) | 연매출 100만 불 미만 소규모 식당의 28%가 새 매출원 추가를 최우선 과제로 꼽음 (Toast, 2026년 4월) |
| 구글 검색·지도 노출 | 배달 앱 노출을 최적화한 식당은 39%뿐 (DoorDash·SevenRooms) → 온라인 노출 관리 여지가 큼 |
| 한/영 문의 자동 응대 | 한인 업소의 실제 고충. 정량 데이터는 없으니 직접 영업하며 검증 필요 |

**캐나다 가격대 (CAD, 참고용)**
- 소상공인 웹사이트 제작: 3,000~8,000 (중견 에이전시), 템플릿형 5,000~12,000
- 월 유지관리: 100~1,000/월, 구독형 연 2,400~8,400
- AI 자동화: 워크플로 1개 500~3,000, 첫 AI 에이전트 5,000~15,000 + 월 300~800
- 밴쿠버 저가 업체는 월 500 미만 유지비부터 시작

**우리 포지션:** 초기 구축비 800~2,000 + 월 250~500. 시중 에이전시보다 싸지만 AI 자동화와 한/영 지원이 포함된 상품입니다.

## 2. 법적·보안 가이드라인 (BC주 기준)

### 2-1. 개인정보 (BC PIPA / PIPEDA)
- BC주 안에서만 영업하는 업체는 **BC PIPA**, 주 경계를 넘는 활동은 **PIPEDA**를 따르며 둘 다 해당되는 경우가 많습니다.
- **개인정보처리방침을 웹사이트에 공개**해야 합니다. 홈페이지에서 바로 갈 수 있는 위치에 두고, 실제 정보 처리 방식과 내용이 일치해야 합니다.
- 필요한 정보만 받고, 보관 기간을 정하고, 개인정보 담당자 연락처를 적습니다.
- **챗봇**: AI라는 사실을 알리고, 대화가 해외(미국) AI 업체로 간다는 점을 방침에 넣습니다. 고객 대화를 학습에 쓰는 업체인지도 확인합니다(OPC의 OpenAI 조사 결과 참고).

### 2-2. AI 챗봇의 법적 책임: Moffatt v. Air Canada (BC 민사분쟁심판소, 2024)
- 챗봇이 틀린 환불 정책을 안내했는데, **회사가 책임을 져야 한다**는 판결이 나왔습니다. 손해배상액은 약 CAD 650입니다.
- "챗봇은 별개의 존재"라는 회사 주장은 받아들여지지 않았고, 다른 페이지에 올바른 정보가 있었다는 것도 면책 사유가 되지 않았습니다.
- 소액심판 결정이라 법원 판례로서 구속력은 없지만, 같은 BC주의 결정이라 우리에게 그대로 해당됩니다.
- **대응 방법:** ① 챗봇은 검증된 데이터 파일 하나로만 답하게 한다 ② 할인·환불·예약 확정 같은 약속은 금지한다 ③ 모르면 전화로 안내한다 ④ 알레르기는 항상 직원 확인을 안내한다 ⑤ 정책이 바뀌면 데이터를 바로 업데이트한다

### 2-3. 스팸 방지법 (CASL)
- 마케팅 수신 동의 체크박스는 **처음에 체크되지 않은 상태**여야 합니다. 미리 체크해 두면 무효입니다.
- 동의를 받을 때 목적, 보내는 사람과 연락처, 언제든 철회할 수 있다는 점을 밝혀야 합니다.
- **동의 기록(언제, 어떻게, 어떤 조건으로 받았는지)을 보관**해야 합니다. 동의를 증명할 책임은 보내는 쪽에 있습니다.
- 모든 마케팅 메일에 수신 거부 방법과 연락처가 있어야 합니다. 위반 시 과태료가 큽니다(단체 최대 1천만 불).

### 2-4. 접근성
- BC주는 아직 **민간 웹사이트 접근성 의무 규정이 없습니다**(2025년 기준 자료). 온타리오(AODA)는 직원 50명 이상 민간 기업에 WCAG 2.0 AA를 요구합니다.
- 규정이 곧 생길 예정이라 **WCAG 2.1 AA를 기본으로 지키는 게** 안전하고, 영업할 때 장점이 됩니다.

### 2-5. 저작권·상표
- 사진, 폰트, 아이콘은 **라이선스를 확인한** 것만 씁니다. 가게 사장님이 직접 찍은 사진을 쓰는 게 제일 안전합니다.
- `/clone-website`는 **고객이 소유한 사이트를 리뉴얼할 때만** 씁니다. 남의 브랜드, 디자인, 문구를 복제하지 않습니다.
- 고객과 계약할 때 도메인, 콘텐츠, 코드의 소유권을 명시합니다(도메인은 고객 명의로).

### 2-6. 보안 기본 체크리스트
- HTTPS와 HSTS를 적용합니다.
- 보안 헤더: CSP, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy, Permissions-Policy
- 폼: 서버에서 입력값 검증, 허니팟(봇이 걸리는 숨은 입력란), 요청 횟수 제한, 필요하면 Cloudflare Turnstile(토큰을 반드시 서버에서 검증)
- API 키는 서버 환경변수에만 둡니다. `NEXT_PUBLIC_`을 붙이면 브라우저에 노출되고, 키를 커밋하면 안 됩니다.
- 챗봇에는 요청 횟수 제한, 입력 길이 제한, 프롬프트 인젝션 방어 문구를 넣고, API 사용량 상한을 설정합니다(Anthropic 콘솔).
- 서버 로그에 개인정보를 남기지 않습니다.
- WordPress 취약점의 90% 이상은 플러그인에서 나옵니다. 그래서 정적 사이트(Next.js)가 유지보수 면에서 유리합니다.

## 3. 웹사이트 제작에 필요한 도구·스킬·연결

| 분류 | 도구 | 용도 |
|---|---|---|
| 개발 | **Claude Code** (구독) | 코드 작성, 수정, 리뷰. 휴대폰 앱이나 클라우드에서 작업 |
| 프레임워크 | **Next.js + Tailwind CSS** | 빠른 정적 사이트, SEO, API(챗봇·폼) 한 곳에서 |
| AI | **Claude API** (`@anthropic-ai/sdk`) | 고객 사이트 챗봇. 종량제라 비용을 고객 유지비에 포함 |
| 배포 | **Vercel** 또는 Cloudflare | 무료~저가 호스팅, HTTPS 자동 적용 |
| Claude Code 플러그인 | **Frontend Design** 스킬 (공식) | 디자인 품질 향상 |
| | **Playwright** 플러그인/MCP | 화면 캡처와 동작 검증 (이 데모에서 사용) |
| | **Vercel** 플러그인 + React/Next.js 모범사례 스킬 | 배포와 코드 품질 |
| | Context7 MCP | 최신 라이브러리 문서 참조 |
| | `/clone-website` 스킬 | **고객 소유** 기존 사이트 리뉴얼 (Next.js로 다시 만들기) |
| 폼·메일 | Resend 등 이메일 API | 예약 요청을 사장님 메일로 전달 |
| 스팸 방지 | Cloudflare Turnstile | 봇 차단 |
| 공유 저장소 | Upstash Redis | 여러 서버에서도 동작하는 요청 횟수 제한 |
| 마케팅 | Google Business Profile | 지도·검색 노출. 웹사이트와 정보를 일치시킴 |

> 플러그인 설치 명령은 블로그마다 다릅니다. 설치 전에 Claude Code 공식 플러그인 문서에서 확인하세요. 커뮤니티 스킬은 **코드를 읽어 보고** 설치하세요(OpenClaw 악성 스킬 사례 참고).

## 출처
- Toast – [Restaurant waitlist data](https://pos.toasttab.com/blog/on-the-line/restaurant-waitlist-data)
- KRDO – [Survey: How US restaurants are handling inflation, labor, AI, and revenue growth](https://krdo.com/news/2026/09/25/survey-how-us-restaurants-are-handling-inflation-labor-ai-and-revenue-growth/)
- DoorDash – [Restaurant industry trends report 2026](https://about.doordash.com/en-us/news/doordash-restaurant-industry-trends-report-2026)
- Restolabs – [Online ordering statistics](https://www.restolabs.com/blog/online-ordering-statistics-every-restaurateur-should-know)
- Impeka – [Web Design Pricing in Canada (2026)](https://impeka.com/web-design-pricing-canada/)
- Marvel Marketing – [Website Design Cost Guide](https://marvelmarketing.ca/?p=78537)
- Levitate – [Average Website Design Cost 2026](https://www.levitate.ai/blog-posts/average-website-design-cost-for-small-businesses-in-2026)
- Redefine Web – [Website Design Pricing Packages](https://redefineweb.com/blog/website-design-pricing-packages-for-small-businesses-what-should-be-included/)
- DeployLabs – [AI Automation Pricing for Canadian SMBs](https://deploylabs.ca/blog/how-much-does-ai-automation-cost/)
- EV Advisory – [AI agent implementation cost](https://www.evadvisory.ca/answers/ai-agent-implementation-cost/)
- Northstar IT – [BC PIPA vs PIPEDA](https://northstarit.ca/learn/bc-pipa-vs-pipeda/)
- ClearBreach – [Do I Need a Written Privacy Policy?](https://clearbreach.ca/guides/do-i-need-a-privacy-policy-canada/)
- Harper Grey – [Privacy and Data Protection for B.C. Companies](https://www.harpergrey.com/articles-publications/privacy-and-data-protection-what-b-c-companies-need-to-know/)
- Dazil – [AI Chatbots for Small Business](https://dazil.com/2026/04/05/ai-chatbots-for-small-business-a-practical-introduction/)
- OPC – [PIPEDA Findings #2026-002 (OpenAI)](https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-002/)
- Mondaq – [BC Tribunal confirms companies liable for AI chatbot information](https://www.mondaq.com/canada/new-technology/1432798/bc-tribunal-confirms-companies-remain-liable-for-ai-chatbot-created-information)
- Engineering News – [AI chatbots and corporate liability](https://www.engineeringnews.co.za/article/ai-chatbots-and-corporate-liability-a-south-african-perspective-2026-09-16)
- Substance Law – [CASL Compliance Guide](https://substancelaw.ca/casl-compliance/)
- Email List Validation – [CASL signup form requirements](https://emaillistvalidation.com/blog/casl-compliant-signup-form-requirements-wording/)
- Blakes – [2025 outlook on Canadian web accessibility](https://www.blakes.com/insights/2025-outlook-on-canadian-web-accessibility-regulations/)
- WebAIM – [Canada accessibility laws](https://webaim.org/articles/laws/canada/)
- n6cloud – [How to Secure a Website in 2026](https://n6cloud.com/blog/how-to-secure-a-website/)
- eSEOspace – [Website & Email Security Guide 2026](https://eseospace.com/blog/the-complete-website-email-security-guide-for-small-businesses-2026/)
- Hostragons – [Cloudflare Turnstile](https://www.hostragons.com/en/blog/protect-your-website-from-spam-comments-and-registrations-using-cloudflare-turns/)
- Composio – [Best Claude Code Plugins 2026](https://composio.dev/content/top-claude-code-plugins)
- Firecrawl – [Top Claude Code Plugins](https://www.firecrawl.dev/blog/best-claude-code-plugins)
- GitHub – [Claude-Code-Frontend-Design-Toolkit](https://github.com/wilwaldon/Claude-Code-Frontend-Design-Toolkit)
- GitHub – [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template)
