/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import useTabIndex from '../../store/tabIndexStore';

type TabsProps = {
  tabMenuList: string[];
};

export default function Tabs({ tabMenuList }: TabsProps) {
  const { tabIndex, setTabIndex } = useTabIndex();

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return (
    <section css={container}>
      <div css={tabs}>
        {tabMenuList.map((menu, index) => (
          <h4
            key={index}
            css={[tab, tabIndex === index && active]}
            onClick={() => handleTabIndex(index)}
          >
            {menu}
          </h4>
        ))}
      </div>
    </section>
  );
}

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const tabs = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

const tab = css`
  flex: 1;
  margin: 0;
  color: #fff;
  background-color: #248edf;
  border-color: #0085dd;
  display: inline-block;
  color: #666;
  background-color: #eee;
  padding: 15px 0;
  border: 1px solid #ccc;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #0085dd;
    border-color: #0085dd;
  }
`;

const active = css`
  color: #fff;
  background-color: #0085dd;
  border-color: #0085dd;
`;
