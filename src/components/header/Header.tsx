/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Logo from './Logo';
import MenuList from './MenuList';

export default function Header() {
  return (
    <header css={header}>
      <div css={innerContainer}>
        <Logo />
        <MenuList />
      </div>
    </header>
  );
}

const header = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #000;
  z-index: 10;
  background-color: #fff;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    height: 65px;
  }
`;

const innerContainer = css`
  width: 1170px;
  height: 100%;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  align-items: center;
  // justify-content: flex-end;
  justify-content: space-between;

  @media (max-width: 992px) {
    width: 750px;
  }
`;
