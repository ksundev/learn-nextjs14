import styles from "../../styles/about-us.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.box}>
        <div>
          <h2>Next.js 14 소개</h2>
          <p>
            Next.js 14는 React 애플리케이션을 위한 최신 풀스택 프레임워크입니다.
            Next.js는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하여
            빠르고 SEO 친화적인 웹 애플리케이션을 쉽게 개발할 수 있도록
            도와줍니다.
          </p>
          <h2>주요 기능</h2>
          <ul>
            <li>
              <strong>서버 사이드 렌더링(SSR)</strong>: 초기 페이지 로딩 속도를
              높이고 SEO를 개선합니다.
            </li>
            <li>
              <strong>정적 사이트 생성(SSG)</strong>: 빌드 시 HTML 파일을
              생성하여 빠른 로딩 속도를 제공합니다.
            </li>
            <li>
              <strong>API 라우트</strong>: 서버리스 함수로 API 엔드포인트를 쉽게
              생성할 수 있습니다.
            </li>
            <li>
              <strong>이미지 최적화</strong>: 자동으로 이미지 크기를 조정하고
              최적화합니다.
            </li>
            <li>
              <strong>CSS 및 Sass 지원</strong>: 스타일링을 위한 다양한 옵션을
              제공합니다.
            </li>
            <li>
              <strong>TypeScript 지원</strong>: 타입 안전성을 보장합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
