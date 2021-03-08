import Styled from 'vue3-styled-components';
import { Button } from 'ant-design-vue';

const ButtonGroup = Button.Group;
const props = [
    "type",
    "shape",
    "icon",
    "size",
    "outlined",
    "ghost",
    "transparent",
    "raised",
    "squared",
    "color",
    "social",
    "loading",
  ];
const outline = (theme, type) => {
  return `
        background: transparent !important;
        border: 1px ${type !== 'dash' ? "solid" : "dashed"} ${type !== 'light' ? theme[`${type}-color`] : theme['border-color-normal']} !important;
        color: ${type !== 'default' && theme[`${type}-color`]} !important;
  
        &:hover, &:focus {
          background: transparent !important;
          border: 1px ${type !== 'dash' ? "solid" : "dashed"} ${type !== 'default' && theme[`${type}-hover`]} !important;
          color: ${type !== 'default' && theme[`${type}-hover`]} !important;
        }
    `;
};

const ghosts = theme => {
  return `
          background: transparent !important;
          border: 1px solid ${theme['border-color-normal']} !important;
          color: ${theme['border-color-normal']} !important;
            
          &:hover, &:focus {
              background: #ffffff50 !important;
              border: 1px solid transparent !important;
              color: ${theme['border-color-normal']} !important;
          }
      `;
};

const transparents = (theme, type) => {    
  return `
        background: ${type !== 'default' && theme[`${type}-color`]}15 !important;
        border-width: 0px !important;
        color: ${type !== 'default' && theme[`${type}-color`]} !important;
        &:hover, &:focus {
            background: ${type !== 'default' && theme[`${type}-hover`]}15 !important;
            border-width: 0px !important;
            color: ${type !== 'default' && theme[`${type}-hover`]} !important; 
        }
    `;
};

const raise = (theme, type) => {
  return `
        box-shadow: 0 10px 15px ${type !== 'white' ? theme[`${type}-color`] : '#9299B8'}20 !important;
    `;
};

const square = (theme, type) => `
      background: ${type !== 'default' && theme[`${type}-color`]} !important;
      border: 1px solid ${type !== 'default' ? theme[`${type}-color`] : theme['disabled-color']} !important;
      color: ${type !== 'default' && '#ffffff'} !important;
      border-radius: 0px !important;
      padding: 0px 15px !important;
  
      &:hover, &:focus {
          background: ${type !== 'default' && theme[`${type}-hover`]} !important;
          border: 1px solid ${type !== 'default' && theme[`${type}-hover`]} !important;
          color: ${type !== 'default' && '#ffffff'} !important;
      }
  `;

const squareOutline = (theme, type) => `
      background: transparent !important;
      border: 1px ${type !== 'dash' ? "solid" : "dashed"} ${type !== 'default' ? theme[`${type}-color`] : theme['disabled-color']} !important;
      color: ${type !== 'default' && theme[`${type}-color`]} !important;
      border-radius: 0px !important;
      padding: 0px 15px !important;
      &:hover, &:focus {
          background: ${type !== 'default' && theme[`${type}-hover`]} !important;
          border: 1px solid ${type !== 'default' && theme[`${type}-hover`]} !important;
          color: ${type !== 'default' && '#ffffff'} !important;
      }
  `;

const socialButton = (color, shape) => `
      background: ${color} !important;
      background: ${color} !important;
      border: 1px solid ${color} !important;
      color: #ffffff !important;
      border-radius: ${!shape ? '4px' : '40px'} !important;
      padding: 0px 12px !important;
      display: inline-flex !important;
      align-items: center !important;
      span {
          padding-left: 5px !important;
      }
      &:hover, &:focus {
          background: ${color}90 !important;
          border: 1px solid ${color}90 !important;
          color: #ffffff !important;
      }
  `;

const ButtonStyled = Styled(Button, props)`

    background: ${({ type, theme }) => type !== 'default' && theme[`${type}-color`]+ " !important"};
    border-width: 0px !important;
    border-style: ${({ type }) => (type !== 'dash' ? 'solid' : 'dashed !important')};
    color: ${({ type }) => (type !== 'default' && type !== 'white') ? '#ffffff !important' : '#5A5F7D !important'};
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: ${({ shape }) => (!shape ? '4px' : '40px')} !important;
    padding: 0px 20.5px !important;
    height: ${({ size, theme }) => (size !== 'default' ? theme[`btn-height-${size}`] : '42px !important')};
    font-weight: 500 !important;
    box-shadow: 0 0 !important;
    &:hover, &:focus {
        background: ${({ type, theme }) => (type !== 'default' && type !=='white') && theme[`${type}-hover`]+ " !important"};
        color: ${({ type }) => type !== 'default' && type !=='white' ? '#ffffff !important' : '#5A5F7D !important'};
    }
    i,
    svg,
    img{
        width: 16px;
        height: 16px;
        +span{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }

    ${({ transparent, theme, type }) => transparent && transparents(theme, type)};
    ${({ outlined, theme, type }) => outlined && outline(theme, type)};
    ${({ ghost, theme }) => ghost && ghosts(theme)};
    ${({ raised, theme, type }) => raised && raise(theme, type)};
    ${({ squared, theme, type }) => squared && square(theme, type)};
    ${({ squared, outlined, theme, type }) => squared && outlined && squareOutline(theme, type)};
    ${({ social, color, shape }) => social && socialButton(color, shape)};
`;

const ButtonStyledGroup = Styled(ButtonGroup)`
    >.ant-btn:first-child{
        border-top-left-radius: 3px !important;
        border-bottom-left-radius: 3px !important;
    }
    button {
        margin: 0px !important;
        padding: 0 10.75px !important;
        height: 30px !important;
        font-size: 12px !important;
        font-weight: 500 !important;        
    }
    .ant-btn-light:hover{
        background: #F4F5F7 !important;
    }
`;

export { ButtonStyled, ButtonStyledGroup };
