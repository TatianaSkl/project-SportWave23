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
  //   const [showPassword, setShowPassword] = useState(false);
  //   const dispatch = useDispatch();

  //   const handleSubmit = ({ name, email, password }, { resetForm }) => {
  //     dispatch(
  //       register({
  //         name,
  //         email,
  //         password,
  //       })
  //     );
  //     resetForm();
  //     console.log(name);
  //     console.log(email);
  //     console.log(password);
  //   };

  return (
    <>
      <Formik
      //   initialValues={{ name: '', email: '', password: '' }}
      //   validationSchema={schemaReg}
      //   onSubmit={handleSubmit}
      >
        <FormAuth autoComplete="off">
          <FormTitle>Basic info</FormTitle>
          <Wrapper>
            <FieldName type="text" name="name" />
            <FieldEmail type="email" name="email" disabled />
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
                <FielRadio type="radio" name="blood" value="1" checked="1" />1
              </LabelRadio>
              <LabelRadio>
                <FielRadio
                  type="radio"
                  name="blood"
                  value="2"
                  // checked={valueFromServer === '2'}
                />
                2
              </LabelRadio>
              <LabelRadio>
                <FielRadio
                  type="radio"
                  name="blood"
                  value="3"
                  // checked={valueFromServer === '3'}
                />
                3
              </LabelRadio>
              <LabelRadio>
                <FielRadio
                  type="radio"
                  name="blood"
                  value="4"
                  // checked={valueFromServer === '4'}
                />
                4
              </LabelRadio>
            </div>
            <div role="group" aria-labelledby="radio-sex">
              <LabelRadio>
                <FielRadio type="radio" name="sex" value="Male" checked="Male" />
                Male
              </LabelRadio>
              <LabelRadio>
                <FielRadio
                  type="radio"
                  name="sex"
                  value="Female"
                  // checked={valueFromServer === 'Female'}
                />
                Female
              </LabelRadio>
            </div>
          </WrapperRadioFlex>
          <WrapperRadioLevelActivity role="group" aria-labelledby="radio-levelActivity">
            <LabelRadio>
              <FielRadio type="radio" name="levelActivity" value="1" checked="1" />
              Sedentary lifestyle (little or no physical activity)
            </LabelRadio>
            <LabelRadio>
              <FielRadio
                type="radio"
                name="levelActivity"
                value="2"
                // checked={valueFromServer === '2'}
              />
              Light activity (light exercises/sports 1-3 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio
                type="radio"
                name="levelActivity"
                value="3"
                // checked={valueFromServer === '3'}
              />
              Moderately active (moderate exercises/sports 3-5 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio
                type="radio"
                name="levelActivity"
                value="4"
                // checked={valueFromServer === '4'}
              />
              Very active (intense exercises/sports 6-7 days per week)
            </LabelRadio>
            <LabelRadio>
              <FielRadio
                type="radio"
                name="levelActivity"
                value="5"
                // checked={valueFromServer === '5'}
              />
              Extremely active (very strenuous exercises/ sports and physical work)
            </LabelRadio>
          </WrapperRadioLevelActivity>
          <Button label="Save" disabled={true} />
        </FormAuth>
      </Formik>
    </>
  );
};
