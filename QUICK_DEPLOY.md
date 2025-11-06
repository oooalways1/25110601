# ⚡ 빠른 배포 가이드

GitHub Pages에 5분 안에 배포하기!

## 🎯 단계별 가이드

### 1️⃣ GitHub 저장소 생성

1. https://github.com 접속 및 로그인
2. 우측 상단 `+` → `New repository`
3. Repository name: `vibecoding` 입력
4. Public 선택
5. `Create repository` 클릭

### 2️⃣ Git 명령어 실행

**PowerShell을 열고** 프로젝트 폴더에서 다음 명령어를 **순서대로** 실행:

```powershell
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit"

# 메인 브랜치 설정
git branch -M main

# GitHub 연결 (YOUR_USERNAME을 본인 GitHub 아이디로 변경!)
git remote add origin https://github.com/YOUR_USERNAME/vibecoding.git

# GitHub에 업로드
git push -u origin main
```

**⚠️ 중요**: `YOUR_USERNAME`을 본인의 실제 GitHub 사용자명으로 바꾸세요!

### 3️⃣ 배포하기

Node.js가 설치되어 있다면:

```powershell
# 의존성 설치
npm install

# 배포 실행
npm run deploy
```

Node.js가 없다면 먼저 https://nodejs.org 에서 설치하세요.

### 4️⃣ GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. `Settings` 탭 클릭
3. 왼쪽 메뉴에서 `Pages` 클릭
4. Source에서 `gh-pages` 브랜치 선택
5. `Save` 클릭

### 5️⃣ 완료! 🎉

1-2분 후 다음 URL로 접속:

```
https://YOUR_USERNAME.github.io/vibecoding/
```

## 🔄 업데이트 방법

코드 수정 후:

```powershell
git add .
git commit -m "업데이트 내용"
git push
npm run deploy
```

## ❓ 문제 해결

### Git 인증 오류

GitHub 로그인 창이 나타나면 사용자명과 비밀번호 입력

### 404 오류

- 몇 분 기다려보기
- GitHub Pages 설정에서 `gh-pages` 브랜치가 선택되었는지 확인

### 빌드 오류

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run deploy
```

## 📞 도움말

자세한 내용은 `DEPLOY_GUIDE.md` 파일을 참고하세요!

---

**성공적인 배포 되세요! 🚀**

