/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import CustomizedAccordion from '../header/Accordion';
import { MenuProps } from '../../types';

type SubMenuProps = Omit<MenuProps, 'name' | 'link'>;

export default function SubMenuList({ subMenu }: SubMenuProps) {
  const location = useLocation();

  return (
    <div css={container}>
      <div css={innerContainer}>
        <div css={buttonGroup}>
          {subMenu?.map(({ subMenuName, link }, index) => (
            <Link
              to={link}
              css={[linkButton, link === location.pathname && active]}
              key={index}
            >
              {subMenuName}
            </Link>
          ))}
        </div>
        <div css={mobileButtonGroup}>
          <CustomizedAccordion
            name="子菜单"
            subMenu={subMenu}
            panelString={'panel-product'}
            isSub={true}
          />
        </div>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 15px;
`;

const innerContainer = css`
  width: 1170px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const buttonGroup = css`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const linkButton = css`
  position: relative;
  link-style: none;
  text-decoration: none;
  color: #444;
  width: 13.5%;
  text-align: center;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    right: 0;
    height: 19px;
    width: 1px;
    background-color: #ccc;
  }

  &:last-child:after {
    display: none;
  }

  &:hover {
    color: #0075c3;
  }
`;

const mobileButtonGroup = css`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const active = css`
  color: #0075c3;
  font-weight: bold;
`;
