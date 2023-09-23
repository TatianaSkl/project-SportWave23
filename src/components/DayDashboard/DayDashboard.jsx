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
} from './DayDashboard.styled';

export const DayDashboard = () => {
  return (
    <div>
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
          <Number>707</Number>
        </WrapperCalories>
        <WrapperCalories>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20">
              <use href={icon + '#icon-fire'}></use>
            </svg>
            <TextBoxGrey>Calories burned</TextBoxGrey>
          </div>
          <Number>855</Number>
        </WrapperCalories>
      </WrapperBox>
      <WrapperBox>
        <WrapperRest>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20">
              <use href={icon + '#icon-bubble'}></use>
            </svg>
            <TextBoxGrey>The rest of the calories</TextBoxGrey>
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
