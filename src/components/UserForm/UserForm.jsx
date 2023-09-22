// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { Button } from 'components';
import {
  FielRadio,
  FieldEmail,
  FieldName,
  FieldWrapper,
  FormAuth,
  FormLabel,
  FormTitle,
  Input,
  InputField,
  LabelRadio,
  TitleRadio,
  Wrapper,
  WrapperRadioFlex,
  WrapperRadioLevelActivity,
} from './UserForm.styled';
import { selectUser } from 'redux/auth/selectors';

// export const schemaUs = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, 'Must be at least 2 characters long')
//     .required('This field is required!'),
//   height: yup.number().min(150, 'Must be at least 150 cm!').required('This field is required!'),
//   currentWeight: yup
//     .number()
//     .min(35, 'Must be at least 35 kg!')
//     .required('This field is required!'),
//   desiredWeight: yup
//     .number()
//     .min(35, 'Must be at least 35 kg!')
//     .required('This field is required!'),
//   birthday: yup
//     .date()
//     .matches('Must be exactly 7 characters long')
//     .min(7, 'Must be exactly 7 characters long')
//     .required('This field is required!'),
//   blood: yup
//     .number()
//     .matches('Must be exactly 7 characters long')
//     .min(7, 'Must be exactly 7 characters long')
//     .required('This field is required!'),
//   sex: yup
//     .string()
//     .matches('Must be exactly 7 characters long')
//     .min(7, 'Must be exactly 7 characters long')
//     .required('This field is required!'),
//   levelActivity: yup
//     .number()
//     .matches('Must be exactly 7 characters long')
//     .min(7, 'Must be exactly 7 characters long')
//     .required('This field is required!'),
// });

export const UserForm = () => {
  const user = useSelector(selectUser);
  // const [isFormDirty, setIsFormDirty] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     name: user.name,
  //     email: user.email,
  //     height: user.userParams.height,
  //     currentWeight: user.userParams.currentWeight,
  //     desiredWeight: user.userParams.desiredWeight,
  //     birthday: user.userParams.birthday,
  //     blood: user.userParams.blood.toString(),
  //     sex: user.userParams.sex,
  //     levelActivity: user.userParams.levelActivity.toString(),
  //   },
  //   onSubmit: async values => {
  //     // Создайте объект данных для отправки на сервер
  //     const userData = {
  //       name: values.name,
  //       email: values.email,
  //       userParams: {
  //         height: values.height,
  //         currentWeight: values.currentWeight,
  //         desiredWeight: values.desiredWeight,
  //         birthday: values.birthday,
  //         blood: parseInt(values.blood), // Преобразуйте обратно в число, если нужно
  //         sex: values.sex,
  //         levelActivity: parseInt(values.levelActivity), // Преобразуйте обратно в число, если нужно
  //       },
  //     };

  //     // Выполните запрос на сервер с обновленными данными пользователя
  //     try {
  //       const response = await fetch('/your-api-endpoint', {
  //         method: 'PUT', // Или другой метод, соответствующий вашему API
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(userData),
  //       });

  //       if (response.ok) {
  //         // Обработайте успешный ответ
  //         setIsFormDirty(false); // Сбросьте флаг изменений после успешной отправки
  //         alert('Данные успешно обновлены');
  //       } else {
  //         // Обработайте ошибку
  //         alert('Ошибка при обновлении данных');
  //       }
  //     } catch (error) {
  //       console.error('Ошибка при отправке данных на сервер:', error);
  //     }
  //   },
  // });

  return (
    <>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
          height: user.userParams.height,
          currentWeight: user.userParams.currentWeight,
          desiredWeight: user.userParams.desiredWeight,
          birthday: user.userParams.birthday,
          blood: user.userParams.blood.toString(),
          sex: user.userParams.sex,
          levelActivity: user.userParams.levelActivity.toString(),
        }}
        // onSubmit={formik.handleSubmit}
      >
        <FormAuth autoComplete="off">
          <FormTitle>Basic info</FormTitle>
          <Wrapper>
            <FieldName type="text" name="name" />
            <FieldEmail type="email" name="email" />
            <FieldWrapper>
              <FormLabel htmlFor="height">Height</FormLabel>
              <InputField type="text" name="height" />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="currentWeight">Current Weight</FormLabel>
              <InputField type="text" name="currentWeight" />
            </FieldWrapper>
            <FieldWrapper>
              <FormLabel htmlFor="desiredWeight">Desired Weight</FormLabel>
              <Input type="text" name="desiredWeight" />
            </FieldWrapper>
            <Input type="text" name="birthday" />
          </Wrapper>
          <TitleRadio>Blood</TitleRadio>
          <WrapperRadioFlex>
            <div role="group" aria-labelledby="radio-blood">
              <LabelRadio>
                <FielRadio type="radio" name="blood" value="1" />1
              </LabelRadio>
              <LabelRadio>
                <FielRadio type="radio" name="blood" value="2" />2
              </LabelRadio>
              <LabelRadio>
                <FielRadio type="radio" name="blood" value="3" />3
              </LabelRadio>
              <LabelRadio>
                <FielRadio type="radio" name="blood" value="4" />4
              </LabelRadio>
            </div>
            <div role="group" aria-labelledby="radio-sex">
              <LabelRadio>
                <FielRadio type="radio" name="sex" value="male" />
                Male
              </LabelRadio>
              <LabelRadio>
                <FielRadio type="radio" name="sex" value="female" />
                Female
              </LabelRadio>
            </div>
          </WrapperRadioFlex>
          <WrapperRadioLevelActivity role="group" aria-labelledby="radio-levelActivity">
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="1" />
              Sedentary lifestyle (little or no physical activity)
            </LabelRadio>
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="2" />
              Light activity (light exercises/sports 1-3 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="3" />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="4" />
              Very active (intense exercises/sports 6-7 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="5" />
              Extremely active (very strenuous exercises/ sports and physical work)
            </LabelRadio>
          </WrapperRadioLevelActivity>
          <Button label="Save" disabled={true} />
        </FormAuth>
      </Formik>
    </>
  );
};
