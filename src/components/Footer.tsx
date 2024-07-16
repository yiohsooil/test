/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import FooterNav from './footer/FooterNav';
import Copyright from './footer/Copyright';

export default function Footer() {
  return (
    <footer css={container}>
      <div css={innerContainer}>
        {/* <FooterNav /> */}
        <Copyright />
      </div>
    </footer>
  );
}

const container = css`
  background-color: #242528;
  display: flex;
  justify-content: center;
`;

const innerContainer = css`
  width: 1170px;
  padding: 0 15px;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
