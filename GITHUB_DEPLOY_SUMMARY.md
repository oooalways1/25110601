# 🎯 GitHub 배포 완벽 가이드 - 요약

## ✅ 준비 완료 사항

프로젝트가 GitHub Pages 배포를 위해 완벽하게 준비되었습니다!

### 추가된 파일들

- ✅ `DEPLOY_GUIDE.md` - 상세한 배포 가이드
- ✅ `QUICK_DEPLOY.md` - 5분 빠른 배포 가이드
- ✅ `deploy.sh` - Linux/Mac 배포 스크립트
- ✅ `deploy.ps1` - Windows PowerShell 배포 스크립트
- ✅ `.gitignore` - Git 무시 파일 설정
- ✅ `package.json` - deploy 스크립트 추가
- ✅ `vite.config.ts` - GitHub Pages 경로 설정

## 🚀 배포 방법 (3가지 옵션)

### 옵션 1: 자동 배포 (가장 쉬움) ⭐

```bash
# 1. GitHub 저장소 생성 후
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vibecoding.git
git push -u origin main

# 2. 자동 배포
npm install
npm run deploy
```

### 옵션 2: PowerShell 스크립트 사용

```powershell
# deploy.ps1 파일 실행
.\deploy.ps1
```

### 옵션 3: Bash 스크립트 사용 (Git Bash)

```bash
# deploy.sh 파일 실행
./deploy.sh
```

## 📋 체크리스트

배포 전 확인사항:

- [ ] Node.js 설치됨 (v18.0 이상)
- [ ] Git 설치됨
- [ ] GitHub 계정 있음
- [ ] GitHub에 새 저장소 생성함
- [ ] `YOUR_USERNAME`을 실제 GitHub 사용자명으로 변경함

## 🎯 단계별 실행 순서

### 1단계: GitHub 저장소 생성
- https://github.com → New repository
- 이름: `vibecoding`
- Public 선택
- Create repository

### 2단계: Git 초기화 및 푸시

```powershell
git init
git add .
git commit -m "Initial commit: 수학 산성비 게임"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vibecoding.git
git push -u origin main
```

### 3단계: 배포 실행

```powershell
npm install
npm run deploy
```

### 4단계: GitHub Pages 활성화
- GitHub 저장소 → Settings → Pages
- Source: `gh-pages` 브랜치 선택
- Save

### 5단계: 접속
- 1-2분 후: `https://YOUR_USERNAME.github.io/vibecoding/`

## ⚙️ 중요 설정 파일

### vite.config.ts
```typescript
base: '/vibecoding/'  // 저장소 이름과 일치해야 함!
```

저장소 이름을 다르게 만들었다면 이 값을 변경하세요.

### package.json
```json
"deploy": "npm run build && gh-pages -d dist"
```

자동 배포 스크립트가 추가되었습니다.

## 🔄 업데이트 방법

코드 수정 후:

```bash
# 1. Git 커밋
git add .
git commit -m "기능 개선"
git push

# 2. 재배포
npm run deploy
```

## 📱 배포 후 공유

배포가 완료되면 다음 URL을 공유하세요:

```
https://YOUR_USERNAME.github.io/vibecoding/
```

## 🆘 문제 해결

### 404 오류
- `vite.config.ts`의 `base` 경로 확인
- GitHub Pages에서 `gh-pages` 브랜치 선택 확인
- 몇 분 기다린 후 재시도

### 빌드 오류
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run deploy
```

### Git 인증 오류
- GitHub Personal Access Token 생성 필요
- Settings → Developer settings → Personal access tokens

## 📚 추가 문서

- **빠른 시작**: `QUICK_DEPLOY.md`
- **상세 가이드**: `DEPLOY_GUIDE.md`
- **프로젝트 설명**: `README.md`
- **설치 가이드**: `SETUP_GUIDE.md`

## 🎉 완료!

모든 준비가 끝났습니다. 이제 위의 단계를 따라 배포하시면 됩니다!

---

**질문이나 문제가 있으면 각 가이드 문서를 참고하세요!** 🚀✨

