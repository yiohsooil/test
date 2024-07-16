/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { PRODUCT_NOTICE_TEXT } from '../../constants';

export default function Notice() {
  return (
    <section css={container}>
      <p>{PRODUCT_NOTICE_TEXT.first}</p>
    </section>
  );
}

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;

  p {
    margin: 0;
    line-height: 1.7rem;
  }
`;
