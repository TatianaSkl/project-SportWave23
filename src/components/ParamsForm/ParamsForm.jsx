import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
        .min(new Date(new Date().getFullYear() - 18, 0, 1))
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
    <form onSubmit={formik.handleSubmit}>
      {currentStep === 0 && (
        <div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <div>
            <label>Blood:</label>
            <div>
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
            </div>
          </div>

          <div>
            <label>Sex</label>
            <div>
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
            </div>
          </div>

          <div>
            <label>Level Activity:</label>
            <div>
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
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <button type="button" onClick={handlePrevClick}>
            Back
          </button>
          {currentStep < 2 ? (
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </button>
          ) : (
            <button type="submit">Go</button>
          )}
        </div>
      )}
    </form>
  );
};

export default ParamsForm;
