/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductLayout from './ProductLayout';
import Notice from '../../components/product/Notice';
import Intro from '../../components/product/Intro';
import { PRODUCT_DANA_IIS } from '../../constants';
import IIS_bg1 from '../../assets/images/sub/product/IIS_ft_bg01.jpg';
import IIS_bg2 from '../../assets/images/sub/product/IIS_ft_bg02.jpg';
import IIS_bg3 from '../../assets/images/sub/product/IIS_ft_bg03.jpg';
import IIS_bg4 from '../../assets/images/sub/product/IIS_ft_bg04.jpg';
import { Helmet } from 'react-helmet';

export default function DanaIIs() {
  return (
    <ProductLayout>
      <Helmet>
        <title>Dana IIS</title>
      </Helmet>
      <Notice />
      <Intro product={PRODUCT_DANA_IIS} />
      <section css={sectionContainer}>
        <div css={sectionColumnInnerContainer}>
          <h2 css={sectionTitle}>特点</h2>
          <div css={imgContainer}>
            <div css={item(false)}>
              <div css={imgBox(IIS_bg1, false, '#1f1e27')}>
                <h2>Reliable</h2>
              </div>
              <div css={contentBox(false)}>
                <h2>Reliable</h2>
                <h4>
                  胰岛素泵是与生命息息相关的机器，因此稳定性比任何性能都重要。
                </h4>
                <p>
                  值得信赖的品质！这是一台昂贵的精密机器，用户很难自己做出判断。在这种情况下，接受专家的检查和确认是更可靠的方法。因此，最好确认是否获得专业的认证机构的认证。如果获得了美国FDA的认证或欧洲CE，在选择产品时不会有困难。
                </p>
              </div>
            </div>
            <div css={item(true)}>
              <div css={imgBox(IIS_bg2, true, '#f4f4f4')}>
                <h2>Easy</h2>
              </div>
              <div css={contentBox(true)}>
                <h4>方便使用的胰岛素泵 ，使用Dana IIS轻松管理糖尿病。</h4>
                <p>使用方便！基于图形图标，易于学习。</p>
              </div>
            </div>
            <div css={item(false)}>
              <div css={imgBox(IIS_bg3, false, '#1f1e27')}>
                <h2>Affordable</h2>
              </div>
              <div css={contentBox(false)}>
                <h4>不要只担心胰岛素泵治疗的初期费用高。</h4>
                <p>
                  合理的价格！众所周知，胰岛素泵初期的费用相当昂贵。购买胰岛素泵的费用较贵，在使用过程中会有维护成本，包括用泵输注的速效胰岛素和耗材、电池等。除此之外，用胰岛素笔注射和口服药物会导致血糖波动较大人而增加住院治疗的医疗费用。
                </p>
              </div>
            </div>
            <div css={item(true)}>
              <div css={imgBox(IIS_bg4, true, '#f4f4f4')}>
                <h2>Light and Small</h2>
              </div>
              <div css={contentBox(true)}>
                <h4>与小巧轻便的Dana IIS一起享受自由和隐私保护。</h4>
                <p>
                  不影响日常生活,小巧便利！最初开发的胰岛素泵只有公文包大小，携带起来很不方便，但随着技术的不断发展，它变得小到可以一手拿着。都可以装在口袋里或戴在腰带上，几乎不会给日常活动带来不便，也不容易被他人看到。
                </p>
              </div>
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
  box-sizing: border-box;
`;

const item = (reverse: boolean) => css`
  display: flex;
  justify-content: center;
  flex-direction: ${reverse ? 'row-reverse' : 'row'};
  height: 400px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 100%;
    min-height: 250px;
  }
`;

const imgBox = (bg: string, reverse: boolean, bgColor: string) => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  box-sizing: border-box;

  & h2 {
    position: relative;
    margin: 0 0 15px 0;
    color: #fff;
    font-weight: bold;
  }

  & h2:after {
    content: '';
    position: absolute;
    top: -25px;
    left: 50%;
    margin-left: -2px;
    width: 3px;
    height: 15px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #00baff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const contentBox = (reverse: boolean) => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
  background-color: ${reverse ? '#f4f4f4' : '#1f1e27'};

  & h4 {
    color: ${reverse ? '#333' : '#2780e3'};
    line-height: 1.5em;
    font-weight: bold;
  }

  & p {
    margin: 15px 0 0 0;
    font-size: 0.9em;
    line-height: 1.7em;
    color: ${reverse ? '#333' : '#fff'};
  }

  & h2 {
    display: none;
    position: relative;
    margin: 0 0 15px 0;
    color: #fff;
    font-weight: bold;
  }

  & h2:after {
    content: '';
    position: absolute;
    top: -25px;
    left: 50%;
    margin-left: -2px;
    width: 3px;
    height: 15px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: #00baff;
  }

  @media (max-width: 768px) {
    & h2 {
      display: flex;
      justify-content: center;
    }
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
