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

export const FormGroup = styled.div`
  display: block;
  margin-bottom: 14px;
  margin-right: 14px;

  /* label {
    font-weight: bold;
    margin-bottom: 5px;
  } */

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
    padding: 14px 52px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    max-width: 150px;
    background-color: transparent;
    outline: none;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
    @media screen and (min-width: 1440px) {
      padding: 14px 112px 14px 14px;
    }
  }

  div {
    display: none;
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
