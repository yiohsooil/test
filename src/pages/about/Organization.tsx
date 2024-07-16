/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import AboutLayout from './AboutLayout';
import organiztionBg from '../../assets/images/sub/about/org_01.jpg';
import { ABOUT_ORGANIZATION_TEXT } from '../../constants';
import { handleImg } from '../../utils';

export default function Organization() {
  return (
    <AboutLayout>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <h2 css={subTitle}>{ABOUT_ORGANIZATION_TEXT.title}</h2>
          <div css={imgBox} onClick={() => handleImg(organiztionBg)}>
            <img src={organiztionBg} alt="About_SOOIL_organiztion_img" />
          </div>
        </div>
      </section>
    </AboutLayout>
  );
}

const sectionContainer = css`
  display: flex;
  justify-content: center;
`;

const sectionInnerContainer = css`
  width: 1170px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const subTitle = css`
  font-size: 1rem;
`;

const imgBox = css`
  width: 100%;
  cursor: pointer;

  & img {
    width: 100%;
    height: auto;
  }
`;
