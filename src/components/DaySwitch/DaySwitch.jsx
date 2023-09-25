import { useRef, useState } from 'react';
import icon from 'images/sprite.svg';
import { ChevronButton, DataButton, Icon, IconLeft, IconRight, Wrapper } from './DaySwitch.styled';

export const DaySwitch = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);

  const switchToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    handleDateChange(previousDay);
  };

  const switchToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    handleDateChange(nextDay);
  };

  const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}/${String(
    currentDate.getMonth() + 1
  ).padStart(2, '0')}/${currentDate.getFullYear()}`;

  const handleDateChange = date => {
    setCurrentDate(date);
    setIsDatepickerOpen(false);
  };

  const buttonRef = useRef(null);

  const handleCalenderBtnClick = () => {
    setIsDatepickerOpen(prev => !prev);
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DataButton type="button" onClick={handleCalenderBtnClick} ref={buttonRef}>
          {formattedDate}
        </DataButton>
        <div>
          <Icon>
            <use href={icon + '#icon-calendar-2'}></use>
          </Icon>
        </div>
      </div>
      <ChevronButton
        type="button"
        tabIndex={isDatepickerOpen ? -1 : 0}
        onClick={switchToPreviousDay}
      >
        <IconLeft />
      </ChevronButton>
      <button type="button" tabIndex={isDatepickerOpen ? -1 : 0} onClick={switchToNextDay}>
        <IconRight />
      </button>
      {/* {isDatepickerOpen && (
        <StyledDatepicker
          selectedDate={currentDate}
          setSelectedDate={handleDateChange}
          isOpen={isDatepickerOpen}
          setIsOpen={setIsDatepickerOpen}
          anchorEl={buttonRef.current}
        />
      )} */}
    </Wrapper>
  );
};
