import {
  PictureWrap,
  AnimatedImage,
  TimeText,
  TimeSpinner,
  SpinnerWrap,
  TimeLeft,
  TimePauseButton,
  Calories,
  CaloriesValue,
  StatisticInfo,
  StatisticItem,
  StatisticList,
  StatisticSubtitle,
  AddButton,
} from './AddExerciseForm.styled';

const AddExerciseForm = ({ data }) => {
  const { bodyPart, equipment, gifUrl, name, target, burnedCalories, time } =
    data;

  return (
    <>
      <PictureWrap>
        <AnimatedImage src={gifUrl} alt={name} />
      </PictureWrap>
      <SpinnerWrap>
        <TimeText>Time</TimeText>
        <TimeSpinner>
          <TimeLeft>02:10</TimeLeft>
        </TimeSpinner>
        <TimePauseButton>||</TimePauseButton>
      </SpinnerWrap>
      <Calories>
        Burned calories: <CaloriesValue>{burnedCalories}</CaloriesValue>
      </Calories>
      <StatisticList>
        <StatisticItem>
          <StatisticSubtitle>Name</StatisticSubtitle>
          <StatisticInfo>{name}</StatisticInfo>
        </StatisticItem>
        <StatisticItem>
          <StatisticSubtitle>Target</StatisticSubtitle>
          <StatisticInfo>{target}</StatisticInfo>
        </StatisticItem>
        <StatisticItem>
          <StatisticSubtitle>Body part</StatisticSubtitle>
          <StatisticInfo>{bodyPart}</StatisticInfo>
        </StatisticItem>
        <StatisticItem>
          <StatisticSubtitle>Equipment</StatisticSubtitle>
          <StatisticInfo>{equipment}</StatisticInfo>
        </StatisticItem>
        <StatisticItem>
          <StatisticSubtitle>Time</StatisticSubtitle>
          <StatisticInfo>{time} minutes</StatisticInfo>
        </StatisticItem>
      </StatisticList>
      <AddButton type="submit">Add to diary</AddButton>
    </>
  );
};

export default AddExerciseForm;
