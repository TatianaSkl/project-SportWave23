import React from 'react';

const StepBar = ({ currentStep, onStepClick }) => {
  const steps = ['step 1', 'step 2', 'step 3'];

  return (
    <div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={index === currentStep ? 'active' : ''}
          onClick={() => onStepClick(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StepBar;
