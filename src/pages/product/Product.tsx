/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductLayout from './ProductLayout';
import Notice from '../../components/product/Notice';
import { PRODUCT_DANA_I } from '../../constants';
import Intro from '../../components/product/Intro';
import danai_bg_img_1 from '../../assets/images/sub/product/danai_img_1.jpg';
import danai_bg_img_2 from '../../assets/images/sub/product/danai_img_2.jpg';
import danai_bg_img_3 from '../../assets/images/sub/product/danai_img_3.jpg';
import danai_bg_img_4 from '../../assets/images/sub/product/danai_img_4.jpg';
import danai_bg_img_5 from '../../assets/images/sub/product/danai_img_5.jpg';
import { Helmet } from 'react-helmet';

export default function Product() {
  return (
    <ProductLayout>
      <Helmet>
        <title>Dana I</title>
      </Helmet>
      <Notice />
      <Intro product={PRODUCT_DANA_I} app={true} />
      <section css={sectionContainer}>
        <div css={sectionColumnInnerContainer}>
          <h2 css={sectionTitle}>特点</h2>
          <div css={imgContainer}>
            <div css={imgBox}>
              <div css={ImgItem_1(danai_bg_img_1)}>
                <p>使用AAA碱性电池</p>
              </div>
              <div css={ImgItem_2(danai_bg_img_2)}>
                <p>轻松查看剩余胰岛素</p>
              </div>
            </div>
            <div css={imgBox}>
              <div css={ImgItem_3(danai_bg_img_3)}>
                <p>轻松查看螺杆 状态</p>
              </div>
              <div css={ImgItem_4(danai_bg_img_4)}>
                <p>采用UTC时区</p>
              </div>
            </div>
            <div css={ImgItem_5(danai_bg_img_5)}>
              <p>可设置24小时CIR/CF</p>
            </div>
          </div>
        </div>
      </section>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <div css={sectionTitleContainer}>
            <h2 css={sectionTitle}>产品规格</h2>
          </div>
          <div css={tableContainer}>
            <table>
              <tbody>
                <tr>
                  <th>有点</th>
                  <td>智能泵</td>
                </tr>
                <tr>
                  <th>性能</th>
                  <td>
                    <ol>
                      <li>1) 胰岛素注入速度：12 sec/U</li>
                      <li>2) 胰岛素容量：3ml</li>
                      <li>3) 可设置每小时的基础输注量</li>
                      <li>4) 保存输注量以及排气后剩余药量</li>
                      <li>5) 显示剩余输注量和电池余量</li>
                      <li>
                        6)
                        便捷功能：运动模式功能、暂停功能、三餐输注量可设置为不同的剂量
                      </li>
                      <li>7) 大剂量调节范围：0~80U</li>
                      <li>8) 基础量调节范围：0~16U/h</li>
                      <li>9) 基础输注间隔：4分钟</li>
                      <li>
                        10)
                        安全装置：堵塞时报警功能、输注速度校正、可设置最大输注量
                      </li>
                      <li>11) 防水功能：IPX8</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
}

const sectionContainer = css`
  width: 100%;
  padding: 50px 15px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
`;

const sectionColumnInnerContainer = css`
  display: flex;
  flex-direction: column;
`;

const sectionTitle = css`
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 0 15px 0;
`;

const imgContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

const imgBox = css`
  width: 100%;
  flex: 1;
  display: flex;
  border: 1px soild red;
  gap: 10px;
  box-sizing: border-box;
`;

const imgItem = (bg: string) => css`
  position: relative;
  height: 360px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const ImgItem_text = css`
  display: flex;
  padding: 30px;
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ImgItem_1 = (bg: string) => css`
  ${imgItem(bg)};
  width: 60%;

  & p {
    ${ImgItem_text}
    justify-content: flex-end;
  }
`;

const ImgItem_2 = (bg: string) => css`
  ${imgItem(bg)};
  width: 40%;

  & p {
    ${ImgItem_text}
  }
`;

const ImgItem_3 = (bg: string) => css`
  ${imgItem(bg)};
  width: 40%;

  & p {
    ${ImgItem_text}
  }
`;

const ImgItem_4 = (bg: string) => css`
  ${imgItem(bg)};
  width: 60%;

  & p {
    ${ImgItem_text}
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const ImgItem_5 = (bg: string) => css`
  ${imgItem(bg)};
  width: 100%;

  & p {
    ${ImgItem_text}
  }
`;

const sectionInnerContainer = css`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const sectionTitleContainer = css`
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const tableContainer = css`
  flex: 1;

  & table {
    border: 1px solid #ddd;
    border-top: 2px solid #000;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: auto;

    tbody tr th {
      background-color: #f5f5f5;
      padding: 15px;
      text-align: left;
      width: 130px;
      line-height: 1.4;
      vertical-align: top;
      border-top: 1px solid #dddddd;
      font-weight: bold;
    }

    tbody tr td {
      padding: 15px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #dddddd;
    }

    tbody tr td ol li {
      line-height: 1.9;
    }
  }

  @media (max-width: 480px) {
    & table tbody tr th {
      width: 60px;
  }
`;
