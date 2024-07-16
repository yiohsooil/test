/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import ProductLayout from './ProductLayout';
import Intro from '../../components/product/Intro';
import { PRODUCT_ANY_DANA } from '../../constants';
import { Helmet } from 'react-helmet';

export default function Anydana() {
  return (
    <ProductLayout>
      <Helmet>
        <title>AnyDana 应用程序</title>
      </Helmet>
      <Intro product={PRODUCT_ANY_DANA} isAnyDana={true} app={true} />
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <div css={sectionTitle}>
            <h2>技术参数</h2>
          </div>
          <div css={sectionContent}>
            <p>
              AnyDANA是一款智能手机应用程序。该应用程序可连接有蓝牙功能的的DANA
              Diabecare胰岛素泵，用于操作和控制胰岛素泵。通过手机的大屏幕更加方便的对胰岛素泵进行操作。
            </p>
            <h5>AnyDANA的3大功能</h5>
            <ul>
              <li>• 可连接有蓝牙功能的 DANA Diabecare胰岛素泵使用。</li>
              <li>• 可查看胰岛素泵上储存的数据和信息。</li>
              <li>
                •
                读取用户正在使用中的胰岛素泵数据，并通过无线网络自动传送到指定服务器。{' '}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section css={sectionContainer}>
        <div css={sectionInnerContainer}>
          <div css={sectionTitle}>
            <h2>安全信息</h2>
          </div>
          <div css={sectionContent}>
            <h5>用途</h5>
            <p css={paddingLeft}>
              DANA
              Diabecare胰岛素泵和AnyDANA应用程序旨在皮下注射胰岛素治疗糖尿病。
            </p>
            <h5 css={paddingTop}>禁忌</h5>
            <p css={paddingLeft}>
              胰岛素泵治疗不建议给有视觉或听觉障碍的人使用，他们无法识别泵信号和报警。
            </p>
            <h5 css={paddingTop}>警告</h5>
            <p css={paddingLeft}>
              该软件必须在专业人员的监督下使用。在使用AnyDANA应用程序之前，您必须接受经认证的糖尿病培训师或胰岛素泵培训师的培训。
            </p>
            <h5 css={paddingTop}>注意事项</h5>
            <ul>
              <li css={paddingLeft}>
                1. AnyDANA可从Google Play商店或App
                Store下载。请在可兼容的设备上安装AnyDANA。必要时或Google
                Play商店/App商店要求更新时，请及时更新软件。
              </li>
              <li css={paddingLeft}>
                2.
                在使用本软件之前，必须将胰岛素泵与装有AnyDANA移动设备配对。在初始配对之后，在不更换移动设备的情况下，不需要重复配对。
              </li>
              <li css={paddingLeft}>
                3.
                为了使用过程中的连接稳定性，胰岛素泵和装置必须在保持在5米范围内。并且确保移动设备的蓝牙功能正常工作。
              </li>
              <li css={paddingLeft}>
                4.
                为了安全使用，AnyDANA需要登陆密码。请注意不要将密码告诉他人并且记住此密码。
              </li>
              <li css={paddingLeft}>
                5. 如果AnyDANA应用程序出现问题，请与当地胰岛素泵售后服务商联系。
              </li>
              <li css={paddingLeft}>
                6.
                AnyDANA应用程序用户在使用应用程序之前，必须学习充分的胰岛素泵使用知识。如果移动设备电池电量不足或出现蓝牙错误，则必须通过胰岛素泵菜单中重新开启胰岛素泵功能，并确保胰岛素泵的正常使用。
              </li>
              <li css={paddingLeft}>
                7. 为了能识别应用程序的警报声，用户需要有良好的听觉和视觉。
              </li>
              <li css={paddingLeft}>8. 不适用应用程序时请关闭应用程序。</li>
              <li css={paddingLeft}>9. 配置要求</li>
              <div css={[tableContainer, paddingLeft]}>
                <table>
                  <tbody>
                    <tr>
                      <th scope="row" rowSpan={2} css={tableHeader}>
                        环境
                      </th>
                      <th scope="row" colSpan={2}>
                        推荐配置
                      </th>
                    </tr>
                    <tr>
                      <th scope="row">AnyDANA-A</th>
                      <th scope="row">AnyDANA-i</th>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        应用版本
                      </th>
                      <td>版本3.0.X</td>
                      <td>版本3.0.X</td>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        OS
                      </th>
                      <td>安卓4.3（Jelly bean）或更高版本</td>
                      <td>iOS 9.0或更高版本</td>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        分辨率
                      </th>
                      <td>xhdip、xxhdip、xxhdip或更高版本</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        内存
                      </th>
                      <td>512MB以上</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        接口
                      </th>
                      <td colSpan={2}>触摸屏</td>
                    </tr>
                    <tr>
                      <th scope="row" css={tableHeader}>
                        通讯
                      </th>
                      <td colSpan={2}>蓝牙</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p css={[paddingLeft, paddingTop]}>
                ※ SOOIL使用三星Galaxy智能手机和iOS 9.0+进行了软件测试。
              </p>
            </ul>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
}

const sectionContainer = css`
  width: 100%;
  padding: 50px 0px;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
`;

const sectionInnerContainer = css`
  display: flex;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const sectionTitle = css`
  width: 25%;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 0 15px 0;
  font-weight: bold;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const sectionContent = css`
  width: 75%;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 25px;
  margin: 0 0 15px 0;
  box-sizing: border-box;

  & p {
    margin: 0;
    line-height: 1.7;
    padding-bottom: 12.5px;
  }

  & h5 {
    padding-bottom: 12.5px;
    font-weight: bold;
  }

  & ul {
    li {
      line-height: 1.4;
      color: #333333;
      padding-bottom: 12.5px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const paddingLeft = css`
  padding-left: 25px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;

const paddingTop = css`
  padding-top: 12.5px;
`;

const tableContainer = css`
  flex: 1;
  box-sizing: border-box;

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
      line-height: 1.4;
      vertical-align: top;
      border-top: 1px solid #dddddd;
      font-weight: bold;
    }

    tbody tr td {
      padding: 15px;
      line-height: 1.42857143;
      vertical-align: top;
      text-align: center;
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

const tableHeader = css`
  width: 130px;
  text-align: left;
`;
