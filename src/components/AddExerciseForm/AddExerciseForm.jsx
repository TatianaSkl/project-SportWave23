import AddExerciseFormItem from './AddExerciseFormItem/AddExerciseFormItem';
import {
  ExerciseModalContainer,
  ExerciseModalImg,
  ExerciseModalImgWrapper,
  ExerciseModalTimer,
  ExerciseModalWindowBtn,
  ExerciseModalWindowWrap,
  BoxBtn,
} from './AddExerciseForm.styled';
import ExercisesTimer from 'components/ExercisesTimer/ExercisesTimer';
import { addExercis } from 'redux/diary/operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const ExersiceModalWindow = ({ data, onClick }) => {
  const [currentTime, setCurrentTime] = useState(180);
  const dispatch = useDispatch();

  const {
    bodyPart,
    equipment,
    burnedCalories,
    gifUrl,
    name,
    target,
    time,
    _id,
  } = data;

  const calories = Math.floor((currentTime / 60) * (burnedCalories / time));

  const handleAddExercise = () => {
    const currentDate = new Date();
    const date = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

    const amount = burnedCalories;

    dispatch(
      addExercis({
        date,
        exerciseId: _id,
        time,
        calories,
      })
    )
      .then(() => {
        onClick(amount);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <ExerciseModalContainer>
      <ExerciseModalWindowWrap>
        <ExerciseModalImgWrapper>
          <ExerciseModalImg src={gifUrl} alt={name} />
        </ExerciseModalImgWrapper>
        <ExerciseModalTimer>
          <AddExerciseFormItem
            name={name}
            bodypart={bodyPart}
            target={target}
            equipment={equipment}
            time={time}
          />
          <ExercisesTimer
            burnedCalories={calories}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            time={time}
          />
        </ExerciseModalTimer>
        <BoxBtn>
          <ExerciseModalWindowBtn type="button" onClick={handleAddExercise}>
            Add to diary
          </ExerciseModalWindowBtn>
        </BoxBtn>
      </ExerciseModalWindowWrap>
    </ExerciseModalContainer>
  );
};
