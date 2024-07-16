/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import banner from '../../assets/images/main/banner.png';
import { MAIN_APP_BANNER_TEXT } from '../../constants';
import { checkVisibility } from '../../utils';

export default function MainAppBanner() {
  const appBannerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  const handleScroll = () => {
    if (!isVisible && checkVisibility(appBannerRef)) {
      setVisible(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={container}>
      <div ref={appBannerRef} css={innerContainer(banner, isVisible)}>
        <div css={textContainer}>
          <h2 css={bannerTitle}>
            {MAIN_APP_BANNER_TEXT.title.map((text, index) => {
              return (
                <React.Fragment key={index}>
                  {text}
                  {MAIN_APP_BANNER_TEXT.title.length !== index && <br />}
                </React.Fragment>
              );
            })}
          </h2>
          <p css={bannerDescription}>{MAIN_APP_BANNER_TEXT.description}</p>
        </div>
      </div>
    </div>
  );
}

const container = css`
  width: 100%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const innerContainer = (bg: string, isVisible: boolean) => css`
  width: 1170px;
  height: 170px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  box-sizing: border-box;
  opacity: ${isVisible ? 1 : 0};
  transition: opacity 1s ease-in-out;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const textContainer = css`
  padding-left: 30px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const bannerTitle = css`
  margin: 0;
  font-size: 1.5rem;
  padding: 15px 0;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const bannerDescription = css`
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
