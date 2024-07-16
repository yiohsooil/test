/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';

type SubLayoutProps = {
  children: ReactNode;
};

export default function SubLayout({ children }: SubLayoutProps) {
  return <div css={container}>{children}</div>;
}

const container = css``;
