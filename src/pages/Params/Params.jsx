import { Section } from 'components';
import ParamsForm from 'components/ParamsForm/ParamsForm';
import StepBar from 'components/StepBar/StepBar';
import { useState } from 'react';
import { Wrapper } from './Params.styled';
import { Wrap } from 'pages/Welcome/Welcom.styled';

export default function Params() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Wrap>
      <Section>
        <Wrapper>
          <ParamsForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <StepBar currentStep={currentStep} onStepClick={setCurrentStep} />
        </Wrapper>
      </Section>
    </Wrap>
  );
}
