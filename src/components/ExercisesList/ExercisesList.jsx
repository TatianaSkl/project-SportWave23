import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ExercisesItem } from 'components';
import { ExercisesListAll, LoadingText } from './ExercisesList.styled';
import { fetchExercises } from 'redux/exercises/operations';
import { selectExercises } from 'redux/exercises/selectors';

export const ExercisesList = ({ exerciseName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(selectExercises);
  console.log(exercises);
  const filteredExercises = exercises.filter(
    exercise =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName
  );
  return (
    <ExercisesListAll>
      {filteredExercises.length ? (
        filteredExercises.map(el => <ExercisesItem key={el._id} data={el} />)
      ) : (
        <LoadingText>Please wait. We are loading exercises.</LoadingText>
      )}
    </ExercisesListAll>
  );
};
