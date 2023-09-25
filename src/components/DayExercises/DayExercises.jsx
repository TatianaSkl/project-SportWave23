import {
  IconArrow,
  LinkExercises,
  Text,
  Title,
  WrapperDayExercises,
  WrapperFlex,
} from './DayExercises.styled';

export const DayExercises = () => {
  return (
    <WrapperDayExercises>
      <WrapperFlex>
        <Title>Execrcises</Title>
        <LinkExercises to="/exercises">
          Add exercise
          <IconArrow />
        </LinkExercises>
      </WrapperFlex>
      <Text>Not found exercises</Text>
    </WrapperDayExercises>
  );
};
