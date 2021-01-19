import Styled from 'vue-styled-components';
import { Card } from 'ant-design-vue';

const BtnWraper = theme => `
    .ant-card-head {
      display: flex !important;
      justify-content: space-evenly !important;
      .ant-card-head-wrapper{
        width: 100% !important;
      }
      .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line{
        width: 100% !important;
        display: block !important;
      }
      .ant-tabs-nav-scroll {
        display: flex !important;
        justify-content: flex-end !important;
      }
      .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
        display: none !important !important;
      }
      .ant-tabs-nav .ant-tabs-tab {
        border-radius: 2px !important;
        height: 30px !important;
        margin: 0px !important;
        ${theme.rtl ? 'margin-right' : 'margin-left'}: -1px !important;
        display: inline-flex !important;
        align-items: center !important;
        border: 1px solid ${theme['border-color-base']} !important;
        background: #fff !important;
        span svg {
          ${theme.rtl ? 'padding-right' : 'padding-left'}: 5px !important;
        }
      }
      .ant-tabs-nav .ant-tabs-tab-active {
        font-weight: 500 !important;
        border: 1px solid ${theme['primary-color']} !important;
        background: ${theme['primary-color']} !important;
        color: #fff !important;
        border-radius: 2px !important;
        height: 30px !important;
        margin: 0px !important;
        display: inline-flex !important;
        align-items: center !important;
      }
      .ant-tabs-bar {
        border: none !important;
      }
      .ant-tabs-nav-wrap {
        margin-bottom: 0px !important;
        overflow: hidden !important;
    }
    }
    .ant-card-head .ant-tabs.ant-tabs-top.ant-card-head-tabs.ant-tabs-large.ant-tabs-line {
      width: 100% !important;
      display: block !important;
      justify-content: flex-end !important;
      height: 73px !important;
      padding-top: 8px !important;
  }
`;
const props = ["isbutton", "bodypadding"];

const CardFrame = Styled(Card, props)`
  ${({ isbutton, theme }) => isbutton && BtnWraper(theme)}

  margin-bottom: 25px !important;
  .ant-card-head{
    border-color: #F1F2F6 !important;
  }
  .ant-card-head .ant-card-head-title {
    padding: 18px 0 !important;
  }
  .ant-card-head-title .ant-page-header-heading-title{
    font-weight: 500 !important;
  }
  .ant-card-body{
    padding: ${({ bodypadding }) => (bodypadding ? `${bodypadding} !important` : '25px')} !important;
    table{
      .ant-tag{
        line-height: 18px !important;
        border: 0 none !important;
        text-transform: uppercase !important;
        font-size: 10px !important;
        color: #fff !important;
        &.early{
          background: ${({ theme }) => theme['primary-color']} !important;
        }
        &.late{
          background: ${({ theme }) => theme['warning-color']} !important;
        }
        &.complete{
          background: ${({ theme }) => theme['success-color']} !important;
        }
        &.progress{
          background: ${({ theme }) => theme['danger-color']} !important;
        }
      }
    }
  }
  .ant-card.ant-card-bordered {
      border-radius: 5px !important;
      overflow: hidden !important;
      border: none !important;
  }
  .custom-label {
    font-size: 13px !important;
    color: #868eae !important;
    display: inline-flex !important;
    align-items: center !important;
  }
  .custom-label:not(:last-child) {
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')} : 20px !important;
  }

  .custom-label span {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    ${({ theme }) => (theme.rtl ? ' margin-left' : ' margin-right')}: 7px !important;
  }
  

  .ant-card-extra .ant-dropdown-trigger {
    line-height: 0;
    order: 1;
    ${({ theme }) => (!theme.rtl ? ' margin-left' : ' margin-right')}: 20px !important;
  }

  .growth-downward h1 sub,
  .growth-upward h1 sub {
    font-size: 14px;
    font-weight: 600;
    bottom: 0;
    ${({ theme }) => (!theme.rtl ? ' left' : ' right')}: 5px;
  }
 
`;

export { CardFrame };
