/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface SubVisualProps {
  subBg: string;
  subTitleString: string;
  subDescriptionString: string[];
}

export default function SubVisual({
  subBg,
  subTitleString,
  subDescriptionString,
}: SubVisualProps) {
  return (
    <div css={container(subBg)}>
      <div css={innerContainer}>
        <h1 css={subTitle}>{subTitleString}</h1>
        <h6 css={subDescription}>
          {subDescriptionString.map((text, index) => {
            return (
              <React.Fragment key={index}>
                {text}
                {subDescriptionString.length !== index && <br />}
              </React.Fragment>
            );
          })}
        </h6>
      </div>
    </div>
  );
}

const container = (bg: string) => css`
  box-sizing: border-box;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const innerContainer = css`
  width: 1170px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
  color: #fff;

  @media (max-width: 992px) {
    width: 750px;
  }
`;

const subTitle = css`
  position: relative;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -15px;
    height: 1px;
    width: 30px;
    background-color: #fff;
  }
`;

const subDescription = css`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;
