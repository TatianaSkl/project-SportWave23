import {
  ExerciseItemEl,
  BtnWrapper,
  MainTitle,
  BtnText,
  Title,
  Statistics,
  StatItem,
  StatItemValue,
} from './ExercisesItem.styled';

const texts = {
  mainTitle: 'Workout',
  btnText: 'Start',
  stats: {
    burnedCalories: 'Burned calories:',
    bodyPart: 'Body part:',
    target: 'Target:',
  },
};

const capitalizeFirstLeter = string => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const ExercisesItem = data => {
  return (
    <ExerciseItemEl>
      <BtnWrapper>
        <MainTitle>{texts.mainTitle}</MainTitle>
        <BtnText type="button">{texts.btnText}</BtnText>
      </BtnWrapper>
      <Title>{capitalizeFirstLeter(data.data.name)} </Title>
      <Statistics>
        {Object.keys(texts.stats).map(e => (
          <StatItem key={e}>
            {texts.stats[e]}
            <StatItemValue>
              {capitalizeFirstLeter(String(data.data[e]))}
            </StatItemValue>
          </StatItem>
        ))}
      </Statistics>
    </ExerciseItemEl>
  );
};
