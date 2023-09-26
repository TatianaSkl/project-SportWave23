import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarGlobalStyles } from './DatePicker.styled';

const StyledDatepicker = ({ selectedDate, setSelectedDate, isOpen }) => {
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 2)}
        open={isOpen}
        customInput={<div style={{ display: 'none' }} />}
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
