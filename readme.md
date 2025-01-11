# Next.js 14 소개

Next.js 14는 React 애플리케이션을 위한 최신 풀스택 프레임워크입니다. Next.js는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하여 빠르고 SEO 친화적인 웹 애플리케이션을 쉽게 개발할 수 있도록 도와줍니다.

## 주요 기능

- **서버 사이드 렌더링(SSR)**: 초기 페이지 로딩 속도를 높이고 SEO를 개선합니다.
- **정적 사이트 생성(SSG)**: 빌드 시 HTML 파일을 생성하여 빠른 로딩 속도를 제공합니다.
- **API 라우트**: 서버리스 함수로 API 엔드포인트를 쉽게 생성할 수 있습니다.
- **이미지 최적화**: 자동으로 이미지 크기를 조정하고 최적화합니다.
- **CSS 및 Sass 지원**: 스타일링을 위한 다양한 옵션을 제공합니다.
- **TypeScript 지원**: 타입 안전성을 보장합니다.

Next.js 14는 개발자 경험을 향상시키고, 성능을 최적화하며, 최신 웹 표준을 준수하는 데 중점을 두고 있습니다.

## 설치 방법
- npm init -y
- npm install react@latest next@latest react-dom@latest
- "license": "MIT" 로 변경
- "scripts": {
    "dev": "next dev"
  } 추가

## Next.js 사용법
- app이라는 폴더 밑에 있는 page.tsx를 만들어야 한다. (파일명 중요!)
- Layout.tsx는 중첩이 된다. 자식 폴더에 있는 모든 page.tsx에 적용 된다.
- not-found.tsx 파일을 만들 수 있다.