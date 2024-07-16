/** @jsxImportSource @emotion/react */
import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';

const containerStyle = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    width: 1170px;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 992px) {
      width: 100%;
      max-width: 750px;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .col-12 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }
  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
  }
  .ls2 {
    letter-spacing: 0.2em;
  }
  .lh6 {
    line-height: 1.6;
  }
  .bs5 {
    font-weight: 500;
  }
  .ts4 {
    font-size: 1.4rem;
  }
  .emphasis {
    font-style: italic;
  }
`;

const Privacy = () => {
  return (
    <main className="px-0" css={containerStyle}>
      <Helmet>
        <title>anyDana隐私政策</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div className="card">
              <div className="card-body px-0 px-sm-3" id="content">
                <b>
                  <span
                    style={{
                      fontSize: 'x-large',
                      textAlign: 'center',
                      width: '100%',
                      display: 'block',
                    }}
                  >
                    anyDana隐私政策
                  </span>
                </b>
                <br />
                <br />
                <br />
                <br />
                <p className="ls2 lh6 bs5 ts4">
                  <em className="emphasis">
                    秀逸开发有限公司（以下简称“公司”）
                  </em>
                  非常重视使用anyDana用户的隐私和个人信息保护。
                </p>
                <p className="ls2 lh6 bs5 ts4">
                  <em className="emphasis">“公司”</em>{' '}
                  公司将通过本隐私政策告知您您提供的个人信息的用途和方式，以及公司为保护个人信息采取的措施。
                </p>
                <p className="ls2">
                  ○
                  如果修改本方针，将通过网站公告事项（或通过书面、电子邮件等方式进行个别公告）通知用户。
                </p>
                <br />
                <p className="lh6 bs4">
                  <strong>
                    一、收集的个人信息的项目及收集方法{' '}
                    <em className="emphasis">“公司”</em>
                    公司收集用户的个人信息，以便用户使用anyDana服务，具体项目如下：
                  </strong>
                </p>
                <p className="ls2">（1）必填项：</p>
                <p className="ls2">
                  敏感信息（胰岛素泵使用履历（餐前大剂量、基础量、血糖、碳水化合物的量）
                </p>
                <br />
                <p className="ls2">
                  （2）用户在注册会员时同意收集和使用上述个人信息，公司才可以收集信息。用户可能不同意收集和使用上述信息，但如果您不同意收集和使用anyDana所需的必填信息和敏感信息（必需），则可能会限制使用anyDana的一些功能。（应用服务不会将个人信息上传到服务器或云服务器。）
                </p>
                <br />
                <br />
                <br />
                <p className="lh6 bs4">
                  <strong>二、个人信息收集和使用目的</strong>
                  <br />
                </p>
                <p className="ls2">
                  （1）胰岛素泵使履历（餐前大剂量、基础量、血糖、碳水化合物值）
                  <br /> 用于anyDana提供用户服务。
                </p>
                <br />
                <p className="ls2">
                  （2）可以在anyDana应用程序中查看胰岛素泵的输注历史记录
                  <br />
                </p>
                <br />
                <p className="ls2">
                  （3）查看胰岛素泵使用历史记录（餐前大剂量、基础量、血糖、碳水化合物值）以帮助确认胰岛素输注
                  <br />
                </p>
                <br />
                <br />
                <br />
                <p className="lh6 bs4">
                  <strong>三、个人信息的持有及使用期限</strong>
                  <br />
                  <br />{' '}
                  公司不会收集用户的个人信息，用户提供的个人信心仅在anyDana应用程序内使用。
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <p className="lh6 bs4">
                  <strong>四、个人信息的销毁程序及销毁方法</strong>
                  <br />
                  <br /> 销毁程序
                </p>
                <br /> 删除应用程序将删除应用程序存储的所有信息。
                <br />
                <br /> 销毁方法
                <br /> 删除应用程序将删除应用程序存储的所有信息。
                <br />
                <p className="lh6 bs4">
                  <strong>五、个人信息的阅览和删除处理</strong>
                  <br />
                  <br /> 删除应用程序将删除应用程序存储的所有信息。
                </p>
                <p>如果不想使用服务，删除应用程序即可。</p>
                <br />
                <p className="lh6 bs4">
                  <strong>六、技术、管理措施</strong>
                </p>
                <p className="ls2">
                  不会将个人信息收集到公司服务器或云服务器中，只在应用程序内部使用，因此删除应用程序将立即销毁所有信息。
                  <br />
                </p>
                <br />
                <br />
                <p className="lh6 bs4">
                  <strong>七、个人信息保护咨询处 </strong>
                  <br />
                  <br />{' '}
                  如果您对个人信息有意见，请联系客服中心（电子邮件：dana@golddana.com）如果您联系我们，我们会立即采取措施并通知您处理结果。
                </p>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
