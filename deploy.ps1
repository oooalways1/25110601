# 수학 산성비 게임 GitHub Pages 배포 스크립트 (PowerShell)

Write-Host "🚀 수학 산성비 게임 배포 시작..." -ForegroundColor Cyan

# 1. 빌드
Write-Host "📦 프로젝트 빌드 중..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 빌드 실패!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 빌드 완료!" -ForegroundColor Green

# 2. dist 폴더로 이동
Set-Location dist

# 3. Git 초기화
Write-Host "📤 GitHub Pages에 배포 중..." -ForegroundColor Yellow
git init
git add -A
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

# 4. gh-pages 브랜치로 푸시
git push -f https://github.com/oooalways1/25110601.git main:gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 배포 실패!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

Write-Host "✅ 배포 완료!" -ForegroundColor Green
Write-Host "🌐 사이트 URL: https://oooalways1.github.io/25110601/" -ForegroundColor Cyan

# 5. 원래 폴더로 돌아가기
Set-Location ..

Write-Host "🎉 배포가 성공적으로 완료되었습니다!" -ForegroundColor Green

