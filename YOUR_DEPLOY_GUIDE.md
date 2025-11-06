# 🚀 나의 배포 가이드 (oooalways1/25110601)

## ✅ 설정 완료!

프로젝트가 GitHub 저장소 `https://github.com/oooalways1/25110601.git`에 배포할 준비가 되었습니다!

## 📋 필요한 프로그램 설치

### 1. Git 설치
- https://git-scm.com/download/win 접속
- "64-bit Git for Windows Setup" 다운로드
- 설치 실행 (모든 기본 설정 그대로 Next)

### 2. Node.js 설치
- https://nodejs.org 접속
- LTS 버전 다운로드 (왼쪽 버튼)
- 설치 실행 (모든 기본 설정 그대로 Next)

**설치 후 PowerShell을 새로 열어야 합니다!**

---

## 🚀 배포 방법

### 방법 1: 한 번에 실행 (권장)

PowerShell을 **새로 열고** 다음 명령어를 **복사해서 붙여넣기**:

```powershell
# 프로젝트 폴더로 이동
cd C:\Users\kor\Desktop\vibecoding

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 수학 산성비 게임"

# 메인 브랜치 설정
git branch -M main

# GitHub 저장소 연결
git remote add origin https://github.com/oooalways1/25110601.git

# GitHub에 푸시
git push -u origin main
```

### 방법 2: 단계별 실행

#### 1단계: Git 초기화
```powershell
git init
```

#### 2단계: 파일 추가
```powershell
git add .
```

#### 3단계: 커밋
```powershell
git commit -m "Initial commit: 수학 산성비 게임"
```

#### 4단계: 브랜치 설정
```powershell
git branch -M main
```

#### 5단계: 원격 저장소 연결
```powershell
git remote add origin https://github.com/oooalways1/25110601.git
```

#### 6단계: 푸시
```powershell
git push -u origin main
```

---

## 🌐 GitHub Pages 배포

### 1단계: 의존성 설치 및 배포

```powershell
# Node.js 패키지 설치
npm install

# GitHub Pages에 배포
npm run deploy
```

### 2단계: GitHub Pages 활성화

1. 브라우저에서 https://github.com/oooalways1/25110601 접속
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: **gh-pages** 선택
   - Folder: **/ (root)** 선택
5. **Save** 버튼 클릭

### 3단계: 완료!

1-2분 후 다음 URL로 접속:

```
https://oooalways1.github.io/25110601/
```

---

## 🔄 코드 수정 후 재배포

코드를 수정한 후:

```powershell
# 변경사항 저장
git add .
git commit -m "수정 내용 설명"
git push

# 재배포
npm run deploy
```

---

## ❓ 문제 해결

### Git/Node.js 명령어를 찾을 수 없다는 오류

**해결책**: 
1. Git과 Node.js를 설치했는지 확인
2. **PowerShell을 완전히 종료하고 새로 열기**
3. 다음 명령어로 확인:
```powershell
git --version
node --version
```

### GitHub 로그인 요청

Git 명령어 실행 시 GitHub 로그인 창이 나타나면:
- GitHub 사용자명과 비밀번호 입력
- 또는 Personal Access Token 사용

### 404 오류 (페이지를 찾을 수 없음)

**해결책**:
1. GitHub Pages 설정에서 `gh-pages` 브랜치가 선택되었는지 확인
2. 몇 분 기다린 후 다시 시도 (배포에 시간이 걸림)
3. 브라우저 캐시 삭제 후 재시도

### 빌드 오류

```powershell
# node_modules 삭제 후 재설치
Remove-Item -Recurse -Force node_modules
npm install
npm run deploy
```

---

## 📱 배포 완료 후

게임 URL을 친구들과 공유하세요!

```
https://oooalways1.github.io/25110601/
```

---

## 💡 추가 팁

### PowerShell 스크립트로 배포

```powershell
.\deploy.ps1
```

이 명령어 하나로 빌드와 배포가 자동으로 진행됩니다!

### 배포 상태 확인

GitHub 저장소의 **Actions** 탭에서 배포 진행 상태를 확인할 수 있습니다.

---

**성공적인 배포 되세요! 🎉**

배포 URL: https://oooalways1.github.io/25110601/


