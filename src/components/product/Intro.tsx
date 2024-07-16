/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import android from '../../assets/images/sub/product/ic_dl_android.png';
import ios from '../../assets/images/sub/product/ic_dl_ios.png';

type IntroProps = {
  product: {
    danaimgs: string[];
    title: string;
    subtitle: string[];
    description: string[];
    keywords: string[];
    imgs: string[];
  };
  isAnyDana?: boolean;
  app?: boolean;
};

export default function Intro({
  product,
  isAnyDana = false,
  app = false,
}: IntroProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setImgIndex(index);
  };

  const { danaimgs, title, subtitle, description, keywords, imgs } = product;
  return (
    <section css={sectionContainer}>
      <div css={imgBox(isAnyDana)}>
        <img src={danaimgs[imgIndex]} alt="dana-img" />
      </div>
      <div css={contentBox}>
        <h1 css={titleStyle(app)}>
          {title}
          {/* {app && (
            <div css={appImgBox}>
              <img src={android} alt="android_img" />
              <img src={ios} alt="ios_img" />
            </div>
          )} */}
        </h1>
        <h2 css={subTitleStyle}>
          {subtitle.length > 0 &&
            subtitle.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {subtitle.length - 1 !== index && <br />}
              </React.Fragment>
            ))}
        </h2>
        <p css={descriptionStyle(isAnyDana)}>
          {description.length > 0 &&
            description.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {description.length - 1 !== index && <br />}
              </React.Fragment>
            ))}
        </p>
        <ul css={list}>
          {keywords.length > 0 &&
            keywords.map((keyword, index) => (
              <li key={index} css={listItem}>
                <strong>{keyword[0]}</strong>
                {`${keyword[1]}${keywords.length !== index + 1 ? ', ' : ''} `}
              </li>
            ))}
          {imgs.length > 0 &&
            imgs.map((img, index) => (
              <li
                key={index}
                css={listItem}
                onClick={() => handleIndexChange(index)}
              >
                <img src={img} alt="danars_thumb_img" />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

const sectionContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  border-top: 1px solid #ddd;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const imgBox = (isAnyDana: boolean) => css`
  flex: 1;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 15px;

  & img {
    width: ${isAnyDana ? '255px' : '302px'};
    height: auto;
  }
`;

const contentBox = css`
  flex: 1;
  box-sizing: border-box;
  padding: 0 15px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const titleStyle = (app: boolean) => css`
  position: relative;
  padding: 15px 0 30px 0;
  margin: 0 0 30px 0;
  font-size: 2rem;
  font-weight: bold;
  display: ${app ? 'flex' : 'block'};
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 35px;
    height: 3px;
    background-color: #ddd;
  }

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 35px;
      transform: translateX(-50%);
      height: 3px;
      background-color: #ddd;
    }
  }
`;

const appImgBox = css`
  display: flex;
  justify-content: center;
  padding-left: 16px;
  gap: 16px;

  @media (max-width: 992px) {
    padding-left: 16px;
    gap: 10px;

    & img {
      width: 50%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    gap: 6px;

    & img {
      width: 30%;
      height: auto;
    }
  }
`;

const subTitleStyle = css`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #2780e3;
  line-height: 1.2;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const descriptionStyle = (isAnyDana: boolean) => css`
  font-size: 1rem;
  line-height: ${isAnyDana ? '2' : '1.5'};
  font-weight: ${isAnyDana ? 'bold' : 'normal'};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const list = css`
  display: flex;
  gap: 10px;
  padding-top: 50px;
`;

const listItem = css`
  font-size: 1.5rem;
  display: inline-block;
  padding: 10px 3px;
  cursor: pointer;
  transition: all 0.3s;

  & strong {
    font-size: 1.8rem;
  }

  &:first-of-type {
    padding-left: 0;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    & img {
      width: 90%;
      height: auto;
    }
  }
`;
