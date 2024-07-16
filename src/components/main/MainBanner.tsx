/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import aboutBannerBg from '../../assets/images/main/main_con01.png';
import productBannerBg from '../../assets/images/main/main_con03.png';
import mallBannerBg from '../../assets/images/main/main_con04.png';
import { MAIN_BANNER_TEXT } from '../../constants';
import Banner from './Banner';
import { checkVisibility } from '../../utils';

export default function MainBanner() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);
  const mallRef = useRef<HTMLDivElement | null>(null);

  const [isAboutVisible, setAboutVisible] = useState(false);
  const [isProductVisible, setProductVisible] = useState(false);
  const [isMallVisible, setMallVisible] = useState(false);

  const handleScroll = () => {
    if (!isAboutVisible && checkVisibility(aboutRef)) {
      setAboutVisible(true);
    }
    if (!isProductVisible && checkVisibility(productRef)) {
      setProductVisible(true);
    }
    if (!isMallVisible && checkVisibility(mallRef)) {
      setMallVisible(true);
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
    <section css={container}>
      <div css={innerContainer}>
        <Banner
          ref={aboutRef}
          bg={aboutBannerBg}
          isVisible={isAboutVisible}
          duration={'0.5'}
          title={MAIN_BANNER_TEXT.about.title}
          description={MAIN_BANNER_TEXT.about.description}
          linkText={MAIN_BANNER_TEXT.detail}
          linkTo={'/about'}
        />
        <Banner
          ref={productRef}
          bg={productBannerBg}
          isVisible={isProductVisible}
          duration={'1'}
          title={MAIN_BANNER_TEXT.product.title}
          description={MAIN_BANNER_TEXT.product.description}
          linkText={MAIN_BANNER_TEXT.detail}
          linkTo={'/product'}
        />
        <Banner
          ref={mallRef}
          bg={mallBannerBg}
          isVisible={isMallVisible}
          duration={'1.5'}
          title={MAIN_BANNER_TEXT.mall.title}
          description={MAIN_BANNER_TEXT.mall.description}
          linkText={MAIN_BANNER_TEXT.detail}
          linkMall={'https://www.sooil.com/shop'}
        />
      </div>
    </section>
  );
}

const container = css`
  padding: 50px 15px 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    padding: 30px 15px;
  }
`;

const innerContainer = css`
  width: 1170px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 272px);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 230px);
    width: 100%;
    max-width: 750px;
    gap: 15px;
  }
`;
