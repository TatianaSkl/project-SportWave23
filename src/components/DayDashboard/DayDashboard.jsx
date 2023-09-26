import icon from 'images/sprite.svg';
import {
  Number,
  TextBox,
  TextWarning,
  WrapperBox,
  WrapperDaily,
  WrapperTime,
  IconWarning,
  WrapperWarning,
  WrapperCalories,
  WrapperRest,
  TextBoxGrey,
  WrapperTablet,
} from './DayDashboard.styled';
import { useSelector } from 'react-redux';
import { selectallCaloriesDay, selectallExercisesDay } from 'redux/diary/selectors';

export const DayDashboard = () => {
  const allCaloriesDay = useSelector(selectallCaloriesDay);
  const allExercisesDay = useSelector(selectallExercisesDay);

  return (
    <div>
      <WrapperTablet>
        <WrapperBox>
          <WrapperDaily>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-devices'}></use>
              </svg>
              <TextBox>Daily calorie intake</TextBox>
            </div>
            <Number>2200</Number>
          </WrapperDaily>
          <WrapperTime>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-dumbbell'}></use>
              </svg>
              <TextBox>Daily nom of sports</TextBox>
            </div>
            <Number>110 min</Number>
          </WrapperTime>
        </WrapperBox>
        <WrapperBox>
          <WrapperCalories>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-apple'}></use>
              </svg>
              <TextBoxGrey>Calories consumed</TextBoxGrey>
            </div>
            <Number>{allCaloriesDay}</Number>
          </WrapperCalories>
          <WrapperCalories>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-fire'}></use>
              </svg>
              <TextBoxGrey>Calories burned</TextBoxGrey>
            </div>
            <Number>{allExercisesDay}</Number>
          </WrapperCalories>
        </WrapperBox>
        <WrapperBox>
          <WrapperRest>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-bubble'}></use>
              </svg>
              <TextBoxGrey>The rest of the caloris</TextBoxGrey>
            </div>
            <Number>1493</Number>
          </WrapperRest>
          <WrapperRest>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-running'}></use>
              </svg>
              <TextBoxGrey>The rest of sports </TextBoxGrey>
            </div>
            <Number>85 min</Number>
          </WrapperRest>
        </WrapperBox>
      </WrapperTablet>
      <WrapperWarning>
        <div>
          <IconWarning width="24" height="24">
            <use href={icon + '#icon-exclamation'}></use>
          </IconWarning>
        </div>
        <TextWarning>
          Record all your meals in a calorie diary every day. This will help me be aware of my
          nutrition and make me responsible for my choices.
        </TextWarning>
      </WrapperWarning>
    </div>
  );
};
