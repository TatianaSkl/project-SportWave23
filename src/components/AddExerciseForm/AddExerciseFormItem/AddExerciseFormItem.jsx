import {
  ExerciseModalList,
  ExerciseModalLink,
  ExerciseModalLinkSub,
  ExerciseModalLinkTitle,
} from './AddExerciseFormItem.styled';

const AddExerciseFormItem = ({ name, bodypart, target, equipment, time }) => {
  const firstLetterToUppercase = title => {
    return title.replace(title[0], title[0].toUpperCase());
  };

  return (
    <ExerciseModalList>
      <ExerciseModalLink>
        <ExerciseModalLinkSub>Name</ExerciseModalLinkSub>
        <ExerciseModalLinkTitle>
          {firstLetterToUppercase(name)}
        </ExerciseModalLinkTitle>
      </ExerciseModalLink>
      <ExerciseModalLink>
        <ExerciseModalLinkSub>Target</ExerciseModalLinkSub>
        <ExerciseModalLinkTitle>
          {firstLetterToUppercase(target)}
        </ExerciseModalLinkTitle>
      </ExerciseModalLink>
      <ExerciseModalLink>
        <ExerciseModalLinkSub>Body Part</ExerciseModalLinkSub>
        <ExerciseModalLinkTitle>
          {firstLetterToUppercase(bodypart)}
        </ExerciseModalLinkTitle>
      </ExerciseModalLink>
      <ExerciseModalLink>
        <ExerciseModalLinkSub>Equipment</ExerciseModalLinkSub>
        <ExerciseModalLinkTitle>
          {firstLetterToUppercase(equipment)}
        </ExerciseModalLinkTitle>
      </ExerciseModalLink>
      <ExerciseModalLink>
        <ExerciseModalLinkSub>Time</ExerciseModalLinkSub>
        <ExerciseModalLinkTitle>{time} minutes</ExerciseModalLinkTitle>
      </ExerciseModalLink>
    </ExerciseModalList>
  );
};

export default AddExerciseFormItem;
