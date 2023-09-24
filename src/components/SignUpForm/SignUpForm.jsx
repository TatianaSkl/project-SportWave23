import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { register } from 'redux/auth/operations';
import {
  IconBsEye,
  IconBsEyeSlash,
  ErrorIcon,
  ErrorText,
  FieldWrapper,
  FormAuth,
  FormField,
  MessageWrapper,
  SuccessIcon,
  SuccessText,
  Wrapper,
  BottonEye,
} from './SignUpForm.styled';
import { Button, StatisticsInfo } from 'components';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
const passwordRegex = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;

export const schemaReg = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long')
    .required('This field is required!'),
  email: yup
    .string()
    .matches(emailRegex, 'Email address must contain an "@" sign')
    .required('This field is required!'),
  password: yup
    .string()
    .matches(passwordRegex, 'Must be exactly 7 characters long')
    .min(7, 'Must be exactly 7 characters long')
    .required('This field is required!'),
});

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schemaReg}
        onSubmit={handleSubmit}
      >
        {formik => (
          <FormAuth autoComplete="off">
            <Wrapper>
              <FieldWrapper
                className={`${
                  formik.touched.name && formik.errors.name
                    ? 'error'
                    : formik.touched.name && !formik.errors.name
                    ? 'success'
                    : ''
                }`}
              >
                <FormField type="text" name="name" placeholder="Name" />
                <MessageWrapper>
                  <ErrorIcon data-status="error" />
                  <ErrorText name="name" component="div" />
                </MessageWrapper>

                {formik.touched.name && !formik.errors.name && (
                  <MessageWrapper>
                    <SuccessIcon data-status="success" />
                    <SuccessText>Success name</SuccessText>
                  </MessageWrapper>
                )}
              </FieldWrapper>
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
                <BottonEye
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconBsEyeSlash /> : <IconBsEye />}
                </BottonEye>
              </FieldWrapper>
            </Wrapper>
            <Button label="Sign Up" />
          </FormAuth>
        )}
      </Formik>
      <StatisticsInfo />
    </>
  );
};
