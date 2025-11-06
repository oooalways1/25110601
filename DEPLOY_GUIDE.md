# 🚀 GitHub Pages 배포 가이드

이 가이드는 수학 산성비 게임을 GitHub Pages에 배포하는 방법을 안내합니다.

## 📋 사전 준비

### 1. Git 설치 확인

터미널에서 다음 명령어로 확인:

```bash
git --version
```

Git이 설치되어 있지 않다면 https://git-scm.com/download/win 에서 다운로드하세요.

### 2. GitHub 계정

- GitHub 계정이 없다면 https://github.com 에서 가입하세요.

## 🎯 배포 단계

### 1단계: GitHub 저장소 생성

1. **GitHub 웹사이트 접속**
   - https://github.com 로그인

2. **새 저장소 생성**
   - 우측 상단 `+` 버튼 클릭 → `New repository` 선택
   - Repository name: `vibecoding` (또는 원하는 이름)
   - Description: "초등학교 3학년을 위한 수학 산성비 게임"
   - Public 선택 (GitHub Pages는 Public 저장소에서 무료)
   - **"Add a README file" 체크 해제** (이미 파일이 있으므로)
   - `Create repository` 클릭

### 2단계: 로컬 Git 초기화 및 연결

프로젝트 폴더에서 터미널을 열고 다음 명령어를 순서대로 실행:

```bash
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 수학 산성비 게임"

# 메인 브랜치 이름 설정
git branch -M main

# GitHub 저장소 연결 (YOUR_USERNAME을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/vibecoding.git

# GitHub에 푸시
git push -u origin main
```

**중요**: `YOUR_USERNAME`을 본인의 실제 GitHub 사용자명으로 바꿔주세요!

예시:
```bash
git remote add origin https://github.com/john/vibecoding.git
```

### 3단계: GitHub Pages 배포

#### 방법 1: 자동 배포 스크립트 사용 (권장)

```bash
# gh-pages 패키지 설치 및 배포
npm install
npm run deploy
```

이 명령어는:
1. 프로젝트를 빌드하고
2. `gh-pages` 브랜치를 생성하여
3. 자동으로 GitHub Pages에 배포합니다

#### 방법 2: 수동 배포

```bash
# 1. 빌드
npm run build

# 2. dist 폴더로 이동
cd dist

# 3. Git 초기화
git init
git add -A
git commit -m "Deploy"

# 4. gh-pages 브랜치로 푸시
git push -f https://github.com/YOUR_USERNAME/vibecoding.git main:gh-pages

# 5. 원래 폴더로 돌아가기
cd ..
```

### 4단계: GitHub Pages 활성화

1. **GitHub 저장소 페이지 접속**
   - https://github.com/YOUR_USERNAME/vibecoding

2. **Settings 탭 클릭**

3. **Pages 메뉴 선택** (왼쪽 사이드바)

4. **Source 설정**
   - Branch: `gh-pages` 선택
   - Folder: `/ (root)` 선택
   - `Save` 클릭

5. **배포 완료 대기**
   - 1-2분 정도 소요됩니다
   - 페이지 상단에 배포 URL이 표시됩니다
   - 예: `https://YOUR_USERNAME.github.io/vibecoding/`

## 🌐 배포된 사이트 접속

배포가 완료되면 다음 URL로 접속할 수 있습니다:

```
https://YOUR_USERNAME.github.io/vibecoding/
```

## 🔄 업데이트 방법

코드를 수정한 후 다시 배포하려면:

```bash
# 1. 변경사항 커밋
git add .
git commit -m "게임 기능 개선"
git push

# 2. 재배포
npm run deploy
```

## 📝 저장소 이름을 변경한 경우

만약 저장소 이름을 `vibecoding`이 아닌 다른 이름으로 만들었다면:

1. **vite.config.ts 파일 수정**

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPOSITORY_NAME/',  // 저장소 이름으로 변경
})
```

2. **다시 배포**

```bash
npm run deploy
```

## ⚠️ 문제 해결

### 404 오류가 발생하는 경우

1. `vite.config.ts`의 `base` 경로가 저장소 이름과 일치하는지 확인
2. GitHub Pages 설정에서 `gh-pages` 브랜치가 선택되어 있는지 확인
3. 몇 분 기다린 후 다시 시도

### 빌드 오류가 발생하는 경우

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm run deploy
```

### Git 인증 오류

GitHub에서 Personal Access Token이 필요할 수 있습니다:

1. GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. `repo` 권한 선택
4. 생성된 토큰을 비밀번호 대신 사용

## 🎉 완료!

배포가 성공하면:
- ✅ 전 세계 어디서나 게임 접속 가능
- ✅ HTTPS로 안전하게 제공
- ✅ 무료 호스팅
- ✅ 자동 CDN 적용

## 📱 공유하기

배포된 게임 URL을 친구들과 공유하세요!

```
https://YOUR_USERNAME.github.io/vibecoding/
```

---

**즐거운 배포 되세요! 🚀✨**

