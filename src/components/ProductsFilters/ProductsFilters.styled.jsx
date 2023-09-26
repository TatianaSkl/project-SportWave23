import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Form = styled.form`
margin-top: 40px;
@media screen and (min-width: 1440px){
display: flex;
}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
background: ${theme.colors.main};
width: 100%;
border-radius: 12px;
padding: 14px;
border-color: ${theme.colors.white};
color: ${theme.colors.white};
@media screen and (min-width: 1440px){
width: 236px;
}
&:focus {
    outline: none;
    border: 1px solid ${theme.colors.orange};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  background: transparent;
  position: absolute;
  z-index: 1;
  right: 14px;
  bottom: 15%;
  
`;

export const BtnClose = styled.button`
  margin-right: 8px;
`;

export const BtnOpen = styled.button`

`;

export const SelectContainer = styled.div`
display: flex;
margin-top:16px;
@media screen and (min-width: 1440px){
  margin-top:0px;
  margin-left: 16px;
}
`;

export const SelectProduct = styled.div`
width: 43%;
margin-right: 6%;
color: ${theme.colors.white};
background: ${theme.colors.main};
@media screen and (min-width: 1440px){
  width: 192px;
  margin-right: 16px;
}
`;

export const SelectType = styled.div`
width: 51%;
color: ${theme.colors.white};
background: ${theme.colors.main};
@media screen and (min-width: 1440px){
  width: 204px;
}
`;

export const Option = styled.option`

`;

export const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid white',
      borderRadius: '12px',
      padding: '5px',
    }),
    menu: (base) => ({
      ...base,
      right: 0,
      zIndex: 9999,
    }),
    option: (base) => ({
      ...base,
      backgroundColor: 'black',
      color: 'white',
      border:'none',
  }),
    singleValue: (provided) => ({
    ...provided,
    color: 'white',
  }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
};