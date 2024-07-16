/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import Carousel from '../../components/carousel/Carousel';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../components/carousel/Arrows';
import historyBg from '../../assets/images/sub/about/history_prt_bg.jpg';
import historyBgCircle from '../../assets/images/sub/about/history_prt_bg.png';
import { ABOUT_HISTORY_YEARS } from '../../constants';

export default function HistoryCarousel() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(10);

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const settingsMain = {
    ...settings,
    asNavFor: nav2 || undefined,
    prevArrow: <PrevArrow opacity={0.7} hover={10} isBgColor={false} />,
    nextArrow: <NextArrow opacity={0.7} hover={10} isBgColor={false} />,
  };

  const settingsNav = {
    ...settings,
    asNavFor: nav1 || undefined,
    ref: sliderRef2,
    slidesToShow,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(10);
      }
    };

    window.addEventListener('resize', updateSlidesToShow);
    updateSlidesToShow();

    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  return (
    <div css={carouselContainer(historyBg)}>
      <h1 css={carouselTitle}>DANA 45년 역사</h1>
      <Carousel settings={settingsNav} ref={sliderRef2}>
        {ABOUT_HISTORY_YEARS.map(({ year }) => (
          <div css={carouselNav} key={year}>
            <div>{year}</div>
          </div>
        ))}
      </Carousel>
      <div css={mainCarouselImgContainer(historyBgCircle)}>
        <Carousel settings={settingsMain} ref={sliderRef1}>
          {ABOUT_HISTORY_YEARS.map(({ year, img, title }) => (
            <div key={year}>
              <div css={imgBox}>
                <img src={img} alt={String(year)} />
                <h4>{title}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const carouselContainer = (bg: string) => css`
  width: 1170px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center 75%;
  background-repeat: no-repeat;
  padding: 50px;
  box-sizing: border-box;
  color: #fff;
  border: 1px solid red;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 970px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 0px;
    max-width: 750px;
  }
`;

const carouselTitle = css`
  position: relative;
  color: #fff;
  margin: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-size: 1rem;

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

const carouselNav = css`
  position: relative;
  padding: 50px 0 50px 0;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 40px;
    left: 50%;
    width: 100%;
    height: 1px;
    background-color: #222;
  }

  &:after {
    content: '';
    position: absolute;
    top: 31px;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 20px;
    background-color: #aaa;
    border-radius: 50%;
    transition: all 0.5s ease;
  }

  &:hover::after {
    background-color: #00baff;
  }

  .slick-current &::after {
    background-color: #00baff;
  }

  & div {
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const mainCarouselImgContainer = (bg: string) => css`
  background-image: url(${bg});
  background-size: content;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const imgBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & h4 {
    margin: 0;
  }
`;
