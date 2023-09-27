import { TimerProgress, TimerProgressCircle } from './Loader/Loader.styled';

const Loader = () => {
  return (
    <TimerProgress viewBox="0 0 220 220">
      <TimerProgressCircle cx="110" cy="110" r="105"></TimerProgressCircle>
      <circle cx="110" cy="110" r="105"></circle>
    </TimerProgress>
  );
};

export default Loader;
