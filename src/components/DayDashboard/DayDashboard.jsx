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
import {
  selectallCaloriesDay,
  selectallExercisesDay,
  selectallTimeDay,
} from 'redux/diary/selectors';
import { useEffect, useState } from 'react';

export const DayDashboard = () => {
  const allCaloriesDay = useSelector(selectallCaloriesDay);
  const allExercisesDay = useSelector(selectallExercisesDay);
  const allTimeDay = useSelector(selectallTimeDay);
  const [data, setData] = useState({
    dailyCalorieIntake: 2200,
    dailyNormOfSports: 110,
    caloriesConsumed: allCaloriesDay,
    caloriesBurned: allExercisesDay,
    restOfCalories: 2200 - allCaloriesDay,
    restOfSports: 110 - allExercisesDay / 11,
  });

  useEffect(() => {
    setData(prevData => ({
      ...prevData,
      caloriesConsumed: allCaloriesDay,
      caloriesBurned: allExercisesDay,
      restOfCalories: prevData.dailyCalorieIntake - allCaloriesDay,
      restOfSports: (prevData.dailyNormOfSports - allExercisesDay / 11).toFixed(0),
    }));
  }, [allCaloriesDay, allExercisesDay, data.dailyCalorieIntake, data.dailyNormOfSports]);

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
            <Number>{data.dailyCalorieIntake}</Number>
          </WrapperDaily>
          <WrapperTime>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-dumbbell'}></use>
              </svg>
              <TextBox>Daily nom of sports</TextBox>
            </div>
            <Number>{data.dailyNormOfSports} min</Number>
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
            <Number>{data.caloriesConsumed}</Number>
          </WrapperCalories>
          <WrapperCalories>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-fire'}></use>
              </svg>
              <TextBoxGrey>Calories burned</TextBoxGrey>
            </div>
            <Number>{data.caloriesBurned}</Number>
          </WrapperCalories>
        </WrapperBox>
        <WrapperBox>
          <WrapperRest
            style={{
              borderColor: data.caloriesConsumed > data.dailyCalorieIntake ? '#D80027' : '#3CBF61',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-bubble'}></use>
              </svg>
              <TextBoxGrey>The rest of the caloris</TextBoxGrey>
            </div>
            <Number>{data.restOfCalories}</Number>
          </WrapperRest>
          <WrapperRest
            style={{
              borderColor: data.caloriesBurned > data.dailyNormOfSports ? '#D80027' : '#3CBF61',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-running'}></use>
              </svg>
              <TextBoxGrey>The rest of sports </TextBoxGrey>
            </div>
            <Number>{data.restOfSports} min</Number>
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
