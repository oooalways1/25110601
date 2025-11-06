# 🚀 설치 및 실행 가이드

## 빠른 시작

### 1단계: 의존성 설치

터미널에서 다음 명령어를 실행하세요:

```bash
npm install
```

### 2단계: 개발 서버 실행

```bash
npm run dev
```

브라우저가 자동으로 열리지 않으면 `http://localhost:5173`으로 접속하세요.

## 상세 가이드

### 시스템 요구사항

- **Node.js**: 18.0 이상
- **npm**: 9.0 이상 (Node.js와 함께 설치됨)
- **브라우저**: Chrome, Edge, Safari, Firefox 최신 버전

### Node.js 설치 확인

터미널에서 다음 명령어로 확인:

```bash
node --version
npm --version
```

버전이 표시되지 않으면 [Node.js 공식 사이트](https://nodejs.org/)에서 다운로드하세요.

### 프로젝트 실행 단계별 가이드

#### Windows (PowerShell)

```powershell
# 1. 프로젝트 폴더로 이동
cd C:\Users\kor\Desktop\vibecoding

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

#### macOS / Linux

```bash
# 1. 프로젝트 폴더로 이동
cd ~/Desktop/vibecoding

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 사용 가능한 명령어

| 명령어 | 설명 |
|--------|------|
| `npm install` | 프로젝트 의존성 설치 |
| `npm run dev` | 개발 서버 실행 (핫 리로드) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run preview` | 빌드된 앱 미리보기 |
| `npm run lint` | 코드 린트 검사 |

## 문제 해결

### 포트가 이미 사용 중인 경우

다른 포트로 실행:

```bash
npm run dev -- --port 3000
```

### 의존성 설치 오류

캐시를 삭제하고 재설치:

```bash
rm -rf node_modules package-lock.json
npm install
```

Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### 브라우저에서 열리지 않는 경우

수동으로 브라우저에서 다음 주소로 접속:
```
http://localhost:5173
```

## 프로덕션 빌드

### 빌드 생성

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

### 배포

`dist` 폴더의 내용을 웹 서버에 업로드하면 됩니다.

추천 호스팅 서비스:
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com

## 개발 팁

### 핫 리로드

개발 서버 실행 중에는 코드를 수정하면 자동으로 브라우저가 새로고침됩니다.

### 개발자 도구

브라우저에서 `F12` 키를 눌러 개발자 도구를 열면 콘솔 로그와 에러를 확인할 수 있습니다.

### TypeScript 에러 확인

VSCode나 다른 IDE에서 TypeScript 에러가 실시간으로 표시됩니다.

## 추가 도움말

문제가 계속되면 다음을 확인하세요:

1. Node.js 버전이 18.0 이상인지 확인
2. 프로젝트 폴더에서 명령어를 실행하는지 확인
3. 방화벽이나 안티바이러스가 차단하지 않는지 확인
4. 인터넷 연결 확인 (의존성 다운로드 필요)

---

**즐거운 개발 되세요! 💻✨**


