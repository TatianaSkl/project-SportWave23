import { createGlobalStyle, styled } from 'styled-components';
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
   
  }
  .react-datepicker {
  position: absolute;
  right: 0;
  top: 0;
    transform: translate(0%, -10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    border: none;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative; 
    background-color: #ef8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
   color: #EFEDE8;
    font-size: 16px;
    line-height: normal;
   letter-spacing: -0.32px;
  padding-bottom:14px;
  }
  .react-datepicker__current-month,
.react-datepicker-time__header,
.react-datepicker-year-header {
  margin-top: 0;
  color: #EFEDE8;
  font-weight: 500;
  font-size: 16px;
}
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    text-align: center;
    color: #EFEDE8;
    opacity: 50%;
  }
  .react-datepicker__navigation {
    margin-top: 15px;
    color: #EFEDE8;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  // .react-datepicker__navigation-icon{
  //   color: #EFEDE8; 
  // }
  .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  border-color: #EFEDE8;
  border-style: solid;
  border-width: 1.5px 1.5px 0 0;
  content: "";
  display: block;
  height: 9px;
  position: absolute;
  top: 6px;
  width: 9px;
}
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: #EFEDE8;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #EFEDE8;
    margin-top: 8px;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #EFEDE8;
    font-size: 14px;
    font-style: normal;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:#000;
    color:#EFEDE8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color:#040404;
    color:#EFEDE8;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:#040404;
    color:#EFEDE8;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:#040404;
    color:#EFEDE8;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }

`;

export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  // font-weight: 00;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;
