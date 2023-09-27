import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import {
  // selectExercises,
  // selectProducts,
  selectallCaloriesDay,
  selectallExercisesDay,
  selectallTimeDay,
} from 'redux/diary/selectors';
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
// import { useEffect } from 'react';
// import { getDataExercises, getDataProducts } from 'redux/diary/operations';

export const DayDashboard = () => {
  // const dispatch = useDispatch();
  const allCaloriesDay = useSelector(selectallCaloriesDay);
  const allExercisesDay = useSelector(selectallExercisesDay);
  const allTimeDay = useSelector(selectallTimeDay);
  const user = useSelector(selectUser);
  // const products = useSelector(selectProducts);
  // const exercises = useSelector(selectExercises);

  const restOfCalories = user.bmr - allCaloriesDay;
  const restOfSports = Math.abs(allTimeDay - 110);

  // useEffect(() => {
  //   if (products !== selectProducts) {
  //     dispatch(getDataProducts(date));
  //   }

  //   if (exercises !== selectExercises) {
  //     dispatch(getDataExercises(date));
  //   }
  // }, [date, products, exercises, selectProducts, selectExercises, dispatch]);

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
            <Number>{user.bmr}</Number>
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
          <WrapperRest
            style={{
              borderColor: restOfCalories >= 0 ? 'rgba(239, 237, 232, 0.2)' : '#D80027',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-bubble'}></use>
              </svg>
              <TextBoxGrey>The rest of the caloris</TextBoxGrey>
            </div>
            <Number>{restOfCalories}</Number>
          </WrapperRest>
          <WrapperRest
            style={{
              borderColor: allTimeDay > 110 ? '#3CBF61' : 'rgba(239, 237, 232, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="20" height="20">
                <use href={icon + '#icon-running'}></use>
              </svg>
              <TextBoxGrey>The rest of sports </TextBoxGrey>
            </div>
            <Number>{allTimeDay > 110 ? `+${restOfSports}` : restOfSports} min</Number>
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
