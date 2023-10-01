import { useSelector } from 'react-redux';
import {
  IconArrow,
  LinkExercises,
  Text,
  Title,
  WrapperDayExercises,
  WrapperFlex,
  WrapperScrol,
} from './DayExercises.styled';
import { selectExercises } from 'redux/diary/selectors';
import { ExercisesTable } from 'components';

export const DayExercises = () => {
  const exercises = useSelector(selectExercises);

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
        {exercises?.length > 0 ? (
          <ExercisesTable exercises={exercises} />
        ) : (
          <Text>Not found exercises</Text>
        )}
      </WrapperScrol>
    </WrapperDayExercises>
  );
};
