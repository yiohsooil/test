/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductLayout from './ProductLayout';
import Notice from '../../components/product/Notice';
import { PRODUCT_DANA_R } from '../../constants';
import Intro from '../../components/product/Intro';
import danar_ft_bg1 from '../../assets/images/sub/product/danar_ft_bg01.jpg';
import danar_ft_bg2 from '../../assets/images/sub/product/danar_ft_bg02.jpg';
import arrow from '../../assets/images/sub/product/arw_spot_b.png';
import { Helmet } from 'react-helmet';

export default function DanaR() {
  return (
    <ProductLayout>
      <Helmet>
        <title>Dana R</title>
      </Helmet>
      <Notice />
      <Intro product={PRODUCT_DANA_R} />
      <section css={sectionContainer}>
        <div css={sectionColumnInnerContainer}>
          <h2 css={sectionTitle}>特点</h2>
          <div css={imgContainer}>
            <div css={imgBox(danar_ft_bg1)}>
              <h4 css={number}>01</h4>
              <h2>搭载碳水化合物计算器</h2>
              <p css={gray}>
                如果每次输注固定的餐前大剂量，患者的早餐、午餐和晚餐的饮食量发生变化时，无法应对血糖的变化。
              </p>
              <img src={arrow} alt="arrow_img" />
              <p>
                根据碳水化合物摄入量的不同，设置不同的大剂量，以应对早餐、午餐、晚餐摄入量发生变化时的血糖变化，形成正常的胰岛素分泌模式。
              </p>
            </div>
            <div css={imgBox(danar_ft_bg2)}>
              <h4 css={number}>02</h4>
              <h2>体内活性胰岛素</h2>
              <p css={gray}>
                如果不考虑皮下脂肪中残留的胰岛素量，就会出现血糖低于目标血糖的情况。
              </p>
              <img src={arrow} alt="arrow_img" />
              <p>考虑患者皮下脂肪中残留的胰岛素量，再进行胰岛素的输注。</p>
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
                  <th>优点</th>
                  <td>泵+血糖测量</td>
                </tr>
                <tr>
                  <th>大小</th>
                  <td>91x45.5x20mm</td>
                </tr>
                <tr>
                  <th>重量</th>
                  <td>61克（含电池）</td>
                </tr>
                <tr>
                  <th>颜色</th>
                  <td>红色，绿色，黑色，白色，灰色</td>
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
                      <li>11) 血糖测定功能</li>
                      <li>12) 血糖测量时间：5秒</li>
                      <li>13) 血糖仪检查：血糖试纸</li>
                      <li>14) 血糖测量方式：电化学式</li>
                      <li>15) 血糖测定范围：20~600mg/dL</li>
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
  gap: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const imgBox = (bg: string) => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px;
  min-height: 513px;
  box-sizing: border-box;

  & h2 {
    margin: 0 0 15px 0;
    color: #fff;
    padding: 50px 0;
    font-weight: bold;
  }

  & p {
    line-height: 1.7em;
    font-size: 0.9em;
    margin: 0;
    color: #f4f4f4;
    padding-top: 50px;
  }

  @media (max-width: 768px) {
  min-height: 250px;

  & h2 {
    margin: 0 0 15px 0;
    color: #fff;
    padding: 20px 0;
    font-weight: bold;
  }

     & p {
    font-size: 0.8em;
    margin: 0;
    padding-top: 20px;
  }
`;

const number = css`
  position: relative;
  padding: 0 0 10px 0;
  color: #2780e3;
  font-weight: bold;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    width: 20px;
    height: 3px;
    background-color: #2780e3;
  }
`;

const gray = css`
  color: rgba(255, 255, 255, 0.7) !important;
  padding-top: 0;
  min-height: 100px;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    min-height: 0px;
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
