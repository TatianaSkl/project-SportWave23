import React from 'react';
import { StepBarContainer, Step } from './StepBar.styled';

const StepBar = ({ currentStep, onStepClick }) => {
  const steps = ['step 1', 'step 2', 'step 3'];

  return (
    <StepBarContainer>
      {steps.map((step, index) => (
        <Step
          key={index}
          active={index <= currentStep}
          onClick={() => {
            if (index <= currentStep) {
              onStepClick(index);
            }
          }}
        />
      ))}
    </StepBarContainer>
  );
};

export default StepBar;
