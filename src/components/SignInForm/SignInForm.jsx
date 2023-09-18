import { Formik } from 'formik';
import * as yup from 'yup';
// import { logIn } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';
import { FormAuth, FormField, Wrapper } from './SignInForm.styled';
import { Button } from 'components';

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const schemaLog = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Email address must contain an "@" sign')
    .required('This field is required'),
  password: yup
    .string()
    .matches(passwordRegex, 'Invalid password, try again')
    .min(7, 'Must be at least 7 characters long')
    .required('This field is required'),
});

// const getColor = (errors, touched, defaultColor = 'rgba(255, 255, 255, 0.8)') => {
//   if (errors === 'Your password is short' || errors === 'Your password is too long') {
//     return '#F6C23E';
//   }
//   return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
// };

export const SignInForm = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     dispatch(
  //       logIn({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );
  //     form.reset();
  //   };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schemaLog}
      //   onSubmit={handleSubmit}
    >
      <FormAuth>
        <Wrapper>
          <FormField type="email" name="email" placeholder="Email" />
          <FormField type="password" name="password" placeholder="Password" />
        </Wrapper>
        <Button label="Sign In" />
      </FormAuth>
    </Formik>
  );
};
