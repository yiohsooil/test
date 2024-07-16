/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface ArrowProps {
  opacity: number;
  hover: number;
  isBgColor?: boolean;
  onClick?: () => void;
}

const PrevArrow = ({
  opacity,
  hover,
  isBgColor = true,
  onClick,
}: ArrowProps) => {
  return (
    <button
      type="button"
      css={prevArrowStyle(opacity, hover, isBgColor)}
      onClick={onClick}
    >
      <NavigateBeforeIcon css={iconStyle} fontSize="large" />
    </button>
  );
};

const NextArrow = ({
  opacity,
  hover,
  isBgColor = true,
  onClick,
}: ArrowProps) => {
  return (
    <button
      type="button"
      css={nextArrowStyle(opacity, hover, isBgColor)}
      onClick={onClick}
    >
      <NavigateNextIcon css={iconStyle} fontSize="large" />
    </button>
  );
};

export { PrevArrow, NextArrow };

const arrowStyle = (opacity: number, hover: number, isBgColor: boolean) => css`
  position: absolute;
  height: 100%;
  // height: 320px;
  padding: 0 15px;
  top: 0;
  cursor: pointer;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: transparent;
  border: none;
  background: ${isBgColor ? 'rgba(0, 0, 0, 0.1)' : 'none'};
  box-sizing: border-box;
  opacity: ${opacity};

  &:hover {
    opacity: ${0.1 * hover};
  }

  @media (max-width: 992px) {
    // height: 300px;
  }

  @media (max-width: 480px) {
    // height: 200px;
  }
`;

const prevArrowStyle = (
  opacity: number,
  hover: number,
  isBgColor: boolean
) => css`
  ${arrowStyle(opacity, hover, isBgColor)};
  left: 0;
`;

const nextArrowStyle = (
  opacity: number,
  hover: number,
  isBgColor: boolean
) => css`
  ${arrowStyle(opacity, hover, isBgColor)};
  right: 0;
`;

const iconStyle = css`
  color: #fff;
`;
