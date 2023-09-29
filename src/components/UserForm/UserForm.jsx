import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { selectUser } from 'redux/auth/selectors';
import { getBmr, updateName, updateParams } from 'redux/auth/operations';
import icon from 'images/sprite.svg';
import { Button } from 'components';
import {
  ButtonIcon,
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
  WrapperM,
  WrapperRadioFlex,
  WrapperRadioLevelActivity,
} from './UserForm.styled';

export const schemaUs = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Must be at least 2 characters long')
    .required('This field is required!'),
  height: yup.number().min(150, 'Must be at least 150 cm!').required('This field is required!'),
  currentWeight: yup
    .number()
    .min(35, 'Must be at least 35 kg!')
    .required('This field is required!'),
  desiredWeight: yup
    .number()
    .min(35, 'Must be at least 35 kg!')
    .required('This field is required!'),
  birthday: yup
    .date()
    .max(
      new Date(new Date().getFullYear() - 18, 0, 1),
      'You must be at least 18 years old to use this app'
    )
    .transform((currentValue, originalValue) => {
      if (originalValue) {
        const parts = originalValue.split('-');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        return new Date(year, month, day);
      }
      return null;
    })
    .required('This field is required!'),
  blood: yup.number().oneOf([1, 2, 3, 4]).required('This field is required!'),
  sex: yup.string().oneOf(['male', 'female']).required('This field is required!'),
  levelActivity: yup.number().oneOf([1, 2, 3, 4, 5]).required('This field is required!'),
});

export const UserForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isFormDirty, setIsFormDirty] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      height: user.userParams.height || '',
      currentWeight: user.userParams.currentWeight || '',
      desiredWeight: user.userParams.desiredWeight || '',
      birthday: user.userParams.birthday || '',
      blood: (user.userParams.blood || '').toString(),
      sex: user.userParams.sex || '',
      levelActivity: (user.userParams.levelActivity || '').toString(),
    },
    validationSchema: schemaUs,
    onSubmit: async values => {
      try {
        await schemaUs.validate(values, { abortEarly: false });
        const userData = {
          height: parseInt(values.height),
          currentWeight: parseInt(values.currentWeight),
          desiredWeight: parseInt(values.desiredWeight),
          birthday: values.birthday,
          blood: parseInt(values.blood),
          sex: values.sex,
          levelActivity: parseInt(values.levelActivity),
        };
        dispatch(updateParams(userData));

        if (values.name !== user.name) {
          const userName = {
            name: values.name,
          };
          dispatch(updateName(userName));
        }
        dispatch(getBmr());
        setIsFormDirty(false);
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          toast.error(error.message);
        });
      }
    },
  });

  const handleFieldChange = e => {
    formik.handleChange(e);
    setIsFormDirty(true);
  };

  return (
    <FormAuth autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormTitle>Basic info</FormTitle>
      <Wrapper>
        <FieldName
          type="text"
          name="name"
          onChange={handleFieldChange}
          value={formik.values.name}
        />
        <FieldEmail
          type="email"
          name="email"
          disabled
          onChange={handleFieldChange}
          value={formik.values.email}
        />
        <FieldWrapper>
          <FormLabel htmlFor="height">Height</FormLabel>
          <InputField
            type="text"
            name="height"
            onChange={handleFieldChange}
            value={formik.values.height}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormLabel htmlFor="currentWeight">Current Weight</FormLabel>
          <InputField
            type="text"
            name="currentWeight"
            onChange={handleFieldChange}
            value={formik.values.currentWeight}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormLabel htmlFor="desiredWeight">Desired Weight</FormLabel>
          <Input
            type="text"
            name="desiredWeight"
            onChange={handleFieldChange}
            value={formik.values.desiredWeight}
          />
        </FieldWrapper>
        <div style={{ position: 'relative' }}>
          <Input
            type="date"
            name="birthday"
            onChange={handleFieldChange}
            value={formik.values.birthday}
          />
          <ButtonIcon type="button">
            <svg width={'18'} height={'18'}>
              <use href={icon + '#icon-calendar'}></use>
            </svg>
          </ButtonIcon>
        </div>
      </Wrapper>
      <TitleRadio>Blood</TitleRadio>
      <WrapperRadioFlex>
        <WrapperM role="group" aria-labelledby="radio-blood">
          <label>
            <FielRadio
              type="radio"
              name="blood"
              value="1"
              checked={formik.values.blood === '1'}
              onChange={handleFieldChange}
            />
            <LabelRadio>1</LabelRadio>
          </label>
          <label>
            <FielRadio
              type="radio"
              name="blood"
              value="2"
              checked={formik.values.blood === '2'}
              onChange={handleFieldChange}
            />
            <LabelRadio>2</LabelRadio>
          </label>
          <label>
            <FielRadio
              type="radio"
              name="blood"
              value="3"
              checked={formik.values.blood === '3'}
              onChange={handleFieldChange}
            />
            <LabelRadio>3</LabelRadio>
          </label>
          <label>
            <FielRadio
              type="radio"
              name="blood"
              value="4"
              checked={formik.values.blood === '4'}
              onChange={handleFieldChange}
            />
            <LabelRadio>4</LabelRadio>
          </label>
        </WrapperM>
        <WrapperM role="group" aria-labelledby="radio-sex">
          <label>
            <FielRadio
              type="radio"
              name="sex"
              value="male"
              checked={formik.values.sex === 'male'}
              onChange={handleFieldChange}
            />
            <LabelRadio>Male</LabelRadio>
          </label>
          <label>
            <FielRadio
              type="radio"
              name="sex"
              value="female"
              checked={formik.values.sex === 'female'}
              onChange={handleFieldChange}
            />
            <LabelRadio>Female</LabelRadio>
          </label>
        </WrapperM>
      </WrapperRadioFlex>
      <WrapperRadioLevelActivity role="group" aria-labelledby="radio-levelActivity">
        <label>
          <FielRadio
            type="radio"
            name="levelActivity"
            value="1"
            checked={formik.values.levelActivity === '1'}
            onChange={handleFieldChange}
          />
          <LabelRadio>Sedentary lifestyle (little or no physical activity)</LabelRadio>
        </label>
        <label>
          <FielRadio
            type="radio"
            name="levelActivity"
            value="2"
            checked={formik.values.levelActivity === '2'}
            onChange={handleFieldChange}
          />
          <LabelRadio>Light activity (light exercises/sports 1-3 days per week)</LabelRadio>
        </label>
        <label>
          <FielRadio
            type="radio"
            name="levelActivity"
            value="3"
            checked={formik.values.levelActivity === '3'}
            onChange={handleFieldChange}
          />
          <LabelRadio>Moderately active (moderate exercises/sports 3-5 days per week)</LabelRadio>
        </label>
        <label>
          <FielRadio
            type="radio"
            name="levelActivity"
            value="4"
            checked={formik.values.levelActivity === '4'}
            onChange={handleFieldChange}
          />
          <LabelRadio>Very active (intense exercises/sports 6-7 days per week)</LabelRadio>
        </label>
        <label>
          <FielRadio
            type="radio"
            name="levelActivity"
            value="5"
            checked={formik.values.levelActivity === '5'}
            onChange={handleFieldChange}
          />
          <LabelRadio>
            Extremely active (very strenuous exercises/ sports and physical work)
          </LabelRadio>
        </label>
      </WrapperRadioLevelActivity>
      <Button label="Save" disabled={!isFormDirty} />
    </FormAuth>
  );
};
