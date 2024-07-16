/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import AboutLayout from './AboutLayout';
import aboutImg1 from '../../assets/images/sub/about/corp_01.jpg';
import aboutImg2 from '../../assets/images/sub/about/corp_02.jpg';
import aboutImg3 from '../../assets/images/sub/about/corp_03.jpg';
import {
  ABOUT_FISRT_SECTION_POINT_TEXT,
  ABOUT_FISRT_SECTION_TEXT,
  ABOUT_SOOIL_CEO_BG_TEXT,
  ABOUT_SOOIL_CEO_TEXT,
  ABOUT_SOOIL_STRENGTHS_TEXT,
  ABOUT_SUBTITLE,
} from '../../constants';
import { handleImg } from '../../utils';

export default function About() {
  return (
    <AboutLayout>
      <section css={sectionContainer}>
        <div css={aboutMissionBg(aboutImg1)}>
          <h1 css={aboutMissionTitle}>
            {ABOUT_FISRT_SECTION_TEXT.mission.title}
          </h1>
          <h5 css={aboutMissionDescription}>
            {ABOUT_FISRT_SECTION_TEXT.mission.description}
          </h5>
          <h1 css={aboutMissionTitle}>
            {ABOUT_FISRT_SECTION_TEXT.vision.title}
          </h1>
          <h5 css={aboutMissionDescription}>
            {ABOUT_FISRT_SECTION_TEXT.vision.description}
          </h5>
          <ul css={pointBoxContainer}>
            {ABOUT_FISRT_SECTION_POINT_TEXT.map((text, index) => {
              return (
                <li key={index} css={pointBox}>
                  <div>{text.number}</div>
                  <p>
                    {text.description.map((description, index) => (
                      <React.Fragment key={index}>
                        {description}
                        {index < text.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <div css={subTitle}>
            <h2>{ABOUT_SUBTITLE.strengths_title}</h2>
          </div>
          <div css={paragraph}>
            <p>{ABOUT_SOOIL_STRENGTHS_TEXT.paragraph1}</p>
            <p>{ABOUT_SOOIL_STRENGTHS_TEXT.paragraph2}</p>
            <div css={imgBox} onClick={() => handleImg(aboutImg2)}>
              <img src={aboutImg2} alt="About_SOOIL_img" />
            </div>
          </div>
        </div>
      </section>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <div css={subTitle}>
            <h2>{ABOUT_SUBTITLE.ceo_title}</h2>
          </div>
          <div css={paragraph}>
            <div css={imgBg(aboutImg3)}>
              <h3>{ABOUT_SOOIL_CEO_BG_TEXT.line1}</h3>
              <h3>{ABOUT_SOOIL_CEO_BG_TEXT.line2}</h3>
            </div>
            <p>{ABOUT_SOOIL_CEO_TEXT.paragraph1}</p>
            <p>{ABOUT_SOOIL_CEO_TEXT.paragraph2}</p>
          </div>
        </div>
      </section>
    </AboutLayout>
  );
}

const sectionContainer = css`
  display: flex;
  justify-content: center;
  padding: 50px 15px;

  &:first-of-type {
    padding-bottom: 0;
  }
`;
const aboutMissionBg = (bg: string) => css`
  width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center 75%;
  background-repeat: no-repeat;
  padding: 50px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }
`;
const aboutMissionTitle = css`
  position: relative;
  margin: 0;
  margin-top: 20px;
  font-weight: bold;

  &:after {
    content: '';
    position: absolute;
    top: -25px;
    left: 50%;
    margin-left: -2px;
    width: 3px;
    height: 15px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #00baff;
  }
`;
const aboutMissionDescription = css`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 40px;
  lin-height: 1.5rem;
  padding: 0 15px;
  font-weight: bold;
`;
const pointBoxContainer = css`
  display: flex;
  list-style: none;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const pointBox = css`
  border-radius: 60px;
  background-color: rgba(39, 128, 227, 0.5);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 120px;
  margin: -10px -10px;
  min-width: 250px;
  max-width: 40%;


  & div {
    position: relative;
      padding: 7px; 0;
  }

  & div:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -8px;
    width: 16px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  & p {
    font-size: 0.8rem;
    padding: 0;
  }
`;

const sectionInnerContainer = css`
  width: 1170px;
  display: flex;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const subTitle = css`
  width: 25%;
  font-size: 0.7rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const paragraph = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 25px;

  & p {
    margin: 0;
    word-break: break-all;
    overflow-wrap: break-word;
    line-height: 1.7rem;
  }
`;

const imgBox = css`
  width: 100%;
  cursor: pointer;

  & img {
    width: 100%;
    height: auto;
  }
`;

const imgBg = (bg: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 25px;
  box-sizing: border-box;
  color: #fff;

  & h3 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
`;
