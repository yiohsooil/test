/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import { MenuProps } from '../../types';

export default function Menu({ name, subMenu, link }: MenuProps) {
  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const handleMouseEnter = () => {
    if (subMenuRef.current) {
      subMenuRef.current.style.height = `${subMenuRef.current.scrollHeight}px`;
    }
  };

  const handleMouseLeave = () => {
    if (subMenuRef.current) {
      subMenuRef.current.style.height = '0';
    }
  };

  return (
    <div
      css={menuBox}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link as string} css={menu}>
        {name}
      </Link>
      {subMenu && (
        <List css={subMenuList} ref={subMenuRef}>
          {subMenu.map(({ subMenuName, link }, index) => (
            <div key={index}>
              <ListItem>
                <Link to={link} css={subMenuItem}>
                  <ListItemText primary={subMenuName} />
                </Link>
              </ListItem>
              {subMenu.length !== index && (
                <Divider component="li" css={divider} />
              )}
            </div>
          ))}
        </List>
      )}
    </div>
  );
}

const menuBox = css`
  padding: 0 2rem;
  margin-top: 30px;
  position: relative;

  &:hover {
    & > ul {
      height: auto;
    }

    & > a::after {
      width: 64px;
    }
  }
`;

const menu = css`
  padding: 1.5rem 0;
  color: #222;
  font-size: 16px;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 2rem;
    width: 0;
    height: 3px;
    background-color: #111;
    -webkit-transition: width 0.5s ease;
    transition: width 0.5s ease;
  }
`;

const subMenuList = css`
  position: absolute;
  background-color: #111;
  min-width: 192px;
  z-index: 1;
  box-shadow: 0px 1px 1px 0px rgba(41, 41, 41, 0.75);
  text-align: left;
  padding: 0;
  top: 46px;
  left: 13px;
  height: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition: height 0.5s ease;
`;

const subMenuItem = css`
  color: #999;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #eee;
  }
`;

const divider = css`
  background-color: #292929;
  padding: 1px;
`;
