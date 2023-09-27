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

export const ExersiceModalWindow = ({ data }) => {
  const { bodyPart, equipment, gifUrl, name, target, time } = data;

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
          <ExercisesTimer data={data} />
        </ExerciseModalTimer>
        <BoxBtn>
          <ExerciseModalWindowBtn type="button">
            Add to diary
          </ExerciseModalWindowBtn>
        </BoxBtn>
      </ExerciseModalWindowWrap>
    </ExerciseModalContainer>
  );
};
