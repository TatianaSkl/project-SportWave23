import {
  IconArrow,
  LinkExercises,
  Text,
  Title,
  WrapperDayExercises,
  WrapperFlex,
  WrapperScrol,
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
      <WrapperScrol>
        <Text>Not found exercises</Text>
      </WrapperScrol>
    </WrapperDayExercises>
  );
};
