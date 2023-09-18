import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormAuth = styled(Form)`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 364px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const FormField = styled(Field)`
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  &::placeholder {
    font-size: 14px;
    line-height: 128.571%;
    color: ${props => props.theme.colors.normal};
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }
  &:not(:last-child) {
    margin-bottom: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
