import { Loader } from 'components';
import {
  FormattedTitle,
  PlayIcon,
  TimerBtn,
  TimerSub,
  TimerText,
  TimerTitle,
  TimerWrapper,
} from './ExercisesTimer.styled';

import sprite from '../../images/sprite.svg';

const ExercisesTimer = ({ data }) => {
  return (
    <TimerWrapper>
      <TimerTitle>Time</TimerTitle>
      <Loader />
      <FormattedTitle>{data.time}</FormattedTitle>
      <TimerBtn>
        <PlayIcon>
          <use href={sprite + '#icon-play'}> </use>
        </PlayIcon>
      </TimerBtn>
      <TimerText>
        Burned calories:
        <TimerSub>{data.burnedCalories}</TimerSub>
      </TimerText>
    </TimerWrapper>
  );
};

export default ExercisesTimer;
