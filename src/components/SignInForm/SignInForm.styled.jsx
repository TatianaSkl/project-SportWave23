import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

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

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  &.error input {
    border-color: ${props => props.theme.colors.error};
  }
  &.success input {
    border-color: ${props => props.theme.colors.success};
  }
  &.success svg[data-status='success'] {
    display: block;
  }
  &.error svg[data-status='error'] {
    display: block;
  }
  &:not(:last-child):not(.error):not(.success) {
    margin-bottom: 14px;
  }
  @media screen and (min-width: 768px) {
    &:not(:last-child):not(.error):not(.success) {
      margin-bottom: 16px;
    }
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
  margin-bottom: 2px;
  outline: none;
  &:hover {
    border-color: ${props => props.theme.colors.orange};
  }
  &::placeholder {
    font-size: 14px;
    line-height: 128.571%;
    color: ${props => props.theme.colors.normal};
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 4px;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  margin-left: 4px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: ${props => props.theme.colors.error};
  line-height: 1.16;
`;

export const SuccessText = styled.div`
  margin-left: 4px;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.12px;
  color: ${props => props.theme.colors.success};
  line-height: 1.16;
`;

export const ErrorIcon = styled(AiFillCheckCircle)`
  display: none;
  width: 16px;
  height: 16px;
  fill: ${props => props.theme.colors.error};
`;

export const SuccessIcon = styled(AiFillCheckCircle)`
  display: none;
  width: 16px;
  height: 16px;
  fill: ${props => props.theme.colors.success};
`;

export const IconBsEye = styled(BsEye)`
  width: 20px;
  height: 20px;
`;

export const IconBsEyeSlash = styled(BsEyeSlash)`
  width: 20px;
  height: 20px;
`;

export const BottonEye = styled.button`
  position: absolute;
  top: 15px;
  left: 90%;
`;
