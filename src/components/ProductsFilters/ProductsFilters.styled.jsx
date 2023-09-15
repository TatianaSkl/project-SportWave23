import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Form = styled.form`
margin-top: 40px;
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


&:focus {
    outline: none;
    border: 1px solid ${theme.colors.orange};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  background: transparent;
  /* border: none; */
  position: absolute;
  z-index: 1;
  right: 14px;
  bottom: 15%;
  
`;

export const BtnClose = styled.button`
  
`;

export const BtnOpen = styled.button`

`;

export const SelectContainer = styled.div`
display: flex;
margin-top:16px;
`;

export const SelectProduct = styled.div`
width: 43%;
margin-right: 6%;
color: ${theme.colors.white};
background: ${theme.colors.main};

`;

export const SelectType = styled.div`
width: 51%;
color: ${theme.colors.white};
background: ${theme.colors.main};
`;

export const Option = styled.option`

`;