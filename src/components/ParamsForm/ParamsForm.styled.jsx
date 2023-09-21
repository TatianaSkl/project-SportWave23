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
`;

export const FormGroup = styled.div`
  display: block;
  margin-bottom: 14px;
  margin-right: 14px;

  /* label {
    font-weight: bold;
    margin-bottom: 5px;
  } */

  input[type='number'],
  input[type='date'],
  select {
    color: black;
    padding: 14px 52px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    max-width: 150px;
  }

  div {
    display: none;
  }
`;

export const FormButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

////////////////////////////////

// export const BloodSexContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px; // Додайте відступ для розділення груп
// `;
export const BloodSexContainer = styled.div`
  display: flex;
`;

export const BloodContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;  */
`;

export const SexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 20px;
`;

export const RadioLabel = styled.label`
  margin-bottom: 10px;
`;
