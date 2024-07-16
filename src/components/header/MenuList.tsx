/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { productSubMenu } from '../../constants';
import CustomizedAccordion from './Accordion';

export default function MenuList() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleColoseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div css={menuList}>
        {/* <Menu name="회사소개" subMenu={aboutSubMenu} link={'/about'} /> */}
        <Menu name="产品介绍" subMenu={productSubMenu} link={'/'} />
      </div>
      <div
        css={mobileMenuStyle}
        onClick={isMobileMenuOpen ? handleColoseMenu : handleOpenMenu}
      >
        {isMobileMenuOpen ? (
          <CloseIcon css={menuIcon} fontSize="large" />
        ) : (
          <MenuIcon css={menuIcon} fontSize="large" />
        )}
      </div>
      <div css={mobileMenuList(isMobileMenuOpen)} ref={mobileMenuRef}>
        {/* <CustomizedAccordion
          name="회사소개"
          subMenu={aboutSubMenu}
          panelString={'panel1'}
        /> */}
        <CustomizedAccordion
          name="产品介绍"
          subMenu={productSubMenu}
          panelString={'panel1'}
          onClick={handleColoseMenu}
        />
      </div>
    </>
  );
}

const menuList = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const mobileMenuStyle = css`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
  }
`;

const menuIcon = css`
  cursor: pointer;
`;

const mobileMenuList = (isMobileMenuOpen: boolean) => css`
  position: fixed;
  background-color: #fff;
  overflow: hidden;
  height: ${isMobileMenuOpen ? '100vh' : '0'};
  width: 100%;
  top: 65px;
  left: 0;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    display: none;
  }
`;
