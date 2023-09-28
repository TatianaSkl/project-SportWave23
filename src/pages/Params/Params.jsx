import { Section } from 'components';
import ParamsForm from 'components/ParamsForm/ParamsForm';
import StepBar from 'components/StepBar/StepBar';
import { useState } from 'react';
import { Wrap } from './Params.styled';

export default function Params() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Section>
      <Wrap>
        <ParamsForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <StepBar currentStep={currentStep} onStepClick={setCurrentStep} />
      </Wrap>
    </Section>
  );
}
