import { Formik } from 'formik';
import * as yup from 'yup';
// import { register } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';
import { FormAuth, FormField, Wrapper } from './SignUpForm.styled';
import { Button } from 'components';

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const schemaReg = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long')
    .required('This field is required'),
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

export const SignUpForm = () => {
  //   const dispatch = useDispatch();

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     dispatch(
  //       register({
  //         name: form.elements.name.value,
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );
  //     form.reset();
  //   };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schemaReg}
      //   onSubmit={handleSubmit}
    >
      <FormAuth>
        <Wrapper>
          <FormField type="text" name="name" placeholder="Name" />
          <FormField type="email" name="email" placeholder="Email" />
          <FormField type="password" name="password" placeholder="Password" />
        </Wrapper>
        <Button label="Sign Up" />
      </FormAuth>
    </Formik>
  );
};
