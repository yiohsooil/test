/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductLayout from './ProductLayout';
import Notice from '../../components/product/Notice';
import { PRODUCT_DANA_RS } from '../../constants';
import Intro from '../../components/product/Intro';
import pump_img_1 from '../../assets/images/sub/product/pump_img1.jpg';
import pump_img_2 from '../../assets/images/sub/product/pump_img2.jpg';
import pump_img_3 from '../../assets/images/sub/product/pump_img3.jpg';
import pump_img_4 from '../../assets/images/sub/product/pump_img4.jpg';
import pump_img_5 from '../../assets/images/sub/product/pump_img5.jpg';
import { Helmet } from 'react-helmet';

export default function DanaRs() {
  return (
    <ProductLayout>
      <Helmet>
        <title>Dana RS</title>
      </Helmet>
      <Notice />
      <Intro product={PRODUCT_DANA_RS} app={true} />
      <section css={sectionContainer}>
        <div css={sectionColumnInnerContainer}>
          <h2 css={sectionTitle}>特点</h2>
          <div css={imgContainer}>
            <div css={imgBox}>
              <div css={ImgItem_1(pump_img_1)}>
                <p>比名片还小的超小型、超轻胰岛素泵！</p>
                <p>
                  尺寸：91X45.5X20mm <br />
                  重量：62克（含电池）
                </p>
              </div>
              <div css={ImgItem_2(pump_img_2)}>
                <p>每隔4分钟自动输注最低基础量0.04u/h</p>
              </div>
            </div>
            <div css={imgBox}>
              <div css={ImgItem_3(pump_img_3)}>
                <p>加强了安全系统</p>
              </div>
              <div css={ImgItem_4(pump_img_4)}>
                <p>搭载最新蓝牙（BLE）技术！</p>
                <p>电池续航时间更长，连接速度更快</p>
              </div>
            </div>
            <div css={ImgItem_5(pump_img_5)}>
              <p>男女老少都可以轻松使用的UI</p>
              <p>通过了美国“Wiklund UL”的易用性测试</p>
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
                  <td>智能泵</td>
                </tr>
                <tr>
                  <th>大小</th>
                  <td>91x45.5x20mm</td>
                </tr>
                <tr>
                  <th>重量</th>
                  <td>62克（含电池）</td>
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
                      <li>11) 防水功能：IP28</li>
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const imgItem = (bg: string) => css`
  position: relative;
  height: 360px;
  background-image: url(${bg});
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const ImgItem_text = css`
  display: flex;
  padding: 30px;
  margin-bottom: 10px;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 18px;
  color: #0085dd;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ImgItem_1 = (bg: string) => css`
  ${imgItem(bg)};
  width: 70%;
  background-position: center right;

  & p {
    ${ImgItem_text}
    padding-bottom: 10px;
    margin-bottom: 0;
  }

  & p:last-child {
    padding-top: 0;
    font-size: 15px;
    color: #000;
    font-weight: bold;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    // background-position: center;
  }
`;

const ImgItem_2 = (bg: string) => css`
  ${imgItem(bg)};
  width: 30%;
  background-position: center left;

  & p {
    ${ImgItem_text}
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgItem_3 = (bg: string) => css`
  ${imgItem(bg)};
  width: 30%;
  background-position: center right;

  & p {
    ${ImgItem_text}
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgItem_4 = (bg: string) => css`
  ${imgItem(bg)};
  width: 70%;
  background-position: center left;

  & p {
    ${ImgItem_text}
    padding-bottom: 10px;
    margin-bottom: 0;
  }

  & p:last-of-type {
    padding-top: 0;
    font-size: 15px;
    color: #000;
    font-weight: bold;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgItem_5 = (bg: string) => css`
  ${imgItem(bg)};
  width: 100%;
  background-position: center left;

  & p {
    ${ImgItem_text}
    padding-bottom: 10px;
    margin-bottom: 0;
  }

  & p:last-of-type {
    padding-top: 0;
    font-size: 15px;
    color: #000;
    font-weight: bold;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    background-position: center 20%;
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
