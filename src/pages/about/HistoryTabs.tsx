/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Tabs from '../../components/common/Tabs';
import {
  ABOUT_HISTORY_TABS,
  ABOUT_TIMELINE_1999_1979_TEXT,
  ABOUT_TIMELINE_2009_2000_TEXT,
  ABOUT_TIMELINE_2024_2010_TEXT,
} from '../../constants';
import useTabIndex from '../../store/tabIndexStore';
import HistoryTabItem from './HistoryTabItem';

export default function HistoryTabs() {
  const { tabIndex } = useTabIndex();
  return (
    <section css={container}>
      <div css={innerContainer}>
        <Tabs tabMenuList={ABOUT_HISTORY_TABS} />
        <div css={timeline}>
          {tabIndex === 0 && (
            <HistoryTabItem item={ABOUT_TIMELINE_2024_2010_TEXT} />
          )}
          {tabIndex === 1 && (
            <HistoryTabItem
              item={ABOUT_TIMELINE_2009_2000_TEXT}
              isFirstLeft={false}
            />
          )}{' '}
          {tabIndex === 2 && (
            <HistoryTabItem
              item={ABOUT_TIMELINE_1999_1979_TEXT}
              isFirstLeft={false}
            />
          )}
        </div>
      </div>
    </section>
  );
}

const container = css`
  width: 100%;
  padding: 50px 15px;
  display: flex;
  justify-content: center;
`;

const innerContainer = css`
  width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 970px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 750px;
  }
`;

const timeline = css`
  width: 100%;
  position: relative;
  margin-top: 50px;

  &:before {
    content: '';
    position: absolute;
    top: 18px;
    left: 50%;
    margin-left: -0.5px;
    width: 1px;
    height: 100%;
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    &:before {
      left: 30px;
      margin-left: 0;
    }
  }
`;
