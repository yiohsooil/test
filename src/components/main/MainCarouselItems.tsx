/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

interface CarouselItemContentProps {
  slideIndex: number;
  currentSlide: number | null;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const CarouselItem = ({
  slideIndex,
  currentSlide,
  leftContent,
  rightContent,
}: CarouselItemContentProps) => {
  return (
    <>
      <div
        css={[
          leftCarouselItemContent,
          currentSlide !== slideIndex ? slideEnter('-120vw') : slideEnterActive,
        ]}
      >
        {leftContent}
      </div>
      <div
        css={[
          rightCarouselItemContent,
          currentSlide !== slideIndex ? slideEnter('120vw') : slideEnterActive,
        ]}
      >
        {rightContent}
      </div>
    </>
  );
};

export { CarouselItem };

const CarouselItemContent = css`
  position: absolute;
  height: 100%;
  top: 0;
  box-sizing: border-box;
`;

const leftCarouselItemContent = css`
  ${CarouselItemContent};
  color: #fff;
  width: 60%;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 15px;
  padding-bottom: 10px;
  text-align: left;

  & h2 {
    line-height: 1.1;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  & p {
    margin-top: 0;
    font-size: 0.8rem;
  }

  @media (max-width: 992px) {
    & h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    & h2 {
      font-size: 1.1rem;
    }
  }
`;

const rightCarouselItemContent = css`
  ${CarouselItemContent};
  right: 0;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideEnter = (x: string) => css`
  opacity: 0;
  transform: translateX(${x});
`;

const slideEnterActive = css`
  opacity: 1;
  transform: translateX(0);
  transition: all 1.5s ease;
`;
