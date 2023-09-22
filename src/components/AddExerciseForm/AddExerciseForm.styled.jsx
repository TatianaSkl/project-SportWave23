import styled from '@emotion/styled';

const PictureWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 270px;
  height: 226px;
  margin-bottom: 14px;
  margin-right: auto;
  margin-left: auto;
`;

const AnimatedImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.2) 0%,
    rgba(4, 4, 4, 0.2) 100%
  );
`;

const TimeText = styled.p`
  text-align: center;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 10px;
  line-height: calc(14px / 10px);
`;

const TimeSpinner = styled.div`
  width: 125px;
  margin-top: 4px;
  margin-bottom: 14px;
  height: 125px;
  display: inherit;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(239, 237, 232, 0.1);
`;

const SpinnerWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TimeLeft = styled.span`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: calc(24px / 16px);
`;

const TimePauseButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #e6533c;
  color: #efede8;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Calories = styled.p`
  color: rgba(239, 237, 232, 0.3);
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  line-height: calc(18px / 14px);
`;

const CaloriesValue = styled.span`
  color: #e6533c;
`;

const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const StatisticItem = styled.li`
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background-color: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 8px) / 2);
`;

const StatisticSubtitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: calc(16px / 12px);
`;

const StatisticInfo = styled.span`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18px / 14px);
`;

const AddButton = styled.button`
  display: inline-flex;
  width: 151px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #e6533c;
  color: #efede8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18px / 16px);
  border: none;
`;

export {
  PictureWrap,
  AnimatedImage,
  TimeText,
  TimeSpinner,
  SpinnerWrap,
  TimeLeft,
  TimePauseButton,
  Calories,
  CaloriesValue,
  StatisticInfo,
  StatisticItem,
  StatisticList,
  StatisticSubtitle,
  AddButton,
};
