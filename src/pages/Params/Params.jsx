import { Section } from 'components';
import ParamsForm from 'components/ParamsForm/ParamsForm';
import StepBar from 'components/StepBar/StepBar';

export default function Params() {
  return (
    <Section>
      <StepBar />
      <ParamsForm />
    </Section>
  );
}
