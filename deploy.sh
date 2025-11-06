#!/bin/bash

# 수학 산성비 게임 GitHub Pages 배포 스크립트

echo "🚀 수학 산성비 게임 배포 시작..."

# 1. 빌드
echo "📦 프로젝트 빌드 중..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패!"
    exit 1
fi

echo "✅ 빌드 완료!"

# 2. dist 폴더로 이동
cd dist

# 3. Git 초기화
echo "📤 GitHub Pages에 배포 중..."
git init
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# 4. gh-pages 브랜치로 푸시
# 주의: YOUR_USERNAME을 실제 GitHub 사용자명으로 변경하세요!
git push -f https://github.com/YOUR_USERNAME/vibecoding.git main:gh-pages

if [ $? -ne 0 ]; then
    echo "❌ 배포 실패!"
    cd ..
    exit 1
fi

echo "✅ 배포 완료!"
echo "🌐 사이트 URL: https://YOUR_USERNAME.github.io/vibecoding/"

# 5. 원래 폴더로 돌아가기
cd ..

echo "🎉 배포가 성공적으로 완료되었습니다!"

