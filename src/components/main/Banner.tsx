/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface BannerProps {
  bg: string;
  isVisible: boolean;
  duration: string;
  title: string;
  description: string;
  linkText: string;
  linkTo?: string;
  linkMall?: string;
}

const Banner = forwardRef<HTMLDivElement, BannerProps>(
  (
    { bg, isVisible, duration, title, description, linkText, linkTo, linkMall },
    ref
  ) => {
    return (
      <div ref={ref} css={banner(bg, isVisible, duration)}>
        <div css={bannerBox}>
          <h2 css={bannerTitle}>{title}</h2>
          <h5 css={bannerDescription}>{description}</h5>
          {linkTo ? (
            <Link to={linkTo} css={bannerLink}>
              {linkText}
            </Link>
          ) : (
            <div
              css={bannerLink}
              onClick={() => (window.location.href = linkMall as string)}
            >
              {linkText}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Banner;

const banner = (bg: string, isVisible: boolean, duration: string) => css`
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${isVisible ? 1 : 0};
  transition: opacity ${duration}s ease-in-out;
`;

const bannerBox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const bannerTitle = css`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const bannerDescription = css`
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
`;

const bannerLink = css`
  padding: 7px 13px;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(39, 128, 227, 0);
  font-size: 0.9rem;
  transition: all 0.5s ease;
  text-decoration: none;
  align-self: flex-start;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: rgba(39, 128, 227, 1);
    border-color: rgb(39, 128, 227);
  }
`;
