import styled from '@emotion/styled';

// @media screen and (min-width: 768px)
// @media screen and (min-width: 1440px)

export const FormContainer = styled.div`
  display: block;
`;

export const FormSection = styled.div`
  /* padding: 20px; */
`;

export const FormGroupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    max-width: 554px;
    margin-top: 54px;
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
  input[type='number']::-webkit-outer-spin-button {
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
    max-width: 150px;
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

////////////////////////////////

export const BloodSexContainer = styled.div`
  display: flex;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const BloodSex = styled.label`
  color: #efede8;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BloodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 65px;
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
  margin-bottom: 10px;
`;

////////

export const BackButton = styled.button`
  color: rgba(239, 237, 232, 0.6);
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;

export const NextButton = styled.button`
  color: #efede8;
  font-size: 16px;
  line-height: 18px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    line-height: 24px;
  }
`;

export const GoBackContainer = styled.div`
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
