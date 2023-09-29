import styled from '@emotion/styled';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// @media screen and (min-width: 768px)
// @media screen and (min-width: 1440px)

export const FormContainer = styled.form`
  display: block;
`;

export const FormSection = styled.div`
  /* padding: 20px; */
`;

export const FormGroupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 22px;
  margin-bottom: -14px;
  margin-right: -14px;
  @media screen and (min-width: 768px) {
    max-width: 554px;
    margin-bottom: 0;
    margin-right: 0;
  }
  @media screen and (min-width: 1440px) {
    max-width: 527px;
  }
`;

// export const StyledLabel = styled.label``;

export const FormGroup = styled.div`
  position: relative;
  display: block;
  margin-bottom: 14px;
  margin-right: 14px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: top 0.2s, left 0.2s, transform 0.2s;
    color: rgba(239, 237, 232, 0.6);
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label,
  input[type='date']:focus + label,
  input[type='date']:not(:placeholder-shown) + label {
    color: rgba(239, 237, 232, 0.6);
    font-size: 12px;
    line-height: 18px;
    transform: translateY(-44px);
    @media screen and (min-width: 768px) {
      &[name='birthday'] {
        margin-top: 26px;
        width: 187px;
      }
      font-size: 14px;
      transform: translateY(-48px);
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='date']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  input[type='number']:focus,
  input[type='date']:focus,
  select:focus {
    border-radius: 12px;
    border: 1px solid #e6533c;
  }

  input[type='number']:active,
  input[type='date']:active,
  select:active {
    border-radius: 12px;
    border: 1px solid #e6533c;
  }

  input[type='number'],
  input[type='date'],
  select {
    color: rgba(239, 237, 232, 0.6);

    font-size: 14px;
    line-height: 18px;
    padding: 14px 14px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    width: 155px;
    background-color: transparent;
    outline: none;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
    /* @media screen and (min-width: 1440px) {
      padding: 14px 112px 14px 14px;
    } */
  }

  div {
    /* display: none; */
    position: absolute;
    font-size: 12px;
    line-height: 15px;
    color: #e6533c;
  }
`;
export const ButtonIcon = styled.button`
  position: absolute;
  z-index: -1;
  bottom: 35%;
  left: 80%;
  width: 18px;
  height: 18px;
`;
////////////////////////////////

export const BloodSexContainer = styled.div`
  display: flex;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const BloodSex = styled.label`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BloodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 64px;
`;

export const SexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const LevelActivityText = styled.label`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const RadioLabel = styled.label`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

////////

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  line-height: 18px;
  margin-right: 16px;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 16px;
  }
`;
export const IconArrowR = styled(AiOutlineArrowRight)`
  color: ${props => props.theme.colors.orange};
  width: 20px;
  height: 20px;
  margin-left: 4px;
`;
export const IconArrowL = styled(AiOutlineArrowLeft)`
  color: ${props => props.theme.colors.orange};
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #efede8;
  line-height: 18px;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 16px;
  }
`;

export const BackButtonT = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(239, 237, 232, 0.6);
  font-size: 14px;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 16px;
  }
`;

export const PictureBg = styled.picture`
  position: absolute;
  top: 37.7%;
  left: 30%;
  z-index: -1;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 22%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 670px;
    top: 0;
    left: 53.5%;
    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);
  }
`;

export const PictureBgT = styled.picture`
  position: absolute;
  top: 37.7%;
  left: 30%;
  z-index: -1;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 22%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 670px;
    top: 0;
    left: 53.5%;
    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);
  }
`;
export const PictureBgW = styled.picture`
  position: absolute;
  top: 37.7%;
  left: 30%;
  z-index: -1;
  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%);
  @media screen and (min-width: 768px) {
    width: 100%;
    top: 22%;
    left: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 670px;
    top: 0;
    left: 53.5%;
    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%);
  }
`;

export const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 65px;
  }
`;
////////////////

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

export const FormBtn = styled.button`
  margin-right: 16px;
  padding: 12px 40px;
  border-radius: 12px;
  background: ${props => props.theme.colors.orange};
  font-weight: 500;
  line-height: 112.5%;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.regular};
    background-color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 120%;
  }
`;
