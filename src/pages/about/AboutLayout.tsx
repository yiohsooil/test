/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import SubLayout from '../../components/SubLayout';
import SubVisual from '../../components/common/SubVisual';
import { ABOUT_SUB_VISUAL_TEXT, aboutSubMenu } from '../../constants/index';
import subVisualBg from '../../assets/images/sub/about/sub_vs01.jpg';
import SubMenuList from '../../components/common/SubMenuList';

type AboutLayoutProps = {
  children: ReactNode;
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <SubLayout>
      <SubVisual
        subBg={subVisualBg}
        subTitleString={ABOUT_SUB_VISUAL_TEXT.subTitle}
        subDescriptionString={ABOUT_SUB_VISUAL_TEXT.subDescription}
      />
      <SubMenuList subMenu={aboutSubMenu} />
      {children}
    </SubLayout>
  );
}
