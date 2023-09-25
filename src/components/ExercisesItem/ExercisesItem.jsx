import {
  ExerciseItem,
  MainTitle,
  Title,
  TitleBlock,
  Statistics,
  Button,
  Span,
  StatItem,
} from './ExercisesItem.styled';
import { useDispatch } from 'react-redux';

const ExercisesItem = ({ name, burnedCalories, bodyPart, target, index }) => {
  const dispatch = useDispatch();

  return (
    <ExerciseItem>
      <MainTitle>WORKOUT</MainTitle>
      <TitleBlock>
        <svg
          width={24}
          height={24}
          style={{ marginRight: 16 }}
          viewBox="0 0 24 24"
        >
          <use href="" />
        </svg>
        <Title>{name}</Title>
      </TitleBlock>
      <Statistics>
        <StatItem>
          Burned calories: <Span>{burnedCalories}</Span>
        </StatItem>
        <StatItem>
          Body part: <Span>{bodyPart}</Span>
        </StatItem>
        <StatItem>
          Target: <Span>{target}</Span>
        </StatItem>
      </Statistics>
      <Button
        type="button"
        onClick={() => {
          dispatch();
        }}
      >
        Start
      </Button>
    </ExerciseItem>
  );
};

export default ExercisesItem;
