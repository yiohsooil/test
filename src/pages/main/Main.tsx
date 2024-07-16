/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import MainCarousel from '../../components/main/MainCarousel';
import MainBanner from '../../components/main/MainBanner';
import MainAppBanner from '../../components/main/MainAppBanner';

export default function Main() {
  return (
    <div css={MainContainer}>
      <MainCarousel />
      <MainBanner />
      <MainAppBanner />
    </div>
  );
}

const MainContainer = css`
  display: flex;
  flex-direction: column;
`;
