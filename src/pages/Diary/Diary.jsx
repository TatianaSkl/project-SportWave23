import { DayDashboard, DayExercises, DayProducts, DaySwitch, TitlePage } from 'components';
import { SectionDiary } from './Diary.styled';

export default function Diary() {
  return (
    <SectionDiary>
      <div style={{ display: 'flex' }}>
        <TitlePage text="Diary" />
        <DaySwitch />
      </div>
      <DayProducts />
      <DayExercises />
      <DayDashboard />
    </SectionDiary>
  );
}
