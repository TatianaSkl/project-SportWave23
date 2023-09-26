import { DayDashboard, DayExercises, DayProducts, DaySwitch, TitlePage } from 'components';
import { SectionDiary, Wrapper, WrapperMobil, WrapperTablet } from './Diary.styled';
import { useDispatch } from 'react-redux';
import { getDataExercises, getDataProducts } from 'redux/diary/operations';
import { useEffect } from 'react';

export default function Diary() {
  const dispatch = useDispatch();

  const date = '2023-09-15';

  useEffect(() => {
    dispatch(getDataProducts(date));
    dispatch(getDataExercises(date));
  }, [dispatch]);

  return (
    <SectionDiary>
      <Wrapper>
        <TitlePage text="Diary" />
        <DaySwitch />
      </Wrapper>
      <WrapperMobil>
        <DayDashboard />
        <DayProducts />
        <DayExercises />
      </WrapperMobil>
      <WrapperTablet>
        <div>
          <DayProducts />
          <DayExercises />
        </div>
        <DayDashboard />
      </WrapperTablet>
    </SectionDiary>
  );
}
