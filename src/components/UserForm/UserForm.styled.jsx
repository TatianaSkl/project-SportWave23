import styled from '@emotion/styled';
import bg from 'images/bg';
const { chek, chekM } = bg;

export const FormTitle = styled.h2`
  margin-top: 18px;
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    margin-top: 38px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 128.571%;
  }
`;

export const FormAuth = styled.form`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 760px;
    padding-right: 63px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FieldName = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  margin-bottom: 14px;
  outline: none;
  &:hover {
    border-color: ${props => props.theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
    width: 341px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
    margin-right: 14px;
  }
`;

export const FieldEmail = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: rgba(239, 237, 232, 0.6);
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    width: 341px;
    height: 52px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const WrapperM = styled.div`
  display: flex;
  & > label:not(:last-of-type) {
    margin-right: 9px;
    @media screen and (min-width: 768px) {
      margin-right: 8px;
    }
  }
`;

export const FormLabel = styled.label`
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 128.571%;
  }
`;

export const InputField = styled.input`
  width: 160px;
  height: 46px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  font-size: 14px;
  line-height: 128.571%;
  margin-bottom: 14px;
  outline: none;
  &:hover {
    border-color: ${props => props.theme.colors.orange};
  }
  @media screen and (max-width: 767px) {
    &[name='height'] {
      margin-right: 14px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 52px;
    margin-bottom: 0;
    margin-right: 14px;
    width: 163px;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const Input = styled.input`
  width: 160px;
  height: 52px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  &:hover {
    border-color: ${props => props.theme.colors.orange};
  }
  &[name='desiredWeight'] {
    margin-right: 14px;
  }
  &[name='birthday'] {
    margin-top: 22px;
  }
  @media screen and (min-width: 768px) {
    &[name='desiredWeight'] {
      width: 140px;
    }
    &[name='birthday'] {
      margin-top: 26px;
      width: 187px;
    }
  }
`;

export const WrapperRadioFlex = styled.div`
  display: flex;
  & > :first-of-type {
    margin-right: 20px;
  }
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    & > :first-of-type {
      margin-right: 32px;
    }
  }
`;

export const WrapperRadioLevelActivity = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
`;

export const TitleRadio = styled.p`
  margin-top: 20px;
  margin-bottom: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 12px;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 128.571%;
  }
`;

export const FielRadio = styled.input`
  opacity: 0;
  position: absolute;
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  &:checked + label::before {
    background-image: url(${chekM});
    border: none;
    @media screen and (min-width: 768px) {
      background-image: url(${chek});
    }
  }
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 128.571%;
  cursor: pointer;
  &::before {
    content: ' ';
    margin-right: 9px;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  bottom: 25%;
  left: 80%;
  width: 18px;
  height: 18px;
`;
