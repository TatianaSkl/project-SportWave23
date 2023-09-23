import { DayDashboard, DayExercises, DayProducts, DaySwitch, TitlePage } from 'components';
import { SectionDiary, Wrapper, WrapperMobil } from './Diary.styled';

export default function Diary() {
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
      <div>
        <DayProducts />
        <DayExercises />
        <DayDashboard />
      </div>
    </SectionDiary>
  );
}
