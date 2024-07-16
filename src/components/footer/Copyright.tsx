/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import footerLogo from '../../assets/images/logo/footer_logo.png';
import { FOOTER_COPYRIGHT_TEXT } from '../../constants';

export default function Copyright() {
  return (
    <div css={container}>
      <div css={copyrightContainer}>
        {/* <ul css={navList}>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.terms.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.terms.title}
            </div>
          </li>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.privacy.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.privacy.title}
            </div>
          </li>
          <li css={navItem}>
            <div
              css={link}
              onClick={() =>
                (window.location.href = FOOTER_COPYRIGHT_TEXT.guide.link)
              }
            >
              {FOOTER_COPYRIGHT_TEXT.guide.title}
            </div>
          </li>
        </ul> */}
        <div css={copyright}>
          {FOOTER_COPYRIGHT_TEXT.companyInfo_0.map((info, index) => (
            <div key={index}>
              <span css={infoLabel}>{info.label}</span>
              <span>{info.value}</span>
            </div>
          ))}
          {FOOTER_COPYRIGHT_TEXT.companyInfo_1.map((info, index) => (
            <div key={index}>
              <span css={infoLabel}>{info.label}</span>
              <span>{info.value}</span>
            </div>
          ))}
          <div css={copyrightSubBox}>
            {FOOTER_COPYRIGHT_TEXT.companyInfo_2.map((info, index) => (
              <div key={index}>
                <span css={infoLabel}>{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div css={copyright}>
          <div css={copyrightSubBox}>
            {FOOTER_COPYRIGHT_TEXT.cn_companyInfo_1.map((info, index) => (
              <div key={index}>
                <span>{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
          <div css={copyrightSubBox}>
            {FOOTER_COPYRIGHT_TEXT.cn_companyInfo_2.map((info, index) => (
              <div key={index}>
                <span css={infoLabel}>{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div css={copyright}>
          <div css={copyrightSubBox}>
            {FOOTER_COPYRIGHT_TEXT.cn_companyInfo_3.map((info, index) => (
              <div key={index}>
                <span>{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
          <div css={copyrightSubBox}>
            {FOOTER_COPYRIGHT_TEXT.cn_companyInfo_4.map((info, index) => (
              <div key={index}>
                <span css={infoLabel}>{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div css={copyright}>
          <div css={copyrightSubBox}>
            <div>
              <span>{FOOTER_COPYRIGHT_TEXT.icp_companyInfo[0].label}</span>{' '}
              {FOOTER_COPYRIGHT_TEXT.icp_companyInfo[0].value}
            </div>
            <div>
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {FOOTER_COPYRIGHT_TEXT.icp_companyInfo[1].value}
              </a>
            </div>
          </div>
        </div>
        {/* <div css={copyright}>Copyright {FOOTER_COPYRIGHT_TEXT.copyright}</div> */}
      </div>
      {/* <div css={logo}><img src={footerLogo} alt="footer logo" /></div> */}
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const copyrightContainer = css`
  flex: 1;
`;

const navList = css`
  display: flex;
  gap: 10px;
  padding: 0;
`;

const navItem = css`
  position: relative;
  color: #aaa;
  list-style: none;
  line-height: 1rem;
  font-size: 1rem;
  padding-left: 0.3rem;

  &:first-of-type {
    border-left: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    right: -7px;
    width: 1px;
    height: 10px;
    background-color: #666;
  }
`;

const link = css`
  color: #686868;
  cursor: pointer;
  font-size: 0.8rem;
`;

const address = css`
  font-size: 0.8rem;
  color: #fff;

  & p {
    color: #fff;
    // font-weight: bold;
    padding: 0;
    margin: 0.3rem;
  }

  & p span {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
`;

const copyright = css`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: #fff;
  padding-top: 0.8rem;
  flex-wrap: wrap;
  line-height: 1.5;

  & div {
    padding-right: 10px;
  }

  // & span {
  //   opacity: 0.7;
  // }

  & a {
    text-decoration: none;
    font-weight: bold;
    color: #0075c3;
  }
`;

const copyrightSubBox = css`
  display: flex;
  // gap: 0.8rem;
  flex-wrap: wrap;
`;

const infoLabel = css`
  display: inline-block;
  opacity: 0.7;
  padding-right: 10px;
`;

const logo = css`
  @media (max-width: 480px) {
    display: none;
  }
`;

const companyInfoBox = css`
  display: flex;
  flex-wrap: wrap;
  // flex-direction: column;
  gap: 10px;

  & div span {
    opacity: 0.8;
  }
`;
