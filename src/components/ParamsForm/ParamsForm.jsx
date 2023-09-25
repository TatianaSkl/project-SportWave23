import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
} from './ParamsForm.styled';
import { TextGrey, TitlePage } from 'components';
import { PressButton } from 'components/Button/Button.styled';

const ParamsForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

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
      height: Yup.number().min(150).required(),
      currentWeight: Yup.number().min(35).required(),
      desiredWeight: Yup.number().min(35).required(),
      birthday: Yup.date()

        .max(new Date(new Date().getFullYear() - 18, 0, 1))
        .required(),
      blood: Yup.number().oneOf([1, 2, 3, 4]).required(),
      sex: Yup.string().oneOf(['male', 'female']).required(),
      levelActivity: Yup.number().oneOf([1, 2, 3, 4, 5]).required(),
    }),
    onSubmit: values => {
      // бекенд
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
              <input
                type="date"
                id="birthday"
                name="birthday"
                // placeholder=""
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthday}
              />
              <label htmlFor="birthday">Birthday:</label>
              {formik.touched.birthday && formik.errors.birthday ? (
                <div>{formik.errors.birthday}</div>
              ) : null}
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
                  <input
                    type="radio"
                    name="blood"
                    value="1"
                    checked={formik.values.blood === '1'}
                    onChange={formik.handleChange}
                  />
                  1
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <input
                    type="radio"
                    name="blood"
                    value="1"
                    checked={formik.values.blood === '1'}
                    onChange={formik.handleChange}
                  />
                  2
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <input
                    type="radio"
                    name="blood"
                    value="1"
                    checked={formik.values.blood === '1'}
                    onChange={formik.handleChange}
                  />
                  3
                </label>
              </RadioLabel>
              <RadioLabel>
                <label>
                  <input
                    type="radio"
                    name="blood"
                    value="1"
                    checked={formik.values.blood === '1'}
                    onChange={formik.handleChange}
                  />
                  4
                </label>
              </RadioLabel>
            </BloodContainer>

            <SexContainer>
              <BloodSex>Sex:</BloodSex>
              <RadioLabel>
                <BloodSex>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    checked={formik.values.sex === 'male'}
                    onChange={formik.handleChange}
                  />
                  Male
                </BloodSex>
              </RadioLabel>
              <RadioLabel>
                <BloodSex>
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    checked={formik.values.sex === 'male'}
                    onChange={formik.handleChange}
                  />
                  Female
                </BloodSex>
              </RadioLabel>
            </SexContainer>
          </BloodSexContainer>

          <ActiveContainer>
            <BloodSex>Level Activity:</BloodSex>

            <RadioLabel>
              <LevelActivityText>
                <input
                  type="radio"
                  name="levelActivity"
                  value="1"
                  checked={formik.values.levelActivity === '1'}
                  onChange={formik.handleChange}
                />
                Sedentary lifestyle (little or no physical activity)
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <input
                  type="radio"
                  name="levelActivity"
                  value="2"
                  checked={formik.values.levelActivity === '2'}
                  onChange={formik.handleChange}
                />
                Light activity (light exercises/sports 1-3 days per week)
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <input
                  type="radio"
                  name="levelActivity"
                  value="3"
                  checked={formik.values.levelActivity === '3'}
                  onChange={formik.handleChange}
                />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <input
                  type="radio"
                  name="levelActivity"
                  value="4"
                  checked={formik.values.levelActivity === '4'}
                  onChange={formik.handleChange}
                />
                Very active (intense exercises/sports 6-7 days per week)
              </LevelActivityText>
            </RadioLabel>
            <RadioLabel>
              <LevelActivityText>
                <input
                  type="radio"
                  name="levelActivity"
                  value="5"
                  checked={formik.values.levelActivity === '5'}
                  onChange={formik.handleChange}
                />
                Extremely active (very strenuous exercises/sports and physical
                work)
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
        <NextButton
          type="button"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </NextButton>
      )}
    </FormContainer>
  );
};

export default ParamsForm;
