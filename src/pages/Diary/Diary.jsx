import { DayDashboard, DayExercises, DayProducts, DaySwitch, TitlePage } from 'components';
import { SectionDiary, Wrapper, WrapperMobil, WrapperTablet } from './Diary.styled';
import { useDispatch } from 'react-redux';
import { getDataExercises, getDataProducts } from 'redux/diary/operations';
import { useEffect, useState } from 'react';
// import { selectExercises, selectProducts } from 'redux/diary/selectors';

export default function Diary() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
    2,
    '0'
  )}-${String(currentDate.getDate()).padStart(2, '0')}`;
  // const products = useSelector(selectProducts);
  // const exercises = useSelector(selectExercises);
  const [date, setDate] = useState(formattedDate);
  // const [prod, setProd] = useState(products);
  // const [exer, setExer] = useState(exercises);
  const dispatch = useDispatch();

  const formatToYYYYMMDD = date => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`;
  };

  const handleDateChange = newDate => {
    const formattedNewDate = formatToYYYYMMDD(newDate);
    setDate(formattedNewDate);
  };

  useEffect(() => {
    dispatch(getDataProducts(date));
    dispatch(getDataExercises(date));
  }, [dispatch, date]);

  // useEffect(() => {
  //   dispatch(getDataProducts(date));
  //   dispatch(getDataExercises(date));
  // }, [dispatch, date]);

  return (
    <SectionDiary>
      <Wrapper>
        <TitlePage text="Diary" />
        <DaySwitch onDateChange={handleDateChange} />
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
