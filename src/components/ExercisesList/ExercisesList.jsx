import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ExercisesItem } from 'components';
import { ExercisesListAll, LoadingText } from './ExercisesList.styled';
import { fetchExercises } from 'redux/exercises/operations';
import { selectExercises } from 'redux/exercises/selectors';
import BasicModalWindow from 'components/BasicModalWindow/BasicModalWindow';
import { ExersiceModalWindow } from 'components';
import { AddExerciseSuccess } from 'components';

export const ExercisesList = ({ exerciseName }) => {
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const openModalToggle = el => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const exercises = useSelector(selectExercises);

  const filteredExercises = exercises.filter(
    exercise => exercise.bodyPart || exercise.target || exercise.equipment === exerciseName
  );
  return (
    <>
      {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {modalData.gifUrl ? (
            <ExersiceModalWindow data={modalData} onClick={openModalToggle} />
          ) : (
            <AddExerciseSuccess
              closeModal={closeModal}
              data={modalData}
              cal={modalData}
              onClick={closeModal}
            />
          )}
        </BasicModalWindow>
      )}
      <ExercisesListAll>
        {filteredExercises.length ? (
          filteredExercises.map(el => (
            <ExercisesItem key={el._id} data={el} openModalToggle={openModalToggle} />
          ))
        ) : (
          <LoadingText>Please wait. We are loading exercises.</LoadingText>
        )}
      </ExercisesListAll>
    </>
  );
};
