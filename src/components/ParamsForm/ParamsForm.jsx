import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import icon from 'images/sprite.svg';
import {
  FormContainer,
  FormSection,
  FormGroupContent,
  FormGroup,
  NextButton,
  BackButton,
  GoBackContainer,
  BloodSexContainer,
  BloodContainer,
  RadioLabel,
  SexContainer,
  ActiveContainer,
  LevelActivityText,
  BloodSex,
  LabelRadio,
} from './ParamsForm.styled';
import { TextGrey, TitlePage } from 'components';
import { PressButton } from 'components/Button/Button.styled';

import { ButtonIcon, FielRadio } from 'components/UserForm/UserForm.styled';
import { Input } from 'components/ProductsFilters/ProductsFilters.styled';

import { useDispatch } from 'react-redux';
import { updateParams } from 'redux/auth/operations';

const ParamsForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      height: '',
      currentWeight: '',
      desiredWeight: '',
      birthday: '',
      blood: '',
      sex: '',
      levelActivity: '',
    },
    validationSchema: Yup.object({
      height: Yup.number().min(150, 'Must be at least 150 cm!').required('This field is required!'),
      currentWeight: Yup.number().min(35, 'Must be at least 35 kg!').required(),
      desiredWeight: Yup.number().min(35, 'Must be at least 35 kg!').required(),
      birthday: Yup.date()
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
      blood: Yup.number().oneOf([1, 2, 3, 4]).required('This field is required!'),
      sex: Yup.string().oneOf(['male', 'female']).required('This field is required!'),
      levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required('This field is required!'),
    }),
    onSubmit: values => {
      const userData = {
        height: parseInt(values.height),
        currentWeight: parseInt(values.currentWeight),
        desiredWeight: parseInt(values.desiredWeight),
        birthday: values.birthday,
        blood: parseInt(values.blood),
        sex: values.sex,
        levelActivity: parseInt(values.levelActivity),
      };
      console.log(userData);
      dispatch(updateParams(userData));
      if (currentStep === 2) {
        // Відправка
      } else {
        // розділ
        setCurrentStep(currentStep + 1);
      }
    },
  });

  const handlePrevClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      {currentStep === 0 && (
        <FormSection>
          <TitlePage text="Get closer to your goals!" />
          <TextGrey text="To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:" />
          <FormGroupContent>
            <FormGroup>
              <input
                type="number"
                id="height"
                name="height"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
              />
              <label htmlFor="height">Height:</label>
              {formik.touched.height && formik.errors.height ? (
                <div>{formik.errors.height}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                id="currentWeight"
                name="currentWeight"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currentWeight}
              />
              <label htmlFor="currentWeight">Current Weight:</label>
              {formik.touched.currentWeight && formik.errors.currentWeight ? (
                <div>{formik.errors.currentWeight}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <input
                type="number"
                id="desiredWeight"
                name="desiredWeight"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desiredWeight}
              />
              <label htmlFor="desiredWeight">Desired Weight:</label>
              {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
                <div>{formik.errors.desiredWeight}</div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <div style={{ position: 'relative' }}>
                <Input
                  type="date"
                  name="birthday"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                />
                <ButtonIcon type="button">
                  <svg width={'18'} height={'18'}>
                    <use href={icon + '#icon-calendar'}></use>
                  </svg>
                </ButtonIcon>
              </div>
            </FormGroup>
          </FormGroupContent>
        </FormSection>
      )}

      {currentStep === 1 && (
        <div>
          <TitlePage text="Get closer to your goals!" />
          <BloodSexContainer>
            <BloodContainer>
              <BloodSex>Blood:</BloodSex>
              <div></div>
              <RadioLabel>
                <label>
                  <FielRadio
                    type="radio"
                    name="blood"
                    value="1"
                    checked={formik.values.blood === '1'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio> 1</LabelRadio>
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <FielRadio
                    type="radio"
                    name="blood"
                    value="2"
                    checked={formik.values.blood === '2'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio>2</LabelRadio>
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <FielRadio
                    type="radio"
                    name="blood"
                    value="3"
                    checked={formik.values.blood === '3'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio>3</LabelRadio>
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <FielRadio
                    type="radio"
                    name="blood"
                    value="4"
                    checked={formik.values.blood === '4'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio>4</LabelRadio>
                </label>
              </RadioLabel>
            </BloodContainer>

            <SexContainer>
              <BloodSex>Sex:</BloodSex>
              <RadioLabel>
                <BloodSex>
                  <FielRadio
                    type="radio"
                    name="sex"
                    value="male"
                    checked={formik.values.sex === 'male'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio>Male</LabelRadio>
                </BloodSex>
              </RadioLabel>
              <RadioLabel>
                <BloodSex>
                  <FielRadio
                    type="radio"
                    name="sex"
                    value="female"
                    checked={formik.values.sex === 'female'}
                    onChange={formik.handleChange}
                  />
                  <LabelRadio>Female</LabelRadio>
                </BloodSex>
              </RadioLabel>
            </SexContainer>
          </BloodSexContainer>

          <ActiveContainer>
            <BloodSex>Level Activity:</BloodSex>

            <RadioLabel>
              <LevelActivityText>
                <FielRadio
                  type="radio"
                  name="levelActivity"
                  value="1"
                  checked={formik.values.levelActivity === '1'}
                  onChange={formik.handleChange}
                />
                <LabelRadio>Sedentary lifestyle (little or no physical activity)</LabelRadio>
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <FielRadio
                  type="radio"
                  name="levelActivity"
                  value="2"
                  checked={formik.values.levelActivity === '2'}
                  onChange={formik.handleChange}
                />
                <LabelRadio>Light activity (light exercises/sports 1-3 days per week)</LabelRadio>
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <FielRadio
                  type="radio"
                  name="levelActivity"
                  value="3"
                  checked={formik.values.levelActivity === '3'}
                  onChange={formik.handleChange}
                />
                <LabelRadio>
                  Moderately active (moderate exercises/sports 3-5 days per week)
                </LabelRadio>
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <FielRadio
                  type="radio"
                  name="levelActivity"
                  value="4"
                  checked={formik.values.levelActivity === '4'}
                  onChange={formik.handleChange}
                />
                <LabelRadio>Very active (intense exercises/sports 6-7 days per week)</LabelRadio>
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <FielRadio
                  type="radio"
                  name="levelActivity"
                  value="5"
                  checked={formik.values.levelActivity === '5'}
                  onChange={formik.handleChange}
                />

                <LabelRadio>
                  Extremely active (very strenuous exercises/sports and physical work)
                </LabelRadio>
              </LevelActivityText>
            </RadioLabel>
          </ActiveContainer>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <TitlePage text="Dear user" />
          <TextGrey text="Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach." />

          <GoBackContainer>
            <PressButton type="submit" style={{ marginRight: '15px' }}>
              Go
            </PressButton>
            <BackButton type="button" onClick={handlePrevClick}>
              Back
            </BackButton>
          </GoBackContainer>
        </div>
      )}

      {currentStep === 1 && (
        <BackButton type="button" onClick={handlePrevClick}>
          Back
        </BackButton>
      )}

      {currentStep < 2 && (
        <NextButton type="button" onClick={() => setCurrentStep(currentStep + 1)}>
          Next
        </NextButton>
      )}
    </FormContainer>
  );
};

export default ParamsForm;
