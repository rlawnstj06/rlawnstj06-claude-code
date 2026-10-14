# 내 컴퓨터 개발 환경 설치 가이드

명령어를 순서대로 복사해서 붙여 넣으면 됩니다. 운영체제에 맞는 쪽만 따라 하세요.

## 설치할 것

| 프로그램 | 용도 | 필수 |
|---|---|---|
| Git | 코드 버전 관리, GitHub 업로드·다운로드 | ✅ |
| Node.js (LTS) | 웹사이트 실행·빌드 | ✅ |
| Claude Code | AI 코딩 도구 (터미널) | ✅ |
| Claude 데스크톱 앱 | Claude Code를 앱 화면으로 사용, 휴대폰과 이어서 작업 | 추천 |
| VS Code | 코드 보고 고치는 편집기 | 추천 |
| Vercel CLI | 웹사이트 배포 | 나중에 |

---

## Mac

**1. 터미널 열기:** `Cmd + Space` → "터미널" 입력 → 엔터

**2. Homebrew 설치** (맥용 프로그램 설치 도구. 비밀번호를 물으면 맥 로그인 비밀번호 입력. 입력해도 화면에 안 보이는 게 정상입니다)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
설치가 끝나면 화면 마지막에 나오는 `Next steps`의 명령어 2줄을 그대로 복사해서 실행하세요.

**3. Git, Node.js, VS Code 설치**
```bash
brew install git node
brew install --cask visual-studio-code
```

**4. Claude Code 설치**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**5. Claude 데스크톱 앱:** https://claude.ai/download 에서 받아 설치

---

## Windows

**1. PowerShell 열기:** 시작 버튼 우클릭 → "터미널" 또는 "Windows PowerShell"

**2. Git, Node.js, VS Code 설치**
```powershell
winget install --id Git.Git -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id Microsoft.VisualStudioCode -e
```
설치가 끝나면 **터미널을 닫고 다시 여세요** (새로 설치한 프로그램을 인식하게).

**3. Claude Code 설치**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**4. Claude 데스크톱 앱:** https://claude.ai/download 에서 받아 설치

---

## 설치 확인 (Mac·Windows 공통)

```bash
git --version
node --version     # v20 이상이면 OK
claude --version
```
셋 다 버전 숫자가 나오면 성공입니다.

## 처음 한 번만: Git에 내 이름 등록

```bash
git config --global user.name "rlawnstj06"
git config --global user.email "내 깃허브 이메일"
```

## 데모 사이트 내 컴퓨터에서 실행

```bash
git clone https://github.com/rlawnstj06/rlawnstj06-claude-code.git
cd rlawnstj06-claude-code
git checkout claude/setup-token-q2d9yy
cd demo-restaurant
npm install
npm run dev
```
브라우저에서 http://localhost:3000 을 열면 소담 식당 데모가 보입니다. 끌 때는 터미널에서 `Ctrl + C`.

**AI 안내원까지 테스트하려면:** `demo-restaurant` 폴더에 `.env.local` 파일을 만들고 아래처럼 넣은 뒤 `npm run dev`를 다시 실행하세요. API 키는 https://console.anthropic.com 에서 발급하며, **월 사용량 상한도 꼭 설정**하세요. 이 파일은 절대 GitHub에 올리지 마세요(자동으로 제외되게 설정되어 있음).
```
ANTHROPIC_API_KEY=발급받은_키
CLAUDE_MODEL=claude-haiku-5-5
```

## Claude Code 시작하기

```bash
cd rlawnstj06-claude-code
claude
```
처음 실행하면 브라우저가 열리며 Claude 계정으로 로그인합니다. 그다음부터는 한국어로 "메뉴에 냉면 추가해줘"처럼 말하면 됩니다.

**휴대폰에서 내 컴퓨터의 Claude Code 이어서 쓰기:** 작업 폴더에서 `claude remote-control`을 실행하면 휴대폰 Claude 앱에 그 세션이 나타납니다. 이때 컴퓨터는 켜져 있어야 합니다.

## 나중에: 배포 도구

```bash
npm install -g vercel
vercel login
```
배포는 함께 진행할 때 다시 안내합니다.
