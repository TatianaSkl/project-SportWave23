import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  BottonEye,
  ErrorIcon,
  ErrorText,
  FieldWrapper,
  FormAuth,
  FormField,
  IconBsEye,
  IconBsEyeSlash,
  MessageWrapper,
  SuccessIcon,
  SuccessText,
  Wrapper,
} from './SignInForm.styled';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/auth/selectors';

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const schemaLog = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, 'Email address must contain an "@" sign')
    .required('This field is required!'),
  password: yup
    .string()
    .matches(passwordRegex, 'Must be exactly 7 characters long with 6 letters and 1 digit')
    .min(7, 'Must be exactly 7 characters long with 6 letters and 1 digit')
    .required('This field is required!'),
});

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const success = await dispatch(
      logIn({
        email,
        password,
      })
    );
    if (success) {
      if (Object.keys(user.userParams).length !== 0) {
        navigate('/params');
      } else {
        navigate('/diary');
      }
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schemaLog}
      onSubmit={handleSubmit}
    >
      {formik => (
        <FormAuth autoComplete="off">
          <Wrapper>
            <FieldWrapper
              className={`${
                formik.touched.email && formik.errors.email
                  ? 'error'
                  : formik.touched.email && !formik.errors.email
                  ? 'success'
                  : ''
              }`}
            >
              <FormField type="email" name="email" placeholder="Email" />
              <MessageWrapper>
                <ErrorIcon data-status="error" />
                <ErrorText name="email" component="div" />
              </MessageWrapper>
              {formik.touched.email && !formik.errors.email && (
                <MessageWrapper>
                  <SuccessIcon data-status="success" />
                  <SuccessText>Success email</SuccessText>
                </MessageWrapper>
              )}
            </FieldWrapper>
            <FieldWrapper
              className={`${
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : formik.touched.password && !formik.errors.password
                  ? 'success'
                  : ''
              }`}
            >
              <FormField
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <MessageWrapper>
                <ErrorIcon data-status="error" />
                <ErrorText name="password" component="div" />
              </MessageWrapper>
              {formik.touched.password && !formik.errors.password && (
                <MessageWrapper>
                  <SuccessIcon data-status="success" />
                  <SuccessText>Success password</SuccessText>
                </MessageWrapper>
              )}
              <BottonEye type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IconBsEyeSlash /> : <IconBsEye />}
              </BottonEye>
            </FieldWrapper>
          </Wrapper>
          <Button label="Sign In" />
        </FormAuth>
      )}
    </Formik>
  );
};
