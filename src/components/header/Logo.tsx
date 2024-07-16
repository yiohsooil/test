/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/sooil_logo.png';

export default function Logo() {
  return (
    <h1>
      <Link to={'/'}>
        <img css={logoStyle} src={logo} alt="SOOIL" />
      </Link>
    </h1>
  );
}

const logoStyle = css`
  width: 77px;
  height: auto;
`;
