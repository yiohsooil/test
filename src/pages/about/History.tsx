/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AboutLayout from './AboutLayout';
import HistoryCarousel from './HistoryCarousel';
import HistoryTabs from './HistoryTabs';

export default function History() {
  return (
    <AboutLayout>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <HistoryCarousel />
          <HistoryTabs />
        </div>
      </section>
    </AboutLayout>
  );
}

const sectionContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 15px;
  box-sizing: border-box;
`;

const sectionInnerContainer = css`
  width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }
`;
