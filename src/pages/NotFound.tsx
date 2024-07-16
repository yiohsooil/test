/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import notFoundImg from '../assets/images/notFound.png';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={imgBox}>
          <img src={notFoundImg} alt="not found img" />
        </div>
      </div>
    </div>
  );
}

const container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const innerContainer = css`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }
`;

const imgBox = css`
  width: 400px;
  height: 400px;
  box-sizing: border-box;

  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 400px;
  }
`;
