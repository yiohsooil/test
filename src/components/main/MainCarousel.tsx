/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Carousel from '../carousel/Carousel';
import { NextArrow, PrevArrow } from '../carousel/Arrows';
import CarouselContainer from './MainCarouselContainer';
import main_vs01 from '../../assets/images/main/main_vs01.png';
import main_vs01_bg from '../../assets/images/main/main_vs01_bg.jpg';
import main_vs02 from '../../assets/images/main/main_vs02.png';
import main_vs02_bg from '../../assets/images/main/main_vs02_bg.jpg';
import { CarouselItem } from './MainCarouselItems';
import { CAROUSEL_TEXT } from '../../constants';

export default function MainCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);

  const handleSlideChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow opacity={0.1} hover={10} />,
    nextArrow: <NextArrow opacity={0.1} hover={10} />,
    beforeChange: (current: number, next: number) => {
      handleSlideChange(next);
    },
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <Carousel settings={settings}>
      <CarouselContainer bg={main_vs01_bg}>
        <CarouselItem
          slideIndex={0}
          currentSlide={currentSlide}
          leftContent={
            <div>
              <h2>
                {CAROUSEL_TEXT.first.title.map((text, index) => {
                  return (
                    <React.Fragment key={index}>
                      {text}
                      {CAROUSEL_TEXT.first.title.length !== index && <br />}
                    </React.Fragment>
                  );
                })}
              </h2>
              <p>{CAROUSEL_TEXT.first.description}</p>
            </div>
          }
          rightContent={
            <div>
              <img
                src={main_vs01}
                alt="Slide 1 img"
                loading="lazy"
                css={CarouselItemImgStyle}
              />
            </div>
          }
        />
      </CarouselContainer>
      <CarouselContainer bg={main_vs02_bg}>
        <CarouselItem
          slideIndex={1}
          currentSlide={currentSlide}
          leftContent={
            <div>
              <h2>
                {CAROUSEL_TEXT.second.title.map((text, index) => {
                  return (
                    <React.Fragment key={index}>
                      {text}
                      {CAROUSEL_TEXT.second.title.length !== index && <br />}
                    </React.Fragment>
                  );
                })}
              </h2>
              <p>{CAROUSEL_TEXT.second.description}</p>
            </div>
          }
          rightContent={
            <div>
              <img
                src={main_vs02}
                alt="Slide 1 img"
                loading="lazy"
                css={CarouselItemImgStyle}
              />
            </div>
          }
        />
      </CarouselContainer>
    </Carousel>
  );
}

const CarouselItemImgStyle = css`
  height: 320px;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;
