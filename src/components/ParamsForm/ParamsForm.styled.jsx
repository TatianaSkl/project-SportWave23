import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: block;
`;

export const FormSection = styled.div`
  /* padding: 20px;
  margin: 10px;
  border-radius: 5px;
  width: 300px; */
`;

export const FormGroupContent = styled.div`
  display: flex;

  flex-wrap: wrap;
  width: 523px;
`;

export const FormGroup = styled.div`
  display: block;
  /* flex-wrap: wrap; */
  margin-bottom: 10px;
  margin-right: 20px;
  width: 153px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type='number'],
  input[type='date'],
  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  div {
    color: red;
    font-size: 14px;
  }
`;

export const FormButton = styled.button`
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  /* &:hover {
    background-color: #0056b3;
  } */
`;

////////////////////////////////

// export const BloodSexContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px; // Додайте відступ для розділення груп
// `;

export const BloodContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; // Вирівнювання елементів по центру */
`;

export const SexContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; // Вирівнювання елементів по центру */
`;

export const ActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; // Вирівнювання елементів по центру */
  margin-top: 20px; // Відступ між "Blood/Sex" і "Active"
`;

export const RadioLabel = styled.label`
  margin-bottom: 10px; // Відступ між радіо-кнопками
`;
