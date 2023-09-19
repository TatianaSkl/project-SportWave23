import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  FormSection,
  FormGroup,
  FormButton,
  BloodContainer,
  RadioLabel,
  SexContainer,
  ActiveContainer,
} from './ParamsForm.styled';
import { TextGrey, TitlePage } from 'components';

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
          <FormGroup>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.height}
            />
            {formik.touched.height && formik.errors.height ? (
              <div>{formik.errors.height}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <label htmlFor="currentWeight">Current Weight:</label>
            <input
              type="number"
              id="currentWeight"
              name="currentWeight"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currentWeight}
            />
            {formik.touched.currentWeight && formik.errors.currentWeight ? (
              <div>{formik.errors.currentWeight}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <label htmlFor="desiredWeight">Desired Weight:</label>
            <input
              type="number"
              id="desiredWeight"
              name="desiredWeight"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desiredWeight}
            />
            {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
              <div>{formik.errors.desiredWeight}</div>
            ) : null}
          </FormGroup>
          <FormGroup>
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <div>{formik.errors.birthday}</div>
            ) : null}
          </FormGroup>
        </FormSection>
      )}

      {currentStep === 1 && (
        <div>
          <BloodContainer>
            <TitlePage text="Get closer to your goals!" />
            <label>Blood:</label>
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
            <label>Sex</label>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={formik.values.sex === 'male'}
                  onChange={formik.handleChange}
                />
                Male
              </label>
            </RadioLabel>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={formik.values.sex === 'male'}
                  onChange={formik.handleChange}
                />
                Female
              </label>
            </RadioLabel>
          </SexContainer>

          <ActiveContainer>
            <label>Level Activity:</label>

            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="levelActivity"
                  value="1"
                  checked={formik.values.levelActivity === '1'}
                  onChange={formik.handleChange}
                />
                Sedentary lifestyle (little or no physical activity)
              </label>
            </RadioLabel>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="levelActivity"
                  value="2"
                  checked={formik.values.levelActivity === '2'}
                  onChange={formik.handleChange}
                />
                Light activity (light exercises/sports 1-3 days per week)
              </label>
            </RadioLabel>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="levelActivity"
                  value="3"
                  checked={formik.values.levelActivity === '3'}
                  onChange={formik.handleChange}
                />
                Moderately active (moderate exercises/sports 3-5 days per week)
              </label>
            </RadioLabel>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="levelActivity"
                  value="4"
                  checked={formik.values.levelActivity === '4'}
                  onChange={formik.handleChange}
                />
                Very active (intense exercises/sports 6-7 days per week)
              </label>
            </RadioLabel>
            <RadioLabel>
              <label>
                <input
                  type="radio"
                  name="levelActivity"
                  value="5"
                  checked={formik.values.levelActivity === '5'}
                  onChange={formik.handleChange}
                />
                Extremely active (very strenuous exercises/sports and physical
                work)
              </label>
            </RadioLabel>
          </ActiveContainer>
        </div>
      )}

      {currentStep < 2 && (
        <FormButton
          type="button"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </FormButton>
      )}

      {currentStep === 2 && (
        <div>
          <TitlePage text="Dear user" />
          <TextGrey text="Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach." />

          <button type="submit">Go</button>
        </div>
      )}

      {currentStep > 0 && (
        <FormButton type="button" onClick={handlePrevClick}>
          Back
        </FormButton>
      )}
    </FormContainer>
  );
};

export default ParamsForm;
