/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { FOOTER_NAV_TEXT } from '../../constants';

export default function FooterNav() {
  return (
    <ul css={navList}>
      <li css={navItem}>
        <Link to={FOOTER_NAV_TEXT.about.link} css={link}>
          {FOOTER_NAV_TEXT.about.title}
        </Link>
      </li>
      <li css={navItem}>
        <Link to={FOOTER_NAV_TEXT.product.link} css={link}>
          {FOOTER_NAV_TEXT.product.title}
        </Link>
      </li>
      <li css={navItem}>
        <div
          css={link}
          onClick={() => (window.location.href = FOOTER_NAV_TEXT.eng.link)}
        >
          {FOOTER_NAV_TEXT.eng.title}
        </div>
      </li>
      <li css={navItem}>
        <div
          css={link}
          onClick={() => (window.location.href = FOOTER_NAV_TEXT.mall.link)}
        >
          {FOOTER_NAV_TEXT.mall.title}
        </div>
      </li>
    </ul>
  );
}

const navList = css`
  display: flex;
  gap: 10px;
  padding: 15px 0 0 0;
  margin: 0;
`;

const navItem = css`
  color: #aaa;
  list-style: none;
  border-left: 1px solid #333;
  padding-left: 0.3rem;
  padding-right: 0.7rem;
  line-height: 1rem;
  font-size: 15px;

  &:first-of-type {
    border-left: none;
  }
`;

const link = css`
  color: #aaa;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ccc;
    transition: all 0.5s ease;
  }
`;
