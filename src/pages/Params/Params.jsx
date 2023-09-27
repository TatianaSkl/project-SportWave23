import { Section } from 'components';
import ParamsForm from 'components/ParamsForm/ParamsForm';
import StepBar from 'components/StepBar/StepBar';
import { useState } from 'react';

export default function Params() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <Section>
      <ParamsForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <StepBar currentStep={currentStep} onStepClick={handleStepClick} />
    </Section>
  );
}
