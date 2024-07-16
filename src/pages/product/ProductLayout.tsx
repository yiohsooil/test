/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import SubLayout from '../../components/SubLayout';
import SubVisual from '../../components/common/SubVisual';
import subVisualBg from '../../assets/images/sub/product/sub_vs02.jpg';
import { PRODUCT_SUB_VISUAL_TEXT, productSubMenu } from '../../constants';
import SubMenuList from '../../components/common/SubMenuList';

type ProductLayoutProps = {
  children: ReactNode;
};

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <SubLayout>
      <SubVisual
        subBg={subVisualBg}
        subTitleString={PRODUCT_SUB_VISUAL_TEXT.subTitle}
        subDescriptionString={PRODUCT_SUB_VISUAL_TEXT.subDescription}
      />
      <SubMenuList subMenu={productSubMenu} />
      <div css={container}>
        <div css={innerContainer}>{children}</div>
      </div>
    </SubLayout>
  );
}

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const innerContainer = css`
  width: 1170px;
  height: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 750px;
  }
`;
