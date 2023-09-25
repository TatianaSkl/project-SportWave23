import icon from 'images/sprite.svg';
import { ChevronButton, DataButton, Icon, IconLeft, IconRight, Wrapper } from './DaySwitch.styled';

export const DaySwitch = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DataButton>20/07/2023</DataButton>
        <div>
          <Icon>
            <use href={icon + '#icon-calendar-2'}></use>
          </Icon>
        </div>
      </div>
      <ChevronButton>
        <IconLeft />
      </ChevronButton>
      <button>
        <IconRight />
      </button>
    </Wrapper>
  );
};
