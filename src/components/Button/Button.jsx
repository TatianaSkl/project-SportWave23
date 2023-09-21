import { PressButton } from './Button.styled';

export const Button = ({ label, disabled }) => {
  return (
    <PressButton type="submit" disabled={disabled}>
      {label}
    </PressButton>
  );
};
