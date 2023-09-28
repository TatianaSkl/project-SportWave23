import { Section } from 'components';
import {MainContent, BottomBar} from './Params.styled'
import ParamsForm from 'components/ParamsForm/ParamsForm';
import StepBar from 'components/StepBar/StepBar';
import { useState } from 'react';

export default function Params() {
  const [currentStep, setCurrentStep] = useState(0);

  
  return (
    <Section>
      <MainContent>
      <ParamsForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </MainContent>
      <BottomBar>
      <StepBar currentStep={currentStep} onStepClick={setCurrentStep} />
      </BottomBar>
    </Section>
  );
}
