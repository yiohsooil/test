/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from './header/Header';
// import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div css={layoutStyle}>
      <Header />
      <main css={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const layoutStyle = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const mainStyle = css`
  margin-top: 100px;
  flex: 1;

  @media (max-width: 992px) {
    margin-top: 65px;
  }
`;
