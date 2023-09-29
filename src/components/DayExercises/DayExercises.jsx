import { useDispatch, useSelector } from 'react-redux';
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
import { getDataExercises } from 'redux/diary/operations';

export const DayExercises = ({ date }) => {
  const exercises = useSelector(selectExercises);
  const dispatch = useDispatch();

  const handleTableClick = () => {
    dispatch(getDataExercises(date));
  };

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
          <ExercisesTable exercises={exercises} onDis={handleTableClick} />
        ) : (
          <Text>Not found exercises</Text>
        )}
      </WrapperScrol>
    </WrapperDayExercises>
  );
};
